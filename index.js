const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./Data/courses.json");

app.get("/hello", (req, res) => {
	res.send("Hello World!");
});
app.get("/", (req, res) => {
	res.send(courses);
});
app.get("/courses/:id", (req, res) => {
	const id = parseInt(req.params.id);
	console.log(id);
	const course =
		courses.find((cours) => cours.id === id) ||
		"No Data Founded in This  Route !! Please check valid route Number";
	res.send(course);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
