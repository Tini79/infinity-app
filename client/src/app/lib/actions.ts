"use server"
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod"

const FormSchema = z.object({
  // id: z.string(),
  full_name: z.string(),
  username: z.string(),
  country: z.string(),
  birthday: z.string(),
  email: z.string(),
  password: z.string(),
})

// const RegisterUser = FormSchema.omit({ id: true, birthday: true })
const LoginUser = FormSchema.omit({ full_name: true, country: true, birthday: true, email: true })
const RegisterUser = FormSchema
export async function registerUser(formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries())
    const data = RegisterUser.parse({
      full_name: rawData.full_name,
      username: rawData.username,
      country: rawData.country,
      birthday: rawData.birthday,
      email: rawData.email,
      password: rawData.password,
    })
    // TODO: dari depan hash juga passnya klo bisa
    // TODO: yg terkirim ke backend data: {}, gimana cranya biar data di dlmnya saja yg terkirim!?
    const { status } = await axios.post("http://localhost:3200/registration", { data })
    if (status == 200) {
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
    const insertedData = LoginUser.parse({
      username: rawData.username,
      password: rawData.password
    })
    const { data } = await axios.post("http://localhost:3200/login", { insertedData })
    if (data.statusCode == 200) {   
      revalidatePath("/")   
      return data.data
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw error;
  }
}