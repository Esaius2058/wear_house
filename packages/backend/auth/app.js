const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const users = [];

app.post("/signup", async (req, res) => {
  const { fullname, email, phone, password, role } = req.body;

  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return res.status(400).send("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: users.length + 1,
    fullname,
    email,
    phone,
    password: hashedPassword,
    role,
  };
  users.push(user);

  res.send("Signup successful! Please log in.");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).send("Invalid email or password.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send("Invalid email or password.");
  }

  req.session.userId = user.id;
  req.session.userRole = user.role;
  res.send("Login successful!");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send("Please log in to access this page.");
  }

  res.send(`Welcome to your dashboard! You are a ${req.session.userRole}.`);
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out.");
    }
    res.send("Logout successful!");
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
