const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
 {
  name: "Comedy",
  movies: [
   { title: "Airplane", numberInStock: 5, dailyRentalRate: 2 },
   { title: "The Hangover", numberInStock: 10, dailyRentalRate: 2 },
   { title: "Wedding Crashers", numberInStock: 15, dailyRentalRate: 2 },
  ],
 },
 {
  name: "Action",
  movies: [
   { title: "Die Hard", numberInStock: 5, dailyRentalRate: 2 },
   { title: "Terminator", numberInStock: 10, dailyRentalRate: 2 },
   { title: "The Avengers", numberInStock: 15, dailyRentalRate: 2 },
  ],
 },
 {
  name: "Romance",
  movies: [
   { title: "The Notebook", numberInStock: 5, dailyRentalRate: 2 },
   { title: "When Harry Met Sally", numberInStock: 10, dailyRentalRate: 2 },
   { title: "Pretty Woman", numberInStock: 15, dailyRentalRate: 2 },
  ],
 },
 {
  name: "Thriller",
  movies: [
   { title: "The Sixth Sense", numberInStock: 5, dailyRentalRate: 2 },
   { title: "Gone Girl", numberInStock: 10, dailyRentalRate: 2 },
   { title: "The Others", numberInStock: 15, dailyRentalRate: 2 },
  ],
 },
];

movies = [
 {
  title: "Airplane",
  numberInStock: 5,
  dailyRentalRate: 2,
  // genre: { id: "5ed0508dbe45da5ab2db929f", name: "Comedy" },
 },
 {
  title: "The Hangover",
  numberInStock: 10,
  dailyRentalRate: 2,
  // genre: { id: "5ed0508dbe45da5ab2db929f", name: "Comedy" },
 },
 {
  title: "Wedding Crashers",
  numberInStock: 15,
  dailyRentalRate: 2,
  // genre: { id: "5ed0508dbe45da5ab2db929f", name: "Comedy" },
 },
];

async function seed() {
 try {
  await mongoose.connect(
   "mongodb+srv://Victor:vJPSKxj4XoqQfibN@cluter-gm-zdirz.mongodb.net/test?retryWrites=true&w=majority"
  );

  // await Movie.deleteMany({});
  // await Genre.deleteMany({});

  const m = await Movie.insertMany(movies);

  //  for (let genre of data) {
  //   //  const { _id: genreId } = await new Genre({ name: genre.name }).save();
  //   const newGenre = await Genre.create({ name: genre.name });
  //   const { _id: genreId } = newGenre;
  //   newGenre.__v = undefined;
  //   const movies = genre.movies.map((movie) => ({
  //    ...movie,
  //    genre: { _id: genreId, name: genre.name },
  //    // ...newGenre,
  //   }));
  //   const get = await Movie.insertMany(...movies);
  //   console.log(get);
  //  }

  mongoose.disconnect();

  console.info("Done!");
 } catch (err) {
  console.log(err);
 }
}

seed();
