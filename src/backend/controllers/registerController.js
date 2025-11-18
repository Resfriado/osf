const crypto = require("crypto");
const registerUsuarioModel = require('../models/registerUsuarioModel.js');
const { showPage } = require("../core/utils/pageController.js");

const newPath = "../frontend/pages/auth/register/index.html";

exports.page = showPage(newPath);

exports.register = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    console.log("🔥 RAW PASSWORD SENT →", password);
    console.log("RAW PASSWORD DEBUG:", JSON.stringify(password));

    // 1️⃣ Validate fields
    if (!name || !email || !password) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    // 2️⃣ Check if email already exists
    const existingUser = await registerUsuarioModel.findByEmail(email);
    if (existingUser) {
      return res.status(409).send("Email já cadastrado.");
    }

    function normalizePassword(pw) {
      return String(pw || "")
        .replace(/[\r\n\t]/g, "")
        .trim();
    }

// then:
    const cleanPassword = normalizePassword(password);
    const passwordHash = crypto
      .createHash('md5')
      .update(cleanPassword)
      .digest('hex');

    // 4️⃣ Register user (now safe, uses 2 SQL queries)
    await registerUsuarioModel.registerNewUser(name, email, passwordHash);

    console.log(`✅ - Registered: ${email}, ${passwordHash}`);

    return res.redirect('/pricing');

  } catch (err) {
    console.error('❌ - Register error:', err);
    return res.status(500).send("Erro ao registrar usuário.");
  }
};