import{v4 as uuid} from 'uuid'
import SimpleBackdrop from "../components/Spinner";
import { useSelector } from "react-redux";
import MovieApi from "./MovieApi";


const Movies = () => {
  const movieList =  useSelector(state => state.movies);
if (!movieList) return <SimpleBackdrop></SimpleBackdrop>;
  

    return ( 
        <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            {movieList.map((m) => (
              <MovieApi key={uuid()} {...m}></MovieApi>
              ))}
        </div>
     );
};
 
export default Movies;