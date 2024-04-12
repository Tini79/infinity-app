"use server"
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod"
const FormSchema = z.object({
  full_name: z.string().trim().nonempty("full name is required!"),
  username: z.string().trim().nonempty("username is required!"),
  country: z.string().trim().nonempty("country is required!"),
  // TODO: validasi age belum isi: tidak boleh masih berusia kecil gitu
  birthday: z.coerce.date(),
  email: z.string().email("invalid email address").trim().nonempty("email is required!"),
  password: z.string().trim().nonempty("password is required!"),
})
const FormSchemaRequired = FormSchema.required()

const RegisterUser = FormSchemaRequired
const LoginUser = FormSchema.omit({ full_name: true, country: true, birthday: true, email: true })
const RequiredLoginUser = LoginUser.required()
export async function registerUser(formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries())
    // format date
    const offsetMinutes = new Date().getTimezoneOffset()
    const offsetHours = offsetMinutes / 60
    const date = rawData.birthday.toString().split("-")
    const year = parseInt(date[0])
    const month = parseInt(date[1]) - 1
    const day = parseInt(date[2])
    const newDate = new Date(year, month, day)
    newDate.setHours(newDate.getHours() - (offsetHours))
    const formattedBirthday = newDate

    const insertedData = RegisterUser.safeParse({
      full_name: rawData.full_name,
      username: rawData.username,
      country: rawData.country,
      birthday: formattedBirthday,
      email: rawData.email,
      password: rawData.password,
    })

    if (!insertedData.success) {
      console.log(insertedData.error.issues)
      return
    }

    // TODO: dari depan hash juga passnya klo bisa
    const { data } = await axios.post("http://localhost:3200/registration", insertedData)
    if (data.statusCode == 200) {
      // TODO: coba pelajari lagi soal revalidatePath ini 
      revalidatePath("/login")
      redirect("/login")
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw error;
  }
}

export async function loginUser(currState: any, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries())
    const insertedData = RequiredLoginUser.safeParse({
      username: rawData.username,
      password: rawData.password
    })

    if (!insertedData.success) {
      console.log(insertedData.error.issues)
      return
    }

    const { data } = await axios.post("http://localhost:3200/login", insertedData)
    if (data.statusCode == 200) {
      revalidatePath("/")
      return data.data
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw error;
  }
}