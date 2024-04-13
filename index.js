const express = require("express");
const bodyParser = require("body-parser");
const db = require("./DBConnection");
const cors = require("cors");
const app = express();
app.use(cors());
const multer = require("multer");
const userRoutes = require("./users/userRoutes.js");
const orphanageRoutes = require("./orphanages/orphanageRoutes.js");
const organizationRoutes = require("./organizations/organizationRoutes.js");
const donationRequestRoutes = require("./donationRequests/donationRequestRoutes.js");
const donationRoutes = require("./donation/donationRoutes.js");
const institutionRoutes = require("./institutions/institutionRoutes.js");
const { campRoutes } = require("./camp/campRoutes.js");
const insDonationRequestRoutes = require("./instituteDonationRequests/donationRequestRoutes.js");
const insDonationRoutes = require("./instituteDonation/donationRoutes.js");
app.use(express.static(`${__dirname}/upload`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Tvm Community working" });
});

app.use("/user", userRoutes);
app.use("/orphanage", orphanageRoutes);
app.use("/institute", institutionRoutes);
app.use("/organization", organizationRoutes);
app.use("/donation-request", donationRequestRoutes);
app.use("/donation", donationRoutes);
app.use("/ins-donation-request", insDonationRequestRoutes);
app.use("/ins-donation", insDonationRoutes);
app.use("/camp", campRoutes)
app.all("/*", (req, res) => {
  res.status(404).json({ message: "Route not found." });
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server started successfully on port ", PORT);
});
