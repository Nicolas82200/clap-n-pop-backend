const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3100;

app.use("/assets", express.static(path.join(__dirname, "assets")));

const movies = [
	{
		id: 1,
		title: "Harry Potter",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/8KpHRokGpiaqEGpjYe0rpywtvUx.jpg",
		actors: [
			{ actorName: "Daniel Radcliffe", actorImg: "acotrImg" },
			{ actorName: "Emma Watson", actorImg: "acotrImg" },
			{ actorName: "Rupert Grint", actorImg: "acotrImg" },
			{ actorName: "Bonnie Wright", actorImg: "acotrImg" },
		],
		movieSong: "http://localhost:3100/assets/song/harry-potter.wav",
		synopsis: `Le film Harry Potter à l'école des sorciers raconte l’histoire de Harry Potter, un jeune garçon orphelin élevé par son oncle et sa tante, qui le maltraitent et lui cachent ses origines.
Le jour de ses 11 ans, Harry découvre qu’il est en réalité un sorcier et qu’il est admis à la célèbre école de magie Poudlard. Là-bas, il se fait ses premiers amis, Ron Weasley et Hermione Granger, et commence à apprendre la magie.
Mais Harry découvre aussi qu’il est célèbre dans le monde des sorciers : bébé, il a survécu à une attaque du terrible mage noir Voldemort, qui a tué ses parents.
Au fil de l’année, Harry et ses amis soupçonnent qu’un mystérieux objet, la pierre philosophale, est caché à Poudlard et qu’elle pourrait être volée. En enquêtant, ils se retrouvent confrontés à un danger bien plus grand qu’ils ne l’imaginaient.
Le film suit ainsi la première année de Harry à Poudlard, entre découvertes magiques, amitié et affrontement contre les forces du mal.`,
		gender: ["Aventure", "Famille", "Fantastique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img01.png",
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img02.png",
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img03.png",
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=Q4niQwkV1PI",
		producer: "Chris Columbus",
	},
	{
		id: 2,
		title: "Avatar",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
		actors: [
			{ actorName: "Sam Worthington", actorImg: "acotrImg" },
			{ actorName: "Zoe Saldana", actorImg: "acotrImg" },
			{ actorName: "Sigourney Weaver", actorImg: "acotrImg" },
			{ actorName: "Kate Winslet", actorImg: "acotrImg" },
		],
		movieSong: "http://localhost:3100/assets/song/harry-potter.wav",
		synopsis: `Le film Harry Potter à l'école des sorciers raconte l’histoire de Harry Potter, un jeune garçon orphelin élevé par son oncle et sa tante, qui le maltraitent et lui cachent ses origines.
Le jour de ses 11 ans, Harry découvre qu’il est en réalité un sorcier et qu’il est admis à la célèbre école de magie Poudlard. Là-bas, il se fait ses premiers amis, Ron Weasley et Hermione Granger, et commence à apprendre la magie.
Mais Harry découvre aussi qu’il est célèbre dans le monde des sorciers : bébé, il a survécu à une attaque du terrible mage noir Voldemort, qui a tué ses parents.
Au fil de l’année, Harry et ses amis soupçonnent qu’un mystérieux objet, la pierre philosophale, est caché à Poudlard et qu’elle pourrait être volée. En enquêtant, ils se retrouvent confrontés à un danger bien plus grand qu’ils ne l’imaginaient.
Le film suit ainsi la première année de Harry à Poudlard, entre découvertes magiques, amitié et affrontement contre les forces du mal.`,
		gender: ["Aventure", "Famille", "Fantastique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img01.png",
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img02.png",
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img03.png",
			"http://localhost:3100/assets/images/movie-images/harry-potter/harrypotter-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=Q4niQwkV1PI",
		producer: "Chris Columbus",
	},
];

app.use(cors("*"));
app.get("/", (req, res) => {
	res.json(movies);
});

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
