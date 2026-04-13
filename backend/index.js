const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Límite de 5 envíos por IP cada 15 minutos
  message: { message: "Demasiados intentos. Por favor, intenta de nuevo más tarde." }
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, whatsapp, country, situation, situationOther, message, source, sourceOther } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "diego@magnamkt.com", // Assuming this is the Gmail or update as needed
    subject: `Nueva Reserva de Sesión: ${name}`,
    text: `
            Nombre y Apellido: ${name}
            Email: ${email}
            WhatsApp: ${whatsapp}
            País: ${country}
            Situación Actual: ${situation === "Otra (especificar abajo)" ? situationOther : situation}
            Mensaje: ${message}
            Cómo me conoció: ${source === "Otro" ? sourceOther : source}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email enviado correctamente" });
  } catch (error) {
    console.error("Error enviando email:", error);
    res.status(500).json({ message: "Error enviando email", error: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

