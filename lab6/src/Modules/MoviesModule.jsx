import{createContext, lazy, useEffect} from 'react'
import {Routes,Route} from "react-router-dom"
import AddNewMovie from "../components/FormNewMovie";
import DeleteMovie from "../components/DeleteMovie";
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../redux/actionCreators/moviesActions';

const MoviesPage = lazy(()=> import("../pages/Movies"));
const DetailsPage = lazy(()=> import("../pages/DetailsPage"));
const NotFound = lazy(()=>import("../pages/NotFound"));

export const MoviesContext = createContext();

const MoviesModule=()=>{
  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllMovies())
    }, [dispatch]);
    return (
            <Routes>
                <Route index element={<MoviesPage></MoviesPage>}/>
                <Route path='add' element={<AddNewMovie></AddNewMovie>}/>
                <Route path=':id' element={<DetailsPage></DetailsPage>}/>
                <Route path='delete/:id' element={<DeleteMovie></DeleteMovie>}/>
                <Route path='*' element={<NotFound></NotFound>}/>
            </Routes>
    )
};

export default MoviesModule;