import Movie from "./Movie";
import{v4 as uuid} from 'uuid'

const Movies = () => {
    const movieList = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama",
    releaseDate: "1994",
    duration: "142 minutes",
    rating: "9.3",
    description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    productionCompany: "Columbia Pictures",
    country: "United States"
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Crime, Drama",
    releaseDate: "1994",
    duration: "154 minutes",
    rating: "8.9",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    productionCompany: "Miramax Films",
    country: "United States"
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama",
    releaseDate: "2008",
    duration: "152 minutes",
    rating: "9.0",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    productionCompany: "Warner Bros. Pictures",
    country: "United States"
  }
];

    return ( 
        <div>
            {movieList.map((m)=> <Movie key={uuid()} {...m}></Movie>)}
        </div>
     );
}
 
export default Movies;