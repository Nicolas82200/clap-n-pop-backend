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
			"https://www.themoviedb.org/t/p/w600_and_h900_face/fbxQ44VRdM2PVzHSNajUseUteem.jpg",
		actors: [
			{
				actorName: "Daniel Radcliffe",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/harry-potter/Daniel-Radcliffe.jpg",
			},
			{
				actorName: "Emma Watson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/harry-potter/Emma-Watson.jpg",
			},
			{
				actorName: "Ruppert Grint",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/harry-potter/Ruppert-Grint.jpg",
			},
			{
				actorName: "Bonnie Wright",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/harry-potter/Bonnie-Wright.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/harry-potter.wav",
		synopsis: `Le film Harry Potter à l'école des sorciers raconte l'histoire de Harry Potter, un jeune garçon orphelin élevé par son oncle et sa tante, qui le maltraitent et lui cachent ses origines. Le jour de ses 11 ans, Harry découvre qu'il est en réalité un sorcier et qu'il est admis à la célèbre école de magie Poudlard. Là-bas, il se fait ses premiers amis, Ron Weasley et Hermione Granger, et commence à apprendre la magie. Mais Harry découvre aussi qu'il est célèbre dans le monde des sorciers : bébé, il a survécu à une attaque du terrible mage noir Voldemort, qui a tué ses parents.`,
		gender: ["Aventure", "Famille", "Fantastique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/harry-potter/harrypotter-img01.png",
			"http://localhost:3100/assets/images/movie-Images/harry-potter/harrypotter-img02.png",
			"http://localhost:3100/assets/images/movie-Images/harry-potter/harrypotter-img03.png",
			"http://localhost:3100/assets/images/movie-Images/harry-potter/harrypotter-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
		producer: "Chris Columbus",
	},
	{
		id: 2,
		title: "Avatar",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
		actors: [
			{
				actorName: "Sam Worthington",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avatar/Sam-Worthington.jpg",
			},
			{
				actorName: "Zoe Saldana",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avatar/Zoe-Saldana.jpg",
			},
			{
				actorName: "Sigourney Weaver",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avatar/Sigourney-Weaver.jpg",
			},
			{
				actorName: "Stephen Lang",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avatar/Stephen-Lang.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/avatar.wav",
		synopsis: `Dans un futur lointain, Jake Sully, un marine paraplégique, est envoyé sur la lune Pandora pour participer au programme Avatar. Il prend le contrôle d'un corps Na'vi hybride pour explorer ce monde hostile. En s'immergeant dans la culture des Na'vi, Jake tombe amoureux de Neytiri et est écartelé entre sa mission militaire et sa nouvelle famille. Lorsque les humains menacent de détruire l'Arbre des Âmes, lieu sacré des Na'vi, Jake choisit de défendre Pandora.`,
		gender: ["Action", "Aventure", "Science-Fiction"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/avatar/avatar-img01.png",
			"http://localhost:3100/assets/images/movie-Images/avatar/avatar-img02.png",
			"http://localhost:3100/assets/images/movie-Images/avatar/avatar-img03.png",
			"http://localhost:3100/assets/images/movie-Images/avatar/avatar-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
		producer: "James Cameron",
	},
	{
		id: 3,
		title: "Avengers",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
		actors: [
			{
				actorName: "Robert Downey Jr.",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avengers/Robert-Downey-Jr.jpg",
			},
			{
				actorName: "Chris Evans",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avengers/Chris-Evans.jpg",
			},
			{
				actorName: "Mark Ruffalo",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avengers/Mark-Ruffalo.jpg",
			},
			{
				actorName: "Chris Hemsworth",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/avengers/Chris-Hemsworth.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/avengers.wav",
		synopsis: `Nick Fury, directeur du S.H.I.E.L.D., rassemble une équipe de super-héros — Iron Man, Captain America, Thor, Hulk, Black Widow et Hawkeye — pour empêcher Loki, le dieu de la malice, de s'emparer du Tesseract et de soumettre la Terre à sa volonté. Malgré leurs personnalités incompatibles et leurs conflits internes, les Avengers devront apprendre à travailler ensemble pour faire face à une invasion extraterrestre menaçant toute l'humanité.`,
		gender: ["Action", "Aventure", "Super-héros"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/avengers/avengers-img01.png",
			"http://localhost:3100/assets/images/movie-Images/avengers/avengers-img02.png",
			"http://localhost:3100/assets/images/movie-Images/avengers/avengers-img03.png",
			"http://localhost:3100/assets/images/movie-Images/avengers/avengers-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
		producer: "Joss Whedon",
	},
	{
		id: 4,
		title: "Le Seigneur des anneaux",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
		actors: [
			{
				actorName: "Elijah Wood",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/seigneur-des-anneaux/Elijah-Wood.jpg",
			},
			{
				actorName: "Ian McKellen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/seigneur-des-anneaux/Ian-McKellen.jpg",
			},
			{
				actorName: "Viggo Mortensen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/seigneur-des-anneaux/Viggo-Mortensen.jpg",
			},
			{
				actorName: "Dominic Monaghan",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/seigneur-des-anneaux/Dominic-Monaghan.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/seigneur-des-anneaux.wav",
		synopsis: `Le jeune hobbit Frodon Sacquet hérite d'un anneau magique appartenant à son oncle Bilbon. Guidé par le magicien Gandalf, il découvre que cet anneau est en réalité l'Anneau Unique forgé par le Seigneur des ténèbres Sauron, qui cherche à le récupérer pour dominer la Terre du Milieu. Frodon et ses compagnons — la Communauté de l'Anneau — entament un périlleux voyage pour détruire l'anneau dans les feux de la Montagne du Destin.`,
		gender: ["Aventure", "Fantastique", "Action"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/seigneur-des-anneaux/seigneur-des-anneaux-img01.png",
			"http://localhost:3100/assets/images/movie-Images/seigneur-des-anneaux/seigneur-des-anneaux-img02.png",
			"http://localhost:3100/assets/images/movie-Images/seigneur-des-anneaux/seigneur-des-anneaux-img03.png",
			"http://localhost:3100/assets/images/movie-Images/seigneur-des-anneaux/seigneur-des-anneaux-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
		producer: "Peter Jackson",
	},
	{
		id: 5,
		title: "Le Parrain",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
		actors: [
			{
				actorName: "Al Pacino",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-parrain/Al-Pacino.jpg",
			},
			{
				actorName: "Marlon Brando",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-parrain/Marlon-Brando.jpg",
			},
			{
				actorName: "James Caan",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-parrain/James-Caan.jpg",
			},
			{
				actorName: "Diane Keaton",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-parrain/Diane-Keaton.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/le-parrain.wav",
		synopsis: `Vito Corleone est le patriarche d'une puissante famille de la mafia new-yorkaise. Après une tentative d'assassinat, c'est son fils cadet Michael, ancien combattant sans lien avec le crime organisé, qui reprend progressivement les rênes de l'empire familial. Ce chef-d'œuvre de Francis Ford Coppola explore la corruption, la loyauté, la trahison et le prix du pouvoir à travers la saga d'une famille mafieuse.`,
		gender: ["Crime", "Drame", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/le-parrain/parrain-img01.png",
			"http://localhost:3100/assets/images/movie-Images/le-parrain/parrain-img02.png",
			"http://localhost:3100/assets/images/movie-Images/le-parrain/parrain-img03.png",
			"http://localhost:3100/assets/images/movie-Images/le-parrain/parrain-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
		producer: "Francis Ford Coppola",
	},
	{
		id: 6,
		title: "Pulp Fiction",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
		actors: [
			{
				actorName: "John Travolta",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pulp-fiction/John-Travolta.jpg",
			},
			{
				actorName: "Samuel L. Jackson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pulp-fiction/Samuel-L-Jackson.jpg",
			},
			{
				actorName: "Bruce Willis",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pulp-fiction/Bruce-Willis.jpg",
			},
			{
				actorName: "Peter Greene",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pulp-fiction/Peter-Greene.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/pulp-fiction.wav",
		synopsis: `À travers une narration non linéaire, Pulp Fiction tisse les destins croisés de tueurs à gages philosophes, d'un boxeur corrompu, d'une femme de gangster et de braqueurs de fast-food dans les bas-fonds de Los Angeles. Chef-d'œuvre de Quentin Tarantino, le film mêle violence stylisée, dialogues cultes et humour noir pour dresser un portrait décalé du crime américain.`,
		gender: ["Crime", "Thriller", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/pulp-fiction/pulp-fiction-img01.png",
			"http://localhost:3100/assets/images/movie-Images/pulp-fiction/pulp-fiction-img02.png",
			"http://localhost:3100/assets/images/movie-Images/pulp-fiction/pulp-fiction-img03.png",
			"http://localhost:3100/assets/images/movie-Images/pulp-fiction/pulp-fiction-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
		producer: "Quentin Tarantino",
	},
	{
		id: 7,
		title: "Fight Club",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
		actors: [
			{
				actorName: "Edward Norton",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fight-club/Edward-Norton.jpg",
			},
			{
				actorName: "Brad Pitt",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fight-club/Brad-Pitt.jpg",
			},
			{
				actorName: "Jared Leto",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fight-club/Jared-Leto.jpg",
			},
			{
				actorName: "Helena Bonham Carter",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fight-club/Helena-Bonham-Carter.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/fight-club.wav",
		synopsis: `Un employé de bureau insomniaque et désabusé rencontre Tyler Durden, un vendeur de savon charismatique et anarchiste. Ensemble, ils fondent un club de combat clandestin qui se transforme progressivement en mouvement subversif. Ce thriller psychologique de David Fincher questionne la masculinité, la société de consommation et l'identité à travers un récit aux multiples retournements.`,
		gender: ["Drame", "Thriller", "Psychologique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/fight-club/fight-club-img01.png",
			"http://localhost:3100/assets/images/movie-Images/fight-club/fight-club-img02.png",
			"http://localhost:3100/assets/images/movie-Images/fight-club/fight-club-img03.png",
			"http://localhost:3100/assets/images/movie-Images/fight-club/fight-club-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
		producer: "David Fincher",
	},
	{
		id: 8,
		title: "Reservoir Dogs",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
		actors: [
			{
				actorName: "Michael Madsen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/reservoir-dogs/Michael-Madsen.jpg",
			},
			{
				actorName: "Quentin Tarantino",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/reservoir-dogs/Quentin-Tarantino.jpg",
			},
			{
				actorName: "Harvey Keitel",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/reservoir-dogs/Harvey-Keitel.jpg",
			},
			{
				actorName: "Steve Buscemi",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/reservoir-dogs/Steve-Buscemi.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/reservoir-dogs.wav",
		synopsis: `Après un braquage de bijouterie qui tourne au bain de sang, plusieurs criminels se retrouvent dans un entrepôt abandonné. Chacun ignore l'identité des autres, mais tous suspectent qu'un indic de la police se cache parmi eux. Premier long-métrage de Tarantino, Reservoir Dogs déconstruit le film de gangsters avec virtuosité, mêlant flashbacks, tension et dialogues ciselés.`,
		gender: ["Crime", "Thriller", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/reservoir-dogs/reservoir-dogs-img01.png",
			"http://localhost:3100/assets/images/movie-Images/reservoir-dogs/reservoir-dogs-img02.png",
			"http://localhost:3100/assets/images/movie-Images/reservoir-dogs/reservoir-dogs-img03.png",
			"http://localhost:3100/assets/images/movie-Images/reservoir-dogs/reservoir-dogs-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=7Aif1xjstws",
		producer: "Quentin Tarantino",
	},
	{
		id: 9,
		title: "Pirates des Caraïbes",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
		actors: [
			{
				actorName: "Johnny Depp",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pirates-des-caraibes/Johnny-Depp.jpg",
			},
			{
				actorName: "Keira Knightley",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pirates-des-caraibes/Keira-Knightley.jpg",
			},
			{
				actorName: "Orlando Bloom",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pirates-des-caraibes/Orlando-Bloom.jpg",
			},
			{
				actorName: "Geoffrey Rush",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/pirates-des-caraibes/Geoffrey-Rush.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/pirates-des-caraibes.wav",
		synopsis: `Le flamboyant et excentrique capitaine Jack Sparrow s'allie à Will Turner pour sauver Elizabeth Swann, fille du gouverneur, des griffes du pirate maudit Barbossa et de son équipage fantôme. À bord du légendaire Black Pearl, ils affrontent les dangers des mers des Caraïbes dans une aventure épique mêlant magie, humour et action.`,
		gender: ["Aventure", "Action", "Fantastique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/pirates-des-caraibes/pirates-des-caraibes-img01.png",
			"http://localhost:3100/assets/images/movie-Images/pirates-des-caraibes/pirates-des-caraibes-img02.png",
			"http://localhost:3100/assets/images/movie-Images/pirates-des-caraibes/pirates-des-caraibes-img03.png",
			"http://localhost:3100/assets/images/movie-Images/pirates-des-caraibes/pirates-des-caraibes-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=naQr0uTrH_s",
		producer: "Gore Verbinski",
	},
	{
		id: 10,
		title: "Titanic",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
		actors: [
			{
				actorName: "Kate Winslet",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/titanic/Kate-Winslet.jpg",
			},
			{
				actorName: "Leonardo DiCaprio",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/titanic/Leonardo-DiCaprio.jpg",
			},
			{
				actorName: "Billy Zane",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/titanic/Billy-Zane.jpg",
			},
			{
				actorName: "Kathy Bates",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/titanic/Kathy-Bates.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/titanic.wav",
		synopsis: `À bord du Titanic lors de son voyage inaugural en 1912, la jeune aristocrate Rose DeWitt Bukater tombe amoureuse de Jack Dawson, un artiste sans le sou voyageant en troisième classe. Leur histoire d'amour passionnée est brisée par la tragédie lorsque le paquebot entre en collision avec un iceberg et commence à couler, condamnant des milliers de passagers.`,
		gender: ["Romance", "Drame", "Catastrophe"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/titanic/titanic-img01.png",
			"http://localhost:3100/assets/images/movie-Images/titanic/titanic-img02.png",
			"http://localhost:3100/assets/images/movie-Images/titanic/titanic-img03.png",
			"http://localhost:3100/assets/images/movie-Images/titanic/titanic-img04.png",
		],
		trailer:
			"https://www.youtube.com/watch?v=I7c1etV7D7g&pp=ygUPdGl0YW5pYyB0cmFpbGVy",
		producer: "James Cameron",
	},
	{
		id: 11,
		title: "Interstellar",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
		actors: [
			{
				actorName: "Matthew McConaughey",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/interstellar/Mattew-McConaughey.jpg",
			},
			{
				actorName: "Jessica Chastain",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/interstellar/Jessica-Chastain.jpg",
			},
			{
				actorName: "Anne Hathaway",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/interstellar/Anne-Hathaway.jpg",
			},
			{
				actorName: "Timothée Chalamet",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/interstellar/Timothee-Chalamet.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/interstellar.wav",
		synopsis: `Dans un futur proche où la Terre se meurt, l'expilote Cooper est recruté pour mener une mission spatiale désespérée : traverser un trou de ver près de Saturne pour trouver une nouvelle planète habitable. Déchiré entre son amour pour sa fille Murph et son devoir envers l'humanité, Cooper explore des mondes inconnus audelà du temps et de l'espace dans ce voyage vertigineux à travers les lois de la physique.`,
		gender: ["ScienceFiction", "Aventure", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/interstellar/interstellar-img01.png",
			"http://localhost:3100/assets/images/movie-Images/interstellar/interstellar-img02.png",
			"http://localhost:3100/assets/images/movie-Images/interstellar/interstellar-img03.png",
			"http://localhost:3100/assets/images/movie-Images/interstellar/interstellar-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
		producer: "Christopher Nolan",
	},
	{
		id: 12,
		title: "Gladiator",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
		actors: [
			{
				actorName: "Russell Crowe",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/gladiator/Russell-Crowe.jpg",
			},
			{
				actorName: "Joaquin Phoenix",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/gladiator/Joaquin-Phoenix.jpg",
			},
			{
				actorName: "Connie Nielsen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/gladiator/Connie-Nielsen.jpg",
			},
			{
				actorName: "Richard Harris",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/gladiator/Richard-Harris.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/gladiator.wav",
		synopsis: `Maximus Decimus Meridius, général romain adulé, voit sa vie basculer quand l'empereur Marc Aurèle est assassiné par son fils Commode. Trahi, sa famille massacrée, Maximus est réduit en esclavage et devient gladiateur. Porté par la vengeance et l'espoir de rendre la liberté à Rome, il combat dans les arènes du Colisée pour affronter celui qui lui a tout pris.`,
		gender: ["Action", "Aventure", "Drame historique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/gladiator/gladiator-img01.png",
			"http://localhost:3100/assets/images/movie-Images/gladiator/gladiator-img02.png",
			"http://localhost:3100/assets/images/movie-Images/gladiator/gladiator-img03.png",
			"http://localhost:3100/assets/images/movie-Images/gladiator/gladiator-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
		producer: "Ridley Scott",
	},
	{
		id: 13,
		title: "Ghostbusters",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/7E8nLijS9AwwUEPu2oFYOVKhdFA.jpg",
		actors: [
			{
				actorName: "Harold Ramis",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/ghostbusters/Harold-Ramis.jpg",
			},
			{
				actorName: "Bill Murray",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/ghostbusters/Bill-Murray.jpg",
			},
			{
				actorName: "Dan Aykroyd",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/ghostbusters/Dan-Aykroyd.jpg",
			},
			{
				actorName: "Rick Moranis",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/ghostbusters/Rick-Moranis.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/ghostbusters.wav",
		synopsis: `Trois parapsychologues newyorkais, licenciés de leur université, fondent une agence de capture de fantômes : les SOS Fantômes. Rapidement débordés par une recrudescence paranormale dans la ville, ils affrontent Gozer, une entité démoniaque ancestrale qui menace de détruire New York. Mêlant comédie et fantastique, ce film culte des années 80 est devenu une référence de la culture pop.`,
		gender: ["Comédie", "Fantastique", "Action"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/ghostbusters/ghostbusters-img01.png",
			"http://localhost:3100/assets/images/movie-Images/ghostbusters/ghostbusters-img02.png",
			"http://localhost:3100/assets/images/movie-Images/ghostbusters/ghostbusters-img03.png",
			"http://localhost:3100/assets/images/movie-Images/ghostbusters/ghostbusters-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=6hDkhw5Wkas",
		producer: "Ivan Reitman",
	},
	{
		id: 14,
		title: "Indiana Jones",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
		actors: [
			{
				actorName: "Harrison Ford",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/indiana-jones/Harrison-Ford.jpg",
			},
			{
				actorName: "Karen Allen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/indiana-jones/Karen-Allen.jpg",
			},
			{
				actorName: "John Rhys-Davies",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/indiana-jones/John-Rhys-Davies.jpg",
			},
			{
				actorName: "Denholm Elliott",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/indiana-jones/Denholm-Elliott.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/indiana-jones.wav",
		synopsis: `En 1936, le professeur d'archéologie Indiana Jones est mandaté par le gouvernement américain pour retrouver l'Arche d'Alliance avant les nazis. Accompagné de son ancienne flamme Marion, il parcourt l'Égypte et affronte ses ennemis dans une course effrénée contre la montre. Un film d'aventure épique de Steven Spielberg qui a redéfini le genre et créé l'un des personnages les plus emblématiques du cinéma.`,
		gender: ["Aventure", "Action", "Fantastique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/indiana-jones/indiana-jones-img01.png",
			"http://localhost:3100/assets/images/movie-Images/indiana-jones/indiana-jones-img02.png",
			"http://localhost:3100/assets/images/movie-Images/indiana-jones/indiana-jones-img03.png",
			"http://localhost:3100/assets/images/movie-Images/indiana-jones/indiana-jones-img04.png",
		],
		trailer:
			"https://www.youtube.com/watch?v=0xQSIdSRlAk&pp=ygUVaW5kaWFuYSBqb25lcyB0cmFpbGVy0gcJCdMKAYcqIYzv",
		producer: "Steven Spielberg",
	},
	{
		id: 15,
		title: "Star Wars",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
		actors: [
			{
				actorName: "Mark Hamill",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-wars/Mark-Hamill.jpg",
			},
			{
				actorName: "Carrie Fisher",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-wars/Carrie-Fisher.jpg",
			},
			{
				actorName: "Harrison Ford",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-wars/Harrison-Ford.jpg",
			},
			{
				actorName: "Alec-Guinness",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-wars/Alec-Guinness.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/star-wars.wav",
		synopsis: `Dans une galaxie lointaine, le jeune Luke Skywalker découvre sa destinée de Jedi lorsqu'il reçoit un message d'une princesse en détresse. Accompagné du vieux Ben Kenobi, du contrebandier Han Solo et du Wookiee Chewbacca, il rejoint la Rébellion pour combattre l'Empire Galactique et détruire l'Étoile de la Mort, ultime arme de destruction massive commandée par le sinistre Dark Vador.`,
		gender: ["Science-Fiction", "Aventure", "Action"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/star-wars/star-wars-img01.png",
			"http://localhost:3100/assets/images/movie-Images/star-wars/star-wars-img02.png",
			"http://localhost:3100/assets/images/movie-Images/star-wars/star-wars-img03.png",
			"http://localhost:3100/assets/images/movie-Images/star-wars/star-wars-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=1g3_CFmnU7k",
		producer: "George Lucas",
	},
	{
		id: 16,
		title: "Star Trek",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/lV5OpzAss1z06YNagOVap1I35mH.jpg",
		actors: [
			{
				actorName: "Chris Pine",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-trek/Chris-Pine.jpg",
			},
			{
				actorName: "Zachary Quinto",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-trek/Zachary-Quinto.jpg",
			},
			{
				actorName: "Eric Bana",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-trek/Eric-Bana.jpg",
			},
			{
				actorName: "Simon Pegg",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/star-trek/Simon-Pegg.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/star-trek.wav",
		synopsis: `Ce reboot de la franchise Star Trek retrace les origines de James T. Kirk et Spock. Le jeune Kirk, rebelle et impulsif, intègre l'Académie de Starfleet où il rencontre le vulcain Spock. Ensemble, à bord de l'Enterprise, ils affrontent Nero, un Romulien venu du futur qui cherche à se venger en détruisant les planètes de la Fédération, dont Vulcain.`,
		gender: ["Science-Fiction", "Action", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/star-trek/star-trek-img01.png",
			"http://localhost:3100/assets/images/movie-Images/star-trek/star-trek-img02.png",
			"http://localhost:3100/assets/images/movie-Images/star-trek/star-trek-img03.png",
			"http://localhost:3100/assets/images/movie-Images/star-trek/star-trek-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=OBwS66EBUcY",
		producer: "J.J. Abrams",
	},
	{
		id: 17,
		title: "E.T.",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/an0nD6uq6byfxXCfk6lQBzdL2J1.jpg",
		actors: [
			{
				actorName: "Henry Thomas",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/e-t/Henry-Thomas.jpg",
			},
			{
				actorName: "Drew Barrymore",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/e-t/Drew-Barrymore.jpg",
			},
			{
				actorName: "Robert MacNaughton",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/e-t/Robert-MacNaughton.jpg",
			},
			{
				actorName: "Dee Wallace",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/e-t/Dee-Wallace.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/e-t.wav",
		synopsis: `Elliott, un jeune garçon solitaire, découvre un extraterrestre abandonné par ses congénères dans la banlieue de Los Angeles. Ils développent un lien émotionnel unique et télépathique. Alors que des agents gouvernementaux cherchent à capturer E.T., Elliott et ses frère et sœur font tout pour aider leur ami à contacter les siens et rentrer chez lui.`,
		gender: ["Science-Fiction", "Famille", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/e-t/e-t-img01.png",
			"http://localhost:3100/assets/images/movie-Images/e-t/e-t-img02.png",
			"http://localhost:3100/assets/images/movie-Images/e-t/e-t-img03.png",
			"http://localhost:3100/assets/images/movie-Images/e-t/e-t-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=qYAETtIIClk",
		producer: "Steven Spielberg",
	},
	{
		id: 18,
		title: "Le Bon, la Brute et le Truand",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
		actors: [
			{
				actorName: "Clint Eastwood",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-bon-la-brute-et-le-truand/Clint-Eastwood.jpg",
			},
			{
				actorName: "Eli Wallach",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-bon-la-brute-et-le-truand/Eli-Wallach.jpg",
			},
			{
				actorName: "Lee Van Cleef",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-bon-la-brute-et-le-truand/Lee-Van-Cleef.jpg",
			},
			{
				actorName: "Luigi Pistilli",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/le-bon-la-brute-et-le-truand/Luigi-Pistilli.jpg",
			},
		],
		movieSong:
			"http://localhost:3100/assets/song/le-bon-la-brute-et-le-truand.wav",
		synopsis: `Pendant la guerre de Sécession, trois pistoleros aux intérêts divergents — Blondin le bon, Angel Eyes la brute et Tuco le truand — se lancent dans une course au trésor pour s'emparer d'un magot enfoui dans un cimetière. Chef-d'œuvre du western spaghetti signé Sergio Leone, le film est célèbre pour son final en duel sous haute tension et sa bande originale inoubliable d'Ennio Morricone.`,
		gender: ["Western", "Aventure", "Action"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/le-bon-la-brute-et-le-truand/le-bon-la-brute-et-le-truand-img01.png",
			"http://localhost:3100/assets/images/movie-Images/le-bon-la-brute-et-le-truand/le-bon-la-brute-et-le-truand-img02.png",
			"http://localhost:3100/assets/images/movie-Images/le-bon-la-brute-et-le-truand/le-bon-la-brute-et-le-truand-img03.png",
			"http://localhost:3100/assets/images/movie-Images/le-bon-la-brute-et-le-truand/le-bon-la-brute-et-le-truand-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=WCN5JJY_wiA",
		producer: "Sergio Leone",
	},
	{
		id: 19,
		title: "Forrest Gump",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
		actors: [
			{
				actorName: "Tom Hanks",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/forrest-gump/Tom-Hanks.jpg",
			},
			{
				actorName: "Robin Wright",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/forrest-gump/Robin-Wright.jpg",
			},
			{
				actorName: "Gary Sinise",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/forrest-gump/Gary-Sinise.jpg",
			},
			{
				actorName: "Sally Field",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/forrest-gump/Sally-Field.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/forrest-gump.wav",
		synopsis: `Forrest Gump, un homme simple d'esprit mais au grand cœur originaire de l'Alabama, traverse malgré lui les grands événements de l'histoire américaine des années 50 aux années 80. Du Vietnam à la Maison Blanche, en passant par l'invention du ping-pong international, Forrest vit une vie extraordinaire tout en aimant éperdument Jenny, la femme de sa vie.`,
		gender: ["Drame", "Romance", "Comédie"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/forrest-gump/forrest-gump-img01.png",
			"http://localhost:3100/assets/images/movie-Images/forrest-gump/forrest-gump-img02.png",
			"http://localhost:3100/assets/images/movie-Images/forrest-gump/forrest-gump-img03.png",
			"http://localhost:3100/assets/images/movie-Images/forrest-gump/forrest-gump-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
		producer: "Robert Zemeckis",
	},
	{
		id: 20,
		title: "Orange mécanique",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
		actors: [
			{
				actorName: "Malcolm McDowell",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/orange-mecanique/Malcolm-McDowell.jpg",
			},
			{
				actorName: "Adrienne Corri",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/orange-mecanique/Adrienne-Corri.jpg",
			},
			{
				actorName: "Steven Berkoff",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/orange-mecanique/Steven-Berkoff.jpg",
			},
			{
				actorName: "David Prowse",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/orange-mecanique/David-Prowse.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/orange-mecanique.wav",
		synopsis: `Dans une Angleterre futuriste dystopique, Alex DeLarge, jeune délinquant ultraviolent et passionné de Beethoven, dirige une bande de malfaiteurs. Arrêté pour meurtre, il se soumet à une thérapie de conditionnement comportemental censée le guérir de ses pulsions violentes. Ce film culte de Stanley Kubrick explore les thèmes du libre arbitre, de la violence et du contrôle social avec une esthétique troublante.`,
		gender: ["Drame", "Science-Fiction", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/orange-mecanique/orange-mecanique-img01.png",
			"http://localhost:3100/assets/images/movie-Images/orange-mecanique/orange-mecanique-img02.png",
			"http://localhost:3100/assets/images/movie-Images/orange-mecanique/orange-mecanique-img03.png",
			"http://localhost:3100/assets/images/movie-Images/orange-mecanique/orange-mecanique-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=SPRzm8ibDQ8",
		producer: "Stanley Kubrick",
	},
	{
		id: 21,
		title: "Je suis une légende",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
		actors: [
			{
				actorName: "Will Smith",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/je-suis-une-legende/Will-Smith.jpg",
			},
			{
				actorName: "Alice Braga",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/je-suis-une-legende/Alice-Braga.jpg",
			},
			{
				actorName: "Willow Smith",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/je-suis-une-legende/Willow-Smith.jpg",
			},
			{
				actorName: "Charlie Tahan",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/je-suis-une-legende/Charlie-Tahan.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/je-suis-une-legende.wav",
		synopsis: `Robert Neville est apparemment le seul survivant humain à New York après qu'un virus a décimé l'humanité en transformant la majorité des gens en créatures nocturnes et agressives. Accompagné de son fidèle chien Sam, il tente de trouver un remède tout en survivant aux hordes de mutants. Un film d'horreur post-apocalyptique porté par une performance solo intense de Will Smith.`,
		gender: ["Science-Fiction", "Horreur", "Action"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/je-suis-une-legende/je-suis-une-legende-img01.png",
			"http://localhost:3100/assets/images/movie-Images/je-suis-une-legende/je-suis-une-legende-img02.png",
			"http://localhost:3100/assets/images/movie-Images/je-suis-une-legende/je-suis-une-legende-img03.png",
			"http://localhost:3100/assets/images/movie-Images/je-suis-une-legende/je-suis-une-legende-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=dtKMEAXyPkg",
		producer: "Francis Lawrence",
	},
	{
		id: 22,
		title: "Batman : The Dark Knight",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
		actors: [
			{
				actorName: "Christian Bale",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dark-knight/Christian-Bale.jpg",
			},
			{
				actorName: "Heath Ledger",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dark-knight/Heath-Ledger.jpg",
			},
			{
				actorName: "Gary Oldman",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dark-knight/Gary-Oldman.jpg",
			},
			{
				actorName: "Aaron Eckhart",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dark-knight/Aaron-Eckhart.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/dark-knight.wav",
		synopsis: `Batman, le procureur Harvey Dent et le commissaire Gordon s'allient pour lutter contre le crime organisé à Gotham City. Mais l'apparition du Joker, un criminel anarchiste d'une intelligence et d'une cruauté sans limites, plonge la ville dans le chaos. Heath Ledger livre une performance légendaire dans ce thriller de super-héros sombre et haletant signé Christopher Nolan.`,
		gender: ["Action", "Super-héros", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/dark-knight/dark-knight-img01.png",
			"http://localhost:3100/assets/images/movie-Images/dark-knight/dark-knight-img02.png",
			"http://localhost:3100/assets/images/movie-Images/dark-knight/dark-knight-img03.png",
			"http://localhost:3100/assets/images/movie-Images/dark-knight/dark-knight-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
		producer: "Christopher Nolan",
	},
	{
		id: 23,
		title: "Inception",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
		actors: [
			{
				actorName: "Leonardo DiCaprio",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/inception/Leonardo-DiCaprio.jpg",
			},
			{
				actorName: "Cillian Murphy",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/inception/Cillian-Murphy.jpg",
			},
			{
				actorName: "Joseph Gordon-Levitt",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/inception/Joseph-Gordon-Levitt.jpg",
			},
			{
				actorName: "Tom Hardy",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/inception/Tom-Hardy.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/inception.wav",
		synopsis: `Dom Cobb est un voleur spécialisé dans l'extraction d'informations secrètes dans les rêves de ses victimes. On lui propose une mission impossible : implanter une idée dans l'esprit d'un héritier. Pour rentrer chez lui et revoir ses enfants, Cobb assemble une équipe d'élite et plonge dans des niveaux de rêves imbriqués de plus en plus profonds, jusqu'à ne plus savoir distinguer le réel du fictif.`,
		gender: ["Science-Fiction", "Action", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/inception/inception-img01.png",
			"http://localhost:3100/assets/images/movie-Images/inception/inception-img02.png",
			"http://localhost:3100/assets/images/movie-Images/inception/inception-img03.png",
			"http://localhost:3100/assets/images/movie-Images/inception/inception-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
		producer: "Christopher Nolan",
	},
	{
		id: 24,
		title: "Apocalypse Now",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
		actors: [
			{
				actorName: "Martin Sheen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/apocalypse-now/Martin-Sheen.jpg",
			},
			{
				actorName: "Marlon Brando",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/apocalypse-now/Marlon-Brando.jpg",
			},
			{
				actorName: "Dennis Hopper",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/apocalypse-now/Dennis-Hopper.jpg",
			},
			{
				actorName: "Laurence Fishburne",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/apocalypse-now/Laurence-Fishburne.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/apocalypse-now.wav",
		synopsis: `Pendant la guerre du Viêtnam, le capitaine Willard est chargé d'une mission secrète : remonter le fleuve Nung jusqu'au Cambodge pour retrouver et éliminer le colonel Kurtz, un officier d'élite devenu fou qui règne en dieu sur une tribu locale. Inspiré du roman "Au cœur des ténèbres", ce chef-d'œuvre de Coppola est une plongée hallucinée dans les abysses de la folie guerrière.`,
		gender: ["Guerre", "Drame", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/apocalypse-now/apocalypse-now-img01.png",
			"http://localhost:3100/assets/images/movie-Images/apocalypse-now/apocalypse-now-img02.png",
			"http://localhost:3100/assets/images/movie-Images/apocalypse-now/apocalypse-now-img03.png",
			"http://localhost:3100/assets/images/movie-Images/apocalypse-now/apocalypse-now-img04.png",
		],
		trailer:
			"https://www.youtube.com/watch?v=9l-ViOOFH-s&pp=ygUWYXBvY2FseXBzZSBub3cgdHJhaWxlcg%3D%3D",
		producer: "Francis Ford Coppola",
	},
	{
		id: 25,
		title: "Matrix",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
		actors: [
			{
				actorName: "Keanu Reeves",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/matrix/Keanu-Reeves.jpg",
			},
			{
				actorName: "Carrie-Anne Moss",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/matrix/Carrie-Anne-Moss.jpg",
			},
			{
				actorName: "Laurence Fishburne",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/matrix/Laurence-Fishburne.jpg",
			},
			{
				actorName: "Hugo Weaving",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/matrix/Hugo-Weaving.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/matrix.wav",
		synopsis: `Thomas Anderson, programmeur le jour et hacker la nuit sous le pseudonyme Neo, est contacté par Morpheus qui lui révèle la vérité : le monde tel qu'il le connaît n'est qu'une simulation informatique appelée la Matrice, créée par des machines pour asservir l'humanité. Neo doit alors choisir entre retourner à sa vie illusoire ou rejoindre la résistance pour libérer l'humanité.`,
		gender: ["Science-Fiction", "Action", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/matrix/matrix-img01.png",
			"http://localhost:3100/assets/images/movie-Images/matrix/matrix-img02.png",
			"http://localhost:3100/assets/images/movie-Images/matrix/matrix-img03.png",
			"http://localhost:3100/assets/images/movie-Images/matrix/matrix-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
		producer: "Lana Wachowski",
	},
	{
		id: 26,
		title: "Requiem for a Dream",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
		actors: [
			{
				actorName: "Jennifer Connelly",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/requiem-for-a-dream/Jennifer-Connelly.jpg",
			},
			{
				actorName: "Jared Leto",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/requiem-for-a-dream/Jared-Leto.jpg",
			},
			{
				actorName: "Ellen Burstyn",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/requiem-for-a-dream/Ellen-Burstyn.jpg",
			},
			{
				actorName: "Marlon Wayans",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/requiem-for-a-dream/Marlon-Wayans.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/requiem-for-a-dream.wav",
		synopsis: `Quatre personnages vivant dans le quartier de Coney Island à Brooklyn voient leurs rêves se fracasser contre le mur de la dépendance. Harry et son ami Marion se perdent dans l'héroïne, Sara Goldfarb sombre dans l'addiction aux médicaments amaigrissants, et Tyrone est emporté par la spirale du deal. Un film éprouvant de Darren Aronofsky sur la destruction que provoque l'addiction.`,
		gender: ["Drame", "Thriller psychologique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/requiem-for-a-dream/requiem-for-a-dream-img01.png",
			"http://localhost:3100/assets/images/movie-Images/requiem-for-a-dream/requiem-for-a-dream-img02.png",
			"http://localhost:3100/assets/images/movie-Images/requiem-for-a-dream/requiem-for-a-dream-img03.png",
			"http://localhost:3100/assets/images/movie-Images/requiem-for-a-dream/requiem-for-a-dream-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=QBwzN4v1vA0",
		producer: "Darren Aronofsky",
	},
	{
		id: 27,
		title: "Terminator",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
		actors: [
			{
				actorName: "Arnold Schwarzenegger",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/terminator/Arnold-Schwarzenegger.jpg",
			},
			{
				actorName: "Linda Hamilton",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/terminator/Linda-Hamilton.jpg",
			},
			{
				actorName: "Michael Biehn",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/terminator/Michael-Biehn.jpg",
			},
			{
				actorName: "Earl Boen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/terminator/Earl-Boen.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/terminator.wav",
		synopsis: `En 2029, les machines ont pris le contrôle de la Terre et mènent une guerre d'extermination contre l'humanité. Skynet envoie un cyborg assassin dans le passé pour éliminer Sarah Connor, dont le fils John sera le futur chef de la résistance. Un soldat humain, Kyle Reese, est envoyé pour la protéger. Un film de science-fiction haletant qui a lancé la carrière de James Cameron et Arnold Schwarzenegger.`,
		gender: ["Science-Fiction", "Action", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/terminator/terminator-img01.png",
			"http://localhost:3100/assets/images/movie-Images/terminator/terminator-img02.png",
			"http://localhost:3100/assets/images/movie-Images/terminator/terminator-img03.png",
			"http://localhost:3100/assets/images/movie-Images/terminator/terminator-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=k64P4l2Wmeg",
		producer: "James Cameron",
	},
	{
		id: 28,
		title: "Scarface",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
		actors: [
			{
				actorName: "Al Pacino",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/scarface/Al-Pacino.jpg",
			},
			{
				actorName: "Michelle Pfeiffer",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/scarface/Michelle-Pfeiffer.jpg",
			},
			{
				actorName: "Steven Bauer",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/scarface/Steven-Bauer.jpg",
			},
			{
				actorName: "Robert Loggia",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/scarface/Robert-Loggia.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/scarface.wav",
		synopsis: `Tony Montana, réfugié cubain débarqué à Miami, gravit à la force du poignet les échelons du cartel de la drogue jusqu'à devenir le parrain de la cocaïne en Floride. Mais sa paranoïa croissante, sa consommation excessive et sa volonté de tout contrôler vont précipiter sa chute dans un bain de sang mémorable. Un portrait fulgurant de l'American Dream corrompu signé Brian De Palma.`,
		gender: ["Crime", "Drame", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/scarface/scarface-img01.png",
			"http://localhost:3100/assets/images/movie-Images/scarface/scarface-img02.png",
			"http://localhost:3100/assets/images/movie-Images/scarface/scarface-img03.png",
			"http://localhost:3100/assets/images/movie-Images/scarface/scarface-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=cv276Wg3e7I",
		producer: "Brian De Palma",
	},
	{
		id: 29,
		title: "La Liste de Schindler",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
		actors: [
			{
				actorName: "Liam Neeson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/liste-schindler/Liam-Neeson.jpg",
			},
			{
				actorName: "Ralph Fiennes",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/liste-schindler/Ralph-Fiennes.jpg",
			},
			{
				actorName: "Ben Kingsley",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/liste-schindler/Ben-Kingsley.jpg",
			},
			{
				actorName: "Embeth Davidtz",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/liste-schindler/Embeth-Davidtz.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/liste-schindler.wav",
		synopsis: `Oskar Schindler, industriel allemand membre du parti nazi, arrive à Cracovie pour s'enrichir en exploitant la main-d'œuvre juive. Mais face à l'horreur de la Shoah, il est progressivement transformé et consacre sa fortune à sauver plus de 1100 Juifs des camps d'extermination. Ce chef-d'œuvre de Spielberg, tourné en noir et blanc, est un témoignage bouleversant sur l'humanité face à la barbarie.`,
		gender: ["Drame historique", "Guerre"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/liste-schindler/liste-schindler-img01.png",
			"http://localhost:3100/assets/images/movie-Images/liste-schindler/liste-schindler-img02.png",
			"http://localhost:3100/assets/images/movie-Images/liste-schindler/liste-schindler-img03.png",
			"http://localhost:3100/assets/images/movie-Images/liste-schindler/liste-schindler-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=gG22XNhtnoY",
		producer: "Steven Spielberg",
	},
	{
		id: 30,
		title: "Transformers",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/riwrxn8gSdvHqARVxSlwMaEJxT3.jpg",
		actors: [
			{
				actorName: "Shia LaBeouf",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/transformers/Shia-LaBeouf.jpg",
			},
			{
				actorName: "Megan Fox",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/transformers/Megan-Fox.jpg",
			},
			{
				actorName: "Josh Duhamel",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/transformers/Josh-Duhamel.jpg",
			},
			{
				actorName: "John Turturro",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/transformers/John-Turturro.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/transformers.wav",
		synopsis: `Sam Witwicky, adolescent ordinaire, achète une vieille voiture qui s'avère être Bumblebee, un robot extraterrestre Autobot. Il se retrouve mêlé à une guerre intergalactique entre les Autobots, alliés des humains, et les Decepticons menés par Megatron, qui cherchent à s'emparer de l'AllSpark, une source d'énergie capable de donner vie à toutes les machines de la Terre.`,
		gender: ["Action", "Science-Fiction", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/transformers/transformers-img01.png",
			"http://localhost:3100/assets/images/movie-Images/transformers/transformers-img02.png",
			"http://localhost:3100/assets/images/movie-Images/transformers/transformers-img03.png",
			"http://localhost:3100/assets/images/movie-Images/transformers/transformers-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=CbX_SIz_9fk",
		producer: "Michael Bay",
	},
	{
		id: 31,
		title: "Les Dents de la mer",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/4REF6uyfOsPjZGNwjtTuxtGAdKJ.jpg",
		actors: [
			{
				actorName: "Richard Dreyfuss",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/les-dents-de-la-mer/Richard-Dreyfuss.jpg",
			},
			{
				actorName: "Roy Scheider",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/les-dents-de-la-mer/Roy-Scheider.jpg",
			},
			{
				actorName: "Robert Shaw",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/les-dents-de-la-mer/Robert-Shaw.jpg",
			},
			{
				actorName: "Lorraine Gary",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/les-dents-de-la-mer/Lorraine-Gary.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/dents-de-la-mer.wav",
		synopsis: `Un grand requin blanc terrorise les plages de la station balnéaire d'Amity Island. Le chef de la police Brody, l'océanographe Hooper et le vieux chasseur Quint s'embarquent sur un bateau de pêche pour traquer et tuer le monstre. Le premier blockbuster de l'histoire du cinéma, signé Spielberg, a redéfini le thriller et créé la notion de film-événement d'été.`,
		gender: ["Horreur", "Thriller", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/les-dents-de-la-mer/les-dents-de-la-mer-img01.png",
			"http://localhost:3100/assets/images/movie-Images/les-dents-de-la-mer/les-dents-de-la-mer-img02.png",
			"http://localhost:3100/assets/images/movie-Images/les-dents-de-la-mer/les-dents-de-la-mer-img03.png",
			"http://localhost:3100/assets/images/movie-Images/les-dents-de-la-mer/les-dents-de-la-mer-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=U1fu_sA7XhE",
		producer: "Steven Spielberg",
	},
	{
		id: 32,
		title: "Top Gun",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/85kNHM0BWHE9All9GYeofwnbnu5.jpg",
		actors: [
			{
				actorName: "Tom Cruise",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/top-gun/Tom-Cruise.jpg",
			},
			{
				actorName: "Val Kilmer",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/top-gun/Val-Kilmer.jpg",
			},
			{
				actorName: "Kelly McGillis",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/top-gun/Kelly-McGillis.jpg",
			},
			{
				actorName: "Tom Skerritt",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/top-gun/Tom-Skerritt.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/top-gun.wav",
		synopsis: `Pete "Maverick" Mitchell est un pilote de chasse talentueux mais impulsif sélectionné pour intégrer la prestigieuse école d'aviation Top Gun de la Marine américaine. Là-bas, il rivalise avec les meilleurs pilotes du pays, tombe amoureux de son instructrice et doit affronter ses démons intérieurs après un drame en vol. Un film culte des années 80 avec une bande originale inoubliable.`,
		gender: ["Action", "Drame", "Romance"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/top-gun/top-gun-img01.png",
			"http://localhost:3100/assets/images/movie-Images/top-gun/top-gun-img02.png",
			"http://localhost:3100/assets/images/movie-Images/top-gun/top-gun-img03.png",
			"http://localhost:3100/assets/images/movie-Images/top-gun/top-gun-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=xa_z57UatDY",
		producer: "Tony Scott",
	},
	{
		id: 33,
		title: "Robin des Bois",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/rOdM5PqRLLMjS8DaN5dnsU4b5Fp.jpg",
		actors: [
			{
				actorName: "Kevin Costner",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/robin-des-bois/Kevin-Costner.jpg",
			},
			{
				actorName: "Morgan Freeman",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/robin-des-bois/Morgan-Freeman.jpg",
			},
			{
				actorName: "Alan Rickman",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/robin-des-bois/Alan-Rickman.jpg",
			},
			{
				actorName: "Mary Elizabeth Mastrantonio",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/robin-des-bois/Mary-Elizabeth-Mastrantonio.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/robin-des-bois.wav",
		synopsis: `De retour des Croisades, Robin de Locksley découvre que son père a été assassiné et que le corrompu shérif de Nottingham opprime le peuple. Il prend la tête d'une bande de hors-la-loi dans la forêt de Sherwood et devient Robin des Bois, volant aux riches pour donner aux pauvres, tout en combattant pour la justice et l'amour de Marianne.`,
		gender: ["Aventure", "Action", "Romance"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/robin-des-bois/robin-des-bois-img01.png",
			"http://localhost:3100/assets/images/movie-Images/robin-des-bois/robin-des-bois-img02.png",
			"http://localhost:3100/assets/images/movie-Images/robin-des-bois/robin-des-bois-img03.png",
			"http://localhost:3100/assets/images/movie-Images/robin-des-bois/robin-des-bois-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=fhz5aB-u77Q",
		producer: "Kevin Reynolds",
	},
	{
		id: 34,
		title: "Highlander",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/df81BbHFHIrnZf5dWRFT4UAzh1C.jpg",
		actors: [
			{
				actorName: "Christophe Lambert",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/highlander/Christophe-Lambert.jpg",
			},
			{
				actorName: "Sean Connery",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/highlander/Sean-Connery.jpg",
			},
			{
				actorName: "Roxanne Hart",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/highlander/Roxanne-Hart.jpg",
			},
			{
				actorName: "Clancy Brown",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/highlander/Clancy-Brown.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/highlander.wav",
		synopsis: `Connor MacLeod est un guerrier écossais du XVIe siècle qui découvre qu'il est immortel après avoir survécu à une blessure mortelle. Guidé par le mystérieux Juan Sanchez Villa-Lobos Ramirez, il apprend les règles des Immortels : ils se combattent à travers les siècles jusqu'à ce qu'il n'en reste plus qu'un. Quatre cents ans plus tard, à New York, Connor affronte son ennemi juré Kurgan.`,
		gender: ["Fantastique", "Action", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/highlander/highlander-img01.png",
			"http://localhost:3100/assets/images/movie-Images/highlander/highlander-img02.png",
			"http://localhost:3100/assets/images/movie-Images/highlander/highlander-img03.png",
			"http://localhost:3100/assets/images/movie-Images/highlander/highlander-img04.png",
		],
		trailer:
			"https://www.youtube.com/watch?v=omOZyLmNMJs&pp=ygUSaGlnaGxhbmRlciB0cmFpbGVy",
		producer: "Russell Mulcahy",
	},
	{
		id: 35,
		title: "Grease",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/eaRVdZWk1rSFT4eDaRnUFR7I7xZ.jpg",
		actors: [
			{
				actorName: "John Travolta",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grease/John-Travolta.jpg",
			},
			{
				actorName: "Olivia Newton-John",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grease/Olivia-Newton-John.jpg",
			},
			{
				actorName: "Stockard Channing",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grease/Stockard-Channing.jpg",
			},
			{
				actorName: "Didi Conn",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grease/Didi-Conn.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/grease.wav",
		synopsis: `À la fin des années 50, la sage Sandy et le bad boy Danny se retrouvent dans la même école après une romance d'été. Tiraillés entre leurs différences de classe sociale et la pression de leurs groupes respectifs, ils tentent de se retrouver tout en naviguant dans les codes du lycée américain de l'époque. Une comédie musicale culte pleine d'énergie et de chansons inoubliables.`,
		gender: ["Comédie musicale", "Romance", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/grease/grease-img01.png",
			"http://localhost:3100/assets/images/movie-Images/grease/grease-img02.png",
			"http://localhost:3100/assets/images/movie-Images/grease/grease-img03.png",
			"http://localhost:3100/assets/images/movie-Images/grease/grease-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=THd96gHV7Tg",
		producer: "Randal Kleiser",
	},
	{
		id: 36,
		title: "Jurassic Park",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/i268GVIlp777W1Ykws5R3LYYLIw.jpg",
		actors: [
			{
				actorName: "Jeff Goldblum",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jurassic-park/Jeff-Goldblum.jpg",
			},
			{
				actorName: "Sam Neill",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jurassic-park/Sam-Neill.jpg",
			},
			{
				actorName: "Laura Dern",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jurassic-park/Laura-Dern.jpg",
			},
			{
				actorName: "Richard Attenborough",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jurassic-park/Richard-Attenborough.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/jurassic-park.wav",
		synopsis: `Le milliardaire John Hammond a réussi à cloner des dinosaures à partir d'ADN préservé dans de l'ambre et a ouvert un parc d'attractions unique sur une île. Avant l'ouverture, il invite des scientifiques et ses petits-enfants pour valider la sécurité du parc. Mais une panne générale libère les dinosaures et transforme le parc en cauchemar où les humains deviennent des proies.`,
		gender: ["Science-Fiction", "Aventure", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/jurassic-park/jurassic-park-img01.png",
			"http://localhost:3100/assets/images/movie-Images/jurassic-park/jurassic-park-img02.png",
			"http://localhost:3100/assets/images/movie-Images/jurassic-park/jurassic-park-img03.png",
			"http://localhost:3100/assets/images/movie-Images/jurassic-park/jurassic-park-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=lc0UehYemQA",
		producer: "Steven Spielberg",
	},
	{
		id: 37,
		title: "Dirty Dancing",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/osfBQ18P0y3pwT5qVuhdPk8btbj.jpg",
		actors: [
			{
				actorName: "Jennifer Grey",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dirty-dancing/Jennifer-Grey.jpg",
			},
			{
				actorName: "Patrick Swayze",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dirty-dancing/Patrick-Swayze.jpg",
			},
			{
				actorName: "Jerry Orbach",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dirty-dancing/Jerry-Orbach.jpg",
			},
			{
				actorName: "Cynthia Rhodes",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/dirty-dancing/Cynthia-Rhodes.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/dirty-dancing.wav",
		synopsis: `Durant l'été 1963, Frances "Baby" Houseman passe ses vacances avec sa famille dans un resort. Elle y rencontre Johnny Castle, le moniteur de danse charismatique du club, et tombe sous son charme. Contre l'avis de son père, elle prend des cours de danse avec lui et ils développent une relation passionnée. Une comédie romantique et musicale emblématique portée par la chanson "I've Had The Time Of My Life".`,
		gender: ["Romance", "Drame", "Comédie musicale"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/dirty-dancing/dirty-dancing-img01.png",
			"http://localhost:3100/assets/images/movie-Images/dirty-dancing/dirty-dancing-img02.png",
			"http://localhost:3100/assets/images/movie-Images/dirty-dancing/dirty-dancing-img03.png",
			"http://localhost:3100/assets/images/movie-Images/dirty-dancing/dirty-dancing-img04.png",
		],
		trailer:
			"https://www.youtube.com/watch?v=eIcmQNy9FsM&pp=ygUVZGlydHkgZGFuY2luZyB0cmFpbGVy",
		producer: "Emile Ardolino",
	},
	{
		id: 38,
		title: "Flashdance",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/5R9wQhbNsl42Ceaj4XXSI4JKJUe.jpg",
		actors: [
			{
				actorName: "Jennifer Beals",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/flashdance/Jennifer-Beals.jpg",
			},
			{
				actorName: "Joe Eszterhas",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/flashdance/Joe-Eszterhas.jpg",
			},
			{
				actorName: "Michael Nouri",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/flashdance/Michael-Nouri.jpg",
			},
			{
				actorName: "Sunny Johnson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/flashdance/Sunny-Johnson.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/flashdance.wav",
		synopsis: `Alex Owens est une jeune femme de 18 ans qui travaille comme soudeuse le jour et danseuse dans un bar la nuit, à Pittsburgh. Son rêve est d'intégrer la prestigieuse école de danse de la ville. Aidée par son patron dont elle tombe amoureuse, elle va tenter de réaliser son ambition. Un film culte des années 80 porté par la chanson "What a Feeling".`,
		gender: ["Drame", "Romance", "Comédie musicale"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/flashdance/flashdance-img01.png",
			"http://localhost:3100/assets/images/movie-Images/flashdance/flashdance-img02.png",
			"http://localhost:3100/assets/images/movie-Images/flashdance/flashdance-img03.png",
			"http://localhost:3100/assets/images/movie-Images/flashdance/flashdance-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=9aqbkd19pMA",
		producer: "Adrian Lyne",
	},
	{
		id: 39,
		title: "Footloose",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/9JEDjBCXCx3eKTSkXwispf0UN3O.jpg",
		actors: [
			{
				actorName: "Kevin Bacon",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/footloose/Kevin-Bacon.jpg",
			},
			{
				actorName: "Lori Singer",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/footloose/Lori-Singer.jpg",
			},
			{
				actorName: "Chris Penn",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/footloose/Chris-Penn.jpg",
			},
			{
				actorName: "Sarah Jessica Parker",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/footloose/Sarah-Jessica-Parker.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/footloose.wav",
		synopsis: `Ren McCormack, adolescent de Chicago, déménage dans une petite ville conservatrice où la danse et la musique rock sont interdites par un arrêté municipal imposé par un pasteur rigoriste. Refusant d'accepter cette absurdité, Ren se bat pour que les jeunes de la ville puissent organiser un bal de fin d'année. Une comédie musicale entraînante sur la liberté et la rébellion adolescente.`,
		gender: ["Comédie musicale", "Drame", "Romance"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/footloose/footloose-img01.png",
			"http://localhost:3100/assets/images/movie-Images/footloose/footloose-img02.png",
			"http://localhost:3100/assets/images/movie-Images/footloose/footloose-img03.png",
			"http://localhost:3100/assets/images/movie-Images/footloose/footloose-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=P4narQca4Oc",
		producer: "Herbert Ross",
	},
	{
		id: 40,
		title: "Retour vers le futur",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/iCgFtDUZxN8iUzNBCisjUrBmg2q.jpg",
		actors: [
			{
				actorName: "Michael J. Fox",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/retour-vers-le-futur/Michael-J-Fox.jpg",
			},
			{
				actorName: "Christopher Lloyd",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/retour-vers-le-futur/Christopher-Lloyd.jpg",
			},
			{
				actorName: "Lea Thompson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/retour-vers-le-futur/Lea-Thompson.jpg",
			},
			{
				actorName: "Crispin Glover",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/retour-vers-le-futur/Crispin-Glover.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/retour-vers-le-futur.wav",
		synopsis: `Marty McFly, adolescent de 1985, est propulsé accidentellement en 1955 à bord de la DeLorean à voyager dans le temps inventée par son ami excentrique Doc Brown. Il doit s'assurer que ses parents tombent bien amoureux, faute de quoi il ne naîtra jamais, tout en trouvant un moyen de revenir dans le futur. Un film d'aventure et de science-fiction devenu un classique intemporel.`,
		gender: ["Science-Fiction", "Aventure", "Comédie"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/retour-vers-le-futur/retour-vers-le-futur-img01.png",
			"http://localhost:3100/assets/images/movie-Images/retour-vers-le-futur/retour-vers-le-futur-img02.png",
			"http://localhost:3100/assets/images/movie-Images/retour-vers-le-futur/retour-vers-le-futur-img03.png",
			"http://localhost:3100/assets/images/movie-Images/retour-vers-le-futur/retour-vers-le-futur-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=qvsgGtivCgs",
		producer: "Robert Zemeckis",
	},
	{
		id: 41,
		title: "La Famille Addams",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/l2mq3aWw1ze6NsnwEWSWviziWvo.jpg",
		actors: [
			{
				actorName: "Anjelica Huston",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/famille-addams/Anjelica-Huston.jpg",
			},
			{
				actorName: "Christina Ricci",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/famille-addams/Christina-Ricci.jpg",
			},
			{
				actorName: "Raúl Juliá",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/famille-addams/Raul-Julia.jpg",
			},
			{
				actorName: "Christopher Lloyd",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/famille-addams/Christopher-Lloyd.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/famille-addams.wav",
		synopsis: `La macabre et excentrique famille Addams — Gomez, Morticia, Wednesday, Pugsley et l'oncle Fester — mène sa vie délicieusement gothique jusqu'à ce qu'un imposteur se fasse passer pour l'oncle Fester disparu depuis 25 ans, en réalité mandaté par une avocate cupide pour s'emparer de la fortune familiale. Une comédie noire hilarante adaptée de la célèbre bande dessinée.`,
		gender: ["Comédie", "Fantastique", "Famille"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/famille-addams/famille-addams-img01.png",
			"http://localhost:3100/assets/images/movie-Images/famille-addams/famille-addams-img02.png",
			"http://localhost:3100/assets/images/movie-Images/famille-addams/famille-addams-img03.png",
			"http://localhost:3100/assets/images/movie-Images/famille-addams/famille-addams-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=A6X4VAHdDVg",
		producer: "Barry Sonnenfeld",
	},
	{
		id: 42,
		title: "Black Swan",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/PgK9d0vegvPCx92b7c15sk4x8h.jpg",
		actors: [
			{
				actorName: "Natalie Portman",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/black-swan/Natalie-Portman.jpg",
			},
			{
				actorName: "Mila Kunis",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/black-swan/Mila-Kunis.jpg",
			},
			{
				actorName: "Vincent Cassel",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/black-swan/Vincent-Cassel.jpg",
			},
			{
				actorName: "Winona Ryder",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/black-swan/Winona-Ryder.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/black-swan.wav",
		synopsis: `Nina, danseuse étoile perfectionniste et fragile, décroche le rôle principal du Lac des Cygnes, devant incarner à la fois le Cygne Blanc pur et le Cygne Noir séducteur. Sous la pression du metteur en scène et la rivalité de sa doublure Lily, elle sombre dans une obsession dévorante qui efface la frontière entre réalité et hallucination. Un thriller psychologique intense récompensé par l'Oscar de Natalie Portman.`,
		gender: ["Thriller psychologique", "Drame", "Horreur"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/black-swan/black-swan-img01.png",
			"http://localhost:3100/assets/images/movie-Images/black-swan/black-swan-img02.png",
			"http://localhost:3100/assets/images/movie-Images/black-swan/black-swan-img03.png",
			"http://localhost:3100/assets/images/movie-Images/black-swan/black-swan-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=5jaI1XOB-bs",
		producer: "Darren Aronofsky",
	},
	{
		id: 43,
		title: "Le Grand Bleu",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/eoO9OkhstHjgODeUAlW2xr6BxRD.jpg",
		actors: [
			{
				actorName: "Jean Reno",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grand-bleu/Jean-Reno.jpg",
			},
			{
				actorName: "Jean-Marc Barr",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grand-bleu/Jean-Marc-Barr.jpg",
			},
			{
				actorName: "Rosanna Arquette",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grand-bleu/Rosanna-Arquette.jpg",
			},
			{
				actorName: "Luc Besson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/grand-bleu/Luc-Besson.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/grand-bleu.wav",
		synopsis: `Jacques Mayol et Enzo Molinari, deux plongeurs en apnée liés par une amitié d'enfance et une rivalité fraternelle, s'affrontent dans les compétitions de plongée libre en Méditerranée. Jacques, être mélancolique plus à l'aise avec les dauphins qu'avec les humains, est tiraillé entre son amour pour Johana et son attraction mystique pour les profondeurs de l'océan. Un film poétique et envoûtant de Luc Besson.`,
		gender: ["Drame", "Aventure", "Romance"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/le-grand-bleu/le-grand-bleu-img01.png",
			"http://localhost:3100/assets/images/movie-Images/le-grand-bleu/le-grand-bleu-img02.png",
			"http://localhost:3100/assets/images/movie-Images/le-grand-bleu/le-grand-bleu-img03.png",
			"http://localhost:3100/assets/images/movie-Images/le-grand-bleu/le-grand-bleu-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=WNkIjVyf3UQ",
		producer: "Luc Besson",
	},
	{
		id: 44,
		title: "James Bond",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/9YJVDUPQmQnHbl8S4UNbTDZDyU7.jpg",
		actors: [
			{
				actorName: "Daniel Craig",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/james-bond/Daniel-Craig.jpg",
			},
			{
				actorName: "Eva Green",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/james-bond/Eva-Green.jpg",
			},
			{
				actorName: "Mads Mikkelsen",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/james-bond/Mads-Mikkelsen.jpg",
			},
			{
				actorName: "Caterina Murino",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/james-bond/Caterina-Murino.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/james-bond.wav",
		synopsis: `Casino Royale retrace les débuts de James Bond comme agent 007. En mission pour anéantir le financement du terrorisme international, Bond doit affronter Le Chiffre, un banquier des organisations terroristes mondiales, lors d'une partie de poker à hauts enjeux au Casino Royale de Montenegro. Un reboot sombre et raffiné qui réinvente l'icône avec Daniel Craig.`,
		gender: ["Action", "Espionnage", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/james-bond/james-bond-img01.png",
			"http://localhost:3100/assets/images/movie-Images/james-bond/james-bond-img02.png",
			"http://localhost:3100/assets/images/movie-Images/james-bond/james-bond-img03.png",
			"http://localhost:3100/assets/images/movie-Images/james-bond/james-bond-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=GV_18deeAXk",
		producer: "Martin Campbell",
	},
	{
		id: 45,
		title: "Mission: Impossible",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/RzurOKfiw5DrKkcyjXMBjQ7xHq.jpg",
		actors: [
			{
				actorName: "Tom Cruise",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/mission-impossible/Tom-Cruise.jpg",
			},
			{
				actorName: "Ving Rhames",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/mission-impossible/Ving-Rhames.jpg",
			},
			{
				actorName: "Rebecca Ferguson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/mission-impossible/Rebecca-Ferguson.jpg",
			},
			{
				actorName: "Simon Pegg",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/mission-impossible/Simon-Pegg.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/mission-impossible.wav",
		synopsis: `Ethan Hunt, agent d'élite de l'IMF, est trahi lors d'une mission à Prague et se retrouve accusé d'avoir tué son équipe. Pour se disculper, il doit retrouver le NOC-List, une liste d'agents infiltrés dont un traître cherche à s'emparer pour la vendre. Cascade après cascade, Ethan démêle un complot qui remonte jusqu'au sommet de sa propre organisation.`,
		gender: ["Action", "Espionnage", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/mission-impossible/mission-impossible-img01.png",
			"http://localhost:3100/assets/images/movie-Images/mission-impossible/mission-impossible-img02.png",
			"http://localhost:3100/assets/images/movie-Images/mission-impossible/mission-impossible-img03.png",
			"http://localhost:3100/assets/images/movie-Images/mission-impossible/mission-impossible-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=L8Pbjh4EZRk",
		producer: "Brian De Palma",
	},
	{
		id: 46,
		title: "Le Magicien d'Oz",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/jBIVN3Ot73d4eGlL34T3jI5W0au.jpg",
		actors: [
			{
				actorName: "Judy Garland",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/magicien-doz/Judy-Garland.jpg",
			},
			{
				actorName: "Frank Morgan",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/magicien-doz/Frank-Morgan.jpg",
			},
			{
				actorName: "Ray Bolger",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/magicien-doz/Ray-Bolger.jpg",
			},
			{
				actorName: "Bert Lahr",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/magicien-doz/Bert-Lahr.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/magicien-doz.wav",
		synopsis: `Dorothy, une fillette du Kansas, est emportée avec son chien Toto par une tornade dans le pays enchanté d'Oz. Pour rentrer chez elle, elle suit la route de briques jaunes jusqu'à la Cité d'Émeraude pour rencontrer le grand Magicien d'Oz, accompagnée d'un épouvantail sans cervelle, d'un bûcheron sans cœur et d'un lion sans courage. Un classique intemporel du cinéma fantastique.`,
		gender: ["Fantastique", "Famille", "Comédie musicale"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/magicien-doz/magicien-doz-img01.png",
			"http://localhost:3100/assets/images/movie-Images/magicien-doz/magicien-doz-img02.png",
			"http://localhost:3100/assets/images/movie-Images/magicien-doz/magicien-doz-img03.png",
			"http://localhost:3100/assets/images/movie-Images/magicien-doz/magicien-doz-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=H_3T4DGw10U",
		producer: "Victor Fleming",
	},
	{
		id: 47,
		title: "Charlie et la chocolaterie",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/tR4PU2wRPzGKmF665lE5wULGb3X.jpg",
		actors: [
			{
				actorName: "Johnny Depp",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/charlie-chocolaterie/Johnny-Depp.jpg",
			},
			{
				actorName: "Freddie Highmore",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/charlie-chocolaterie/Freddie-Highmore.jpg",
			},
			{
				actorName: "Helena Bonham Carter",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/charlie-chocolaterie/Helena-Bonham-Carter.jpg",
			},
			{
				actorName: "Jordan Fry",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/charlie-chocolaterie/Jordan-Fry.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/charlie-chocolaterie.wav",
		synopsis: `Charlie Bucket, un garçon pauvre mais au cœur pur, trouve l'un des cinq tickets dorés cachés dans les tablettes de chocolat Wonka et gagne le droit de visiter la mystérieuse chocolaterie de Willy Wonka, fabrique de rêves et de merveilles sucrées. Au fil de la visite, les autres enfants éliminent un à un par leurs propres défauts, laissant Charlie face à une surprenante récompense.`,
		gender: ["Fantastique", "Famille", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/charlie-chocolaterie/charlie-chocolaterie-img01.png",
			"http://localhost:3100/assets/images/movie-Images/charlie-chocolaterie/charlie-chocolaterie-img02.png",
			"http://localhost:3100/assets/images/movie-Images/charlie-chocolaterie/charlie-chocolaterie-img03.png",
			"http://localhost:3100/assets/images/movie-Images/charlie-chocolaterie/charlie-chocolaterie-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=OFVGCUIXJls",
		producer: "Tim Burton",
	},
	{
		id: 48,
		title: "2001 : L'Odyssée de l'espace",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/uwd79G32FPIL5B9UkRgSZvS0gbe.jpg",
		actors: [
			{
				actorName: "Keir Dullea",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/2001-odyssee-espace/Keir-Dullea.jpg",
			},
			{
				actorName: "Gary Lockwood",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/2001-odyssee-espace/Gary-Lockwood.jpg",
			},
			{
				actorName: "William Sylvester",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/2001-odyssee-espace/William-Sylvester.jpg",
			},
			{
				actorName: "Leonard Rossiter",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/2001-odyssee-espace/Leonard-Rossiter.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/2001-odyssee-espace.wav",
		synopsis: `De la préhistoire à l'an 2001, un mystérieux monolithe noir influence l'évolution de l'humanité. Dans le futur, l'astronaute David Bowman part en mission vers Jupiter à bord du Discovery One, assisté par l'intelligence artificielle HAL 9000. Mais HAL développe un comportement erratique et menace l'équipage. Le film se conclut sur un voyage psychédélique au-delà de l'infini.`,
		gender: ["Science-Fiction", "Aventure", "Mystère"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/2001-odyssee-espace/2001-odyssee-espace-img01.png",
			"http://localhost:3100/assets/images/movie-Images/2001-odyssee-espace/2001-odyssee-espace-img02.png",
			"http://localhost:3100/assets/images/movie-Images/2001-odyssee-espace/2001-odyssee-espace-img03.png",
			"http://localhost:3100/assets/images/movie-Images/2001-odyssee-espace/2001-odyssee-espace-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=oR_e9y-bka0",
		producer: "Stanley Kubrick",
	},
	{
		id: 49,
		title: "Fast & Furious",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/gsW9S3K6oBLKVMMLuSvKwEPOKHc.jpg",
		actors: [
			{
				actorName: "Vin Diesel",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fast-and-furious/Vin-Diesel.jpg",
			},
			{
				actorName: "Paul Walker",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fast-and-furious/Paul-Walker.jpg",
			},
			{
				actorName: "Michelle Rodriguez",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fast-and-furious/Michelle-Rodriguez.jpg",
			},
			{
				actorName: "Jordana Brewster",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/fast-and-furious/Jordana-Brewster.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/fast-and-furious.wav",
		synopsis: `L'agent du FBI Brian O'Conner s'infiltre dans le milieu des courses de rue clandestines de Los Angeles pour enquêter sur une série de braquages de camions sur l'autoroute. Il se rapproche du leader charismatique Dominic Toretto, mais se retrouve écartelé entre son devoir et la loyauté qu'il développe pour ce clan qui est devenu sa famille. Le premier opus d'une saga d'action à succès mondial.`,
		gender: ["Action", "Thriller", "Crime"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/fast-and-furious/fast-and-furious-img01.png",
			"http://localhost:3100/assets/images/movie-Images/fast-and-furious/fast-and-furious-img02.png",
			"http://localhost:3100/assets/images/movie-Images/fast-and-furious/fast-and-furious-img03.png",
			"http://localhost:3100/assets/images/movie-Images/fast-and-furious/fast-and-furious-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=ZsJz2TJAPjw",
		producer: "Rob Cohen",
	},
	{
		id: 50,
		title: "Rocky",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/5cfUTKtLYJx8WcTRJII4JRnlg6p.jpg",
		actors: [
			{
				actorName: "Sylvester Stallone",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/rocky/Sylvester-Stallone.jpg",
			},
			{
				actorName: "Talia Shire",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/rocky/Talia-Shire.jpg",
			},
			{
				actorName: "Carl Weathers",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/rocky/Carl-Weathers.jpg",
			},
			{
				actorName: "Burt Young",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/rocky/Burt-Young.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/rocky.wav",
		synopsis:
			"Rocky Balboa, boxeur amateur, obtient une chance improbable de combattre pour le titre mondial et se prépare à dépasser ses limites.",
		gender: ["Drame", "Sport"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/rocky/rocky-img01.png",
			"http://localhost:3100/assets/images/movie-Images/rocky/rocky-img02.png",
			"http://localhost:3100/assets/images/movie-Images/rocky/rocky-img03.png",
			"http://localhost:3100/assets/images/movie-Images/rocky/rocky-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=YZCx-9wF3ow",
		producer: "John G. Avildsen",
	},
	{
		id: 51,
		title: "Drive",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/mUKm5eaYm30KYyaudRn5tA204ua.jpg",
		actors: [
			{
				actorName: "Ryan Gosling",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/drive/Ryan-Gosling.jpg",
			},
			{
				actorName: "Carey Mulligan",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/drive/Carey-Mulligan.jpg",
			},
			{
				actorName: "Bryan Cranston",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/drive/Bryan-Cranston.jpg",
			},
			{
				actorName: "Oscar Isaac",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/drive/Oscar-Isaac.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/drive.wav",
		synopsis:
			"Un cascadeur discret travaillant comme chauffeur pour des braquages voit sa vie basculer lorsqu’il s’implique dans une affaire criminelle violente.",
		gender: ["Thriller", "Crime", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/drive/drive-img01.png",
			"http://localhost:3100/assets/images/movie-Images/drive/drive-img02.png",
			"http://localhost:3100/assets/images/movie-Images/drive/drive-img03.png",
			"http://localhost:3100/assets/images/movie-Images/drive/drive-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=KBiOF3y1W0Y",
		producer: "Nicolas Winding Refn",
	},

	{
		id: 52,
		title: "Le monde de Némo",
		poster:
			"https://image.tmdb.org/t/p/w600_and_h900_face/8zR2vXoXfdlknEYjfHvCbb1rJbI.jpg",
		actors: [
			{
				actorName: "Albert Brooks",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/nemo/Albert-Brooks.jpg",
			},
			{
				actorName: "Ellen DeGeneres",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/nemo/Ellen-DeGeneres.jpg",
			},
			{
				actorName: "Alexander Gould",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/nemo/Alexander-Gould.jpg",
			},
			{
				actorName: "Willem Dafoe",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/nemo/Willem-Dafoe.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/nemo.wav",
		synopsis:
			"Un poisson-clown traverse l’océan avec une amie amnésique pour retrouver son fils capturé et emprisonné dans un aquarium.",
		gender: ["Animation", "Aventure", "Famille"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/nemo/nemo-img01.png",
			"http://localhost:3100/assets/images/movie-Images/nemo/nemo-img02.png",
			"http://localhost:3100/assets/images/movie-Images/nemo/nemo-img03.png",
			"http://localhost:3100/assets/images/movie-Images/nemo/nemo-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=SPHfeNgogVs",
		producer: "Andrew Stanton",
	},

	{
		id: 53,
		title: "Le Voyage de Chihiro",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/12TAqK0AUgdcYE9ZYZ9r7ASbH5Q.jpg",
		actors: [
			{
				actorName: "Rumi Hiiragi",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/chihiro/Rumi-Hiiragi.jpg",
			},
			{
				actorName: "Miyu Irino",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/chihiro/Miyu-Irino.jpg",
			},
			{
				actorName: "Mari Natsuki",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/chihiro/Mari-Natsuki.jpg",
			},
			{
				actorName: "Bunta Sugawara",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/chihiro/Bunta-Sugawara.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/chihiro.wav",
		synopsis:
			"Une fillette se retrouve piégée dans un monde spirituel et doit travailler pour une sorcière afin de sauver ses parents transformés en animaux.",
		gender: ["Animation", "Fantastique", "Aventure"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/chihiro/chihiro-img01.png",
			"http://localhost:3100/assets/images/movie-Images/chihiro/chihiro-img02.png",
			"http://localhost:3100/assets/images/movie-Images/chihiro/chihiro-img03.png",
			"http://localhost:3100/assets/images/movie-Images/chihiro/chihiro-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
		producer: "Hayao Miyazaki",
	},

	{
		id: 54,
		title: "The Tree of Life",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/y47kUz3IYdoxKyscG6Bc6EPo59k.jpg",
		actors: [
			{
				actorName: "Brad Pitt",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/tree-of-life/Brad-Pitt.jpg",
			},
			{
				actorName: "Jessica Chastain",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/tree-of-life/Jessica-Chastain.jpg",
			},
			{
				actorName: "Sean Penn",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/tree-of-life/Sean-Penn.jpg",
			},
			{
				actorName: "Hunter McCracken",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/tree-of-life/Hunter-McCracken.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/tree-of-life.wav",
		synopsis:
			"Un homme revisite son enfance marquée par son père strict et sa mère aimante, dans une réflexion sur la vie, la mémoire et l’univers.",
		gender: ["Drame", "Philosophique"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/tree-of-life/tree-of-life-img01.png",
			"http://localhost:3100/assets/images/movie-Images/tree-of-life/tree-of-life-img02.png",
			"http://localhost:3100/assets/images/movie-Images/tree-of-life/tree-of-life-img03.png",
			"http://localhost:3100/assets/images/movie-Images/tree-of-life/tree-of-life-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=RrAz1YLh8nY",
		producer: "Terrence Malick",
	},

	{
		id: 55,
		title: "Il faut sauver le soldat Ryan",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/mlSsQWIQV0NKIqqRQRI0yi9gqk8.jpg",
		actors: [
			{
				actorName: "Tom Hanks",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/soldat-ryan/Tom-Hanks.jpg",
			},
			{
				actorName: "Matt Damon",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/soldat-ryan/Matt-Damon.jpg",
			},
			{
				actorName: "Tom Sizemore",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/soldat-ryan/Tom-Sizemore.jpg",
			},
			{
				actorName: "Edward Burns",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/soldat-ryan/Edward-Burns.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/soldat-ryan.wav",
		synopsis:
			"Une escouade est envoyée en territoire ennemi pour retrouver un soldat dont les frères ont tous été tués au combat.",
		gender: ["Guerre", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/soldat-ryan/soldat-ryan-img01.png",
			"http://localhost:3100/assets/images/movie-Images/soldat-ryan/soldat-ryan-img02.png",
			"http://localhost:3100/assets/images/movie-Images/soldat-ryan/soldat-ryan-img03.png",
			"http://localhost:3100/assets/images/movie-Images/soldat-ryan/soldat-ryan-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=zwhP5b4tD6g",
		producer: "Steven Spielberg",
	},

	{
		id: 56,
		title: "Edward aux mains d'argent",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/tMCj9KY70NasF2KsiXWpg0m7smK.jpg",
		actors: [
			{
				actorName: "Johnny Depp",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/edward/Johnny-Depp.jpg",
			},
			{
				actorName: "Winona Ryder",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/edward/Winona-Ryder.jpg",
			},
			{
				actorName: "Dianne Wiest",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/edward/Dianne-Wiest.jpg",
			},
			{
				actorName: "Alan Arkin",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/edward/Alan-Arkin.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/edward.wav",
		synopsis:
			"Un homme artificiel doté de lames à la place des mains découvre la société humaine et l’amour, mais son don devient une malédiction.",
		gender: ["Fantastique", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/edward/edward-img01.png",
			"http://localhost:3100/assets/images/movie-Images/edward/edward-img02.png",
			"http://localhost:3100/assets/images/movie-Images/edward/edward-img03.png",
			"http://localhost:3100/assets/images/movie-Images/edward/edward-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=eq2PPFUhfpo",
		producer: "Tim Burton",
	},

	{
		id: 57,
		title: "Django Unchained",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/vRXUnWrXUgXRoX0BaEcuNMfyeQt.jpg",
		actors: [
			{
				actorName: "Jamie Foxx",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/django/Jamie-Foxx.jpg",
			},
			{
				actorName: "Christoph Waltz",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/django/Christoph-Waltz.jpg",
			},
			{
				actorName: "Leonardo DiCaprio",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/django/Leonardo-DiCaprio.jpg",
			},
			{
				actorName: "Samuel L. Jackson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/django/Samuel-L-Jackson.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/django.wav",
		synopsis:
			"Un ancien esclave devenu chasseur de primes part sauver sa femme détenue dans une plantation du Sud des États-Unis.",
		gender: ["Western", "Action", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/django/django-img01.png",
			"http://localhost:3100/assets/images/movie-Images/django/django-img02.png",
			"http://localhost:3100/assets/images/movie-Images/django/django-img03.png",
			"http://localhost:3100/assets/images/movie-Images/django/django-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=0fUCuvNlOCg",
		producer: "Quentin Tarantino",
	},

	{
		id: 58,
		title: "American Gangster",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/qKVkNqxB20BUsUQYgmELskPyO0a.jpg",
		actors: [
			{
				actorName: "Denzel Washington",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/american-gangster/Denzel-Washington.jpg",
			},
			{
				actorName: "Russell Crowe",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/american-gangster/Russell-Crowe.jpg",
			},
			{
				actorName: "Chiwetel Ejiofor",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/american-gangster/Chiwetel-Ejiofor.jpg",
			},
			{
				actorName: "Josh Brolin",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/american-gangster/Josh-Brolin.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/american-gangster.wav",
		synopsis:
			"Frank Lucas bâtit un empire de drogue à Harlem tandis qu’un inspecteur tente de démanteler son réseau.",
		gender: ["Crime", "Drame"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/american-gangster/american-gangster-img01.png",
			"http://localhost:3100/assets/images/movie-Images/american-gangster/american-gangster-img02.png",
			"http://localhost:3100/assets/images/movie-Images/american-gangster/american-gangster-img03.png",
			"http://localhost:3100/assets/images/movie-Images/american-gangster/american-gangster-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=BV_nssS6Zkg",
		producer: "Ridley Scott",
	},

	{
		id: 59,
		title: "Wonka",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/aKK2C3SErXIhNdT9gI93as2b8GV.jpg",
		actors: [
			{
				actorName: "Timothée Chalamet",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/wonka/Timothee-Chalamet.jpg",
			},
			{
				actorName: "Hugh Grant",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/wonka/Hugh-Grant.jpg",
			},
			{
				actorName: "Olivia Colman",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/wonka/Olivia-Colman.jpg",
			},
			{
				actorName: "Rowan Atkinson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/wonka/Rowan-Atkinson.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/wonka.wav",
		synopsis:
			"Un jeune Willy Wonka tente de révolutionner le chocolat face à des industriels puissants en utilisant son imagination.",
		gender: ["Fantastique", "Comédie"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/wonka/wonka-img01.png",
			"http://localhost:3100/assets/images/movie-Images/wonka/wonka-img02.png",
			"http://localhost:3100/assets/images/movie-Images/wonka/wonka-img03.png",
			"http://localhost:3100/assets/images/movie-Images/wonka/wonka-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=otNh9bTjXWg",
		producer: "Paul King",
	},

	{
		id: 60,
		title: "Jack Reacher",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/yx9jmcMWMfO0gJfpmmKR0u016VQ.jpg",
		actors: [
			{
				actorName: "Alan Ritchson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jack-reacher/Alan-Ritchson.jpg",
			},
			{
				actorName: "Willa Fitzgerald",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jack-reacher/Willa-Fitzgerald.jpg",
			},
			{
				actorName: "Malcolm Goodwin",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jack-reacher/Malcolm-Goodwin.jpg",
			},
			{
				actorName: "Serinda Swan",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/jack-reacher/Serinda-Swan.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/jack-reacher.wav",
		synopsis:
			"Jack Reacher est accusé de meurtre et découvre une conspiration en utilisant ses compétences militaires et son intelligence.",
		gender: ["Action", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/jack-reacher/jack-reacher-img01.png",
			"http://localhost:3100/assets/images/movie-Images/jack-reacher/jack-reacher-img02.png",
			"http://localhost:3100/assets/images/movie-Images/jack-reacher/jack-reacher-img03.png",
			"http://localhost:3100/assets/images/movie-Images/jack-reacher/jack-reacher-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=A7FiWkyevqY",
		producer: "Nick Santora",
	},

	{
		id: 61,
		title: "Shining",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/cnniZQGtjK8kh2tsjih4GtkX6bl.jpg",
		actors: [
			{
				actorName: "Jack Nicholson",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/shining/Jack-Nicholson.jpg",
			},
			{
				actorName: "Shelley Duvall",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/shining/Shelley-Duvall.jpg",
			},
			{
				actorName: "Danny Lloyd",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/shining/Danny-Lloyd.jpg",
			},
			{
				actorName: "Scatman Crothers",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/shining/Scatman-Crothers.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/shining.wav",
		synopsis:
			"Isolé dans un hôtel pendant l’hiver, un écrivain sombre peu à peu dans la folie sous l’influence de forces mystérieuses.",
		gender: ["Horreur", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/shining/shining-img01.png",
			"http://localhost:3100/assets/images/movie-Images/shining/shining-img02.png",
			"http://localhost:3100/assets/images/movie-Images/shining/shining-img03.png",
			"http://localhost:3100/assets/images/movie-Images/shining/shining-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=FZQvIJxG9Xs",
		producer: "Stanley Kubrick",
	},

	{
		id: 62,
		title: "Halloween",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/r1ME6ZFxmZ6vFYqt9PHepiIb1t.jpg",
		actors: [
			{
				actorName: "Jamie Lee Curtis",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/halloween/Jamie-Lee-Curtis.jpg",
			},
			{
				actorName: "Donald Pleasence",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/halloween/Donald-Pleasence.jpg",
			},
			{
				actorName: "Nick Castle",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/halloween/Nick-Castle.jpg",
			},
			{
				actorName: "Nancy Kyes",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/halloween/Nancy-Kyes.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/halloween.wav",
		synopsis:
			"Un tueur échappé d’un asile revient dans sa ville natale et traque méthodiquement une baby-sitter et ses amis.",
		gender: ["Horreur"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/halloween/halloween-img01.png",
			"http://localhost:3100/assets/images/movie-Images/halloween/halloween-img02.png",
			"http://localhost:3100/assets/images/movie-Images/halloween/halloween-img03.png",
			"http://localhost:3100/assets/images/movie-Images/halloween/halloween-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=T5ke9IPTIJQ",
		producer: "John Carpenter",
	},

	{
		id: 63,
		title: "Saw",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/3fhUaMnlY72GGuBlzEeKA4brZAb.jpg",
		actors: [
			{
				actorName: "Cary Elwes",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/saw/Cary-Elwes.jpg",
			},
			{
				actorName: "Leigh Whannell",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/saw/Leigh-Whannell.jpg",
			},
			{
				actorName: "Danny Glover",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/saw/Danny-Glover.jpg",
			},
			{
				actorName: "Monica Potter",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/saw/Monica-Potter.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/saw.wav",
		synopsis:
			"Deux hommes se réveillent piégés et doivent participer à des jeux mortels orchestrés par un tueur sadique.",
		gender: ["Horreur", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/saw/saw-img01.png",
			"http://localhost:3100/assets/images/movie-Images/saw/saw-img02.png",
			"http://localhost:3100/assets/images/movie-Images/saw/saw-img03.png",
			"http://localhost:3100/assets/images/movie-Images/saw/saw-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=S-1QgOMQ-ls",
		producer: "James Wan",
	},

	{
		id: 64,
		title: "Psychose",
		poster:
			"https://www.themoviedb.org/t/p/w600_and_h900_face/lzF8b44dAvXFagQnB1UZa2AF87q.jpg",
		actors: [
			{
				actorName: "Anthony Perkins",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/psychose/Anthony-Perkins.jpg",
			},
			{
				actorName: "Janet Leigh",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/psychose/Janet-Leigh.jpg",
			},
			{
				actorName: "Vera Miles",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/psychose/Vera-Miles.jpg",
			},
			{
				actorName: "John Gavin",
				actorImg:
					"http://localhost:3100/assets/images/actor-Images/psychose/John-Gavin.jpg",
			},
		],
		movieSong: "http://localhost:3100/assets/song/psychose.wav",
		synopsis:
			"Une femme en fuite s’arrête dans un motel isolé où elle rencontre un gérant étrange et inquiétant, cachant un terrible secret.",
		gender: ["Horreur", "Thriller"],
		movie4Images: [
			"http://localhost:3100/assets/images/movie-Images/psychose/psychose-img01.png",
			"http://localhost:3100/assets/images/movie-Images/psychose/psychose-img02.png",
			"http://localhost:3100/assets/images/movie-Images/psychose/psychose-img03.png",
			"http://localhost:3100/assets/images/movie-Images/psychose/psychose-img04.png",
		],
		trailer: "https://www.youtube.com/watch?v=Wz719b9QUqY",
		producer: "Alfred Hitchcock",
	},
];

app.use(cors("*"));
app.get("/", (req, res) => {
	res.json(movies);
});

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
