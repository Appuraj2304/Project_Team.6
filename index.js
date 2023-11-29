const express = require("express");
const { BlobServiceClient } = require("@azure/storage-blob");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2"); // Add MySQL2 library

const app = express();
const port = 3002;

// Connect to MySQL database
const db = mysql.createConnection({
  host: "localhost", // replace with your MySQL host
  user: "root", // replace with your MySQL username
  password: "Appuraj@2304", // replace with your MySQL password
  database: "vacationouting", // replace with your MySQL database name
});

// Check MySQL connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Destination page
app.get("/goa", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Destination/goa/goa.html"));
});

app.get("/maldives", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/maldives/Maldives.html")
  );
});

app.get("/tajmahal", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/tajmahal/tajmahal.html")
  );
});

// Packages page

app.get("/Pondichery", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Pondichery/Pondichery.html")
  );
});

app.get("/NarmadaRiver", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "/Packages/Narmadha River/Narmadha River.html"
    )
  );
});
app.get("/manali", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Manaali/Manaali.html")
  );
});

app.get("/shimla", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Simla/Simla.html"));
});

app.get("/ooty", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Ooty/Ooty.html"));
});

app.get("/munar", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Munar/Munar.html"));
});

app.get("/bangalore", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Bengalur/Bengalur.html")
  );
});

// Booking Form page
app.get("/bookingform", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Bookingform.html"));
});
app.post("/bookingform", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
    const user = await User.create({
      name,
      address,
      email,
      contact_no,
      indate,
      outdate,
    });

    // You can also perform additional actions here if needed

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed. Please try again.");
  }
});

app.get("/privacy&policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/privacy index.html"));
});

app.get("/tearms&condition", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/terms.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/faq.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
