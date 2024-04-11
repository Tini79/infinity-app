const express = require('express')
const cors = require('cors')
const con = require('./config/connection')
const fs = require('fs')
const response = require('./response')
const bcrypt = require('bcrypt')
const app = express()
const authenticateToken = require('./middleware')
const { generateAccessToken } = require('./auth')
const port = 3200

app.use(cors())
app.use(express.json())

// TODO: belum kelar ini
app.get('/countries', (req, res) => {
  const headers = new Headers()
  headers.append("X-CSCAPI-KEY", "API_KEY")

  const reqOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  }
  fetch("https://api.countrystatecity.in/v1/countries", reqOptions)
    .then(response => response.text())
    .then(res => console.log(res, 'fuuu'))
    .catch(err => console.log("error:", err))
})

app.get('/', (req, res) => {
  res.send("404 | Page not found")
})

// TODO: sempat mau coba autheticate token, tapi belum kelar itu yak, nanti mungkin pas maintenance aja tambahin atau kalo sempet sebelum launch
app.get('/categories', (req, res) => {
  const path = req.path.split("/")[1]
  const data = getAllData(path)
  response(200, data, "Successfully retrieved category data", res)
})

// TODO: berhubung data yg diambil belum dari db, mungkin nanti bisa dikondisikan ya, yg benar" popular dan data terbaru (untuk new arrivals)
app.get('/popular-categories', (req, res) => {
  const path = req.path.split("/")[1]
  const data = getAllData(path)
  response(200, data, "Successfully retrieved popular category data", res)
})

app.get('/testimonials', (req, res) => {
  const path = req.path.split("/")[1]
  const data = getAllData(path)
  response(200, data, "Successfully retrieved testimonial data", res)
})

app.get('/category/:slug', (req, res) => {
  const path = req.path.split("/")[1]
  const data = getAllData(path, req.params.slug)
  response(200, data, `Successfully retrieved ${req.params.slug} category data`, res)
})

app.post('/registration', (req, res) => {
  // TODO: validasi untuk data email dan username yg harus unik, belum isi
  // TODO: ingat validasi, country_code atau country_name yg bakalan disimpan di db, hash pass dan tanggal yg diinsert formatnya kyk gimana
  const fullName = req.body.data.full_name
  const username = req.body.data.username
  const country = req.body.data.country
  const birthday = req.body.data.birthday
  const email = req.body.data.email
  const plainPassword = req.body.data.password
  const saltRounds = 11
  // TODO: kyknya dulu gw pernah nonton dari video sandhika galih soal callback ini deh, jadi aku bisa ngakses variable dari luar callback but caranya agak ribet emang, coba cari videonya lagi deh
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(plainPassword, salt, (err, hashed) => {
      if (err) throw err
      const sql = `INSERT INTO users (full_name, username, country, birthday, email, password) VALUES (?, ?, ?, ?, ?, ?)`
      con.query(sql, [fullName, username, country, birthday, email, hashed], (err, fields) => {
        // TODO: nanti coba pelajari ini lebih dalam yak tentang try catch atau middlewarenya; obrolannya ad di chat gpt
        if (err) {
          // TODO: bahaya banget pakai ini throw cuk, sekali kena sistem bakalan berhenti terus
          throw err
          // response(400, "", "Database error!", res)
          // return
        }
        if (fields.affectedRows) response(200, `Inserted Id ${fields.insertId}`, "Successfully registered new user", res)
      })
    })
  })
})

app.post('/login', (req, res) => {
  const username = req.body.insertedData.username
  // TODO: belum isi response jika datanya nggak ada gimana
  const sql = `SELECT password FROM users WHERE username = ?`
  con.query(sql, [username], (err, fields) => {
    if (err) throw err
    bcrypt.compare(req.body.insertedData.password, fields[0].password, (err, res2) => {
      if (err) {
        throw err
      }

      if (res2) {
        const accessToken = generateAccessToken(username)
        response(200, accessToken, "User is available", res)
      } else {
        response(404, "", "User is not found!", res)
      }
    })
  })
})

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
})

const getAllData = (category, param = "") => {
  const data = fs.readFileSync("./lib/data.js", "utf-8", (err, data) => data)
  const jsonData = JSON.parse(data)
  if (param) {
    return jsonData[0][param]
  }
  return jsonData[0].data[category]
}