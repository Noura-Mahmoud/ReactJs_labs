import { Link } from "react-router-dom";
import { memo } from "react";

const Movie = (props) => {
    const movie = props.movie;

    const movieStyle = {
        border: "2px solid red",
        borderRadius : "20px",
        padding: "10px",
        marginBottom: "20px",
        margin: "50px",
        backGround: "cyan"
    };

    const titleStyle = {
        fontWeight: "bold"
    };

    const infoStyle = {
        marginTop: "5px"
    };
    const {id} = props;
    return (
        <div style={movieStyle}>
            <div style={titleStyle}>Title: {props["title"]?props["title"]:""}</div>
            <div style={infoStyle}>Director: {props["director"]?props["director"]:""}</div>
            <div style={infoStyle}>Genre: {props["genre"]?props["genre"]:""}</div>
            <div style={infoStyle}>Release Date: {props["releaseDate"]?props["releaseDate"]:""}</div>
            <div style={infoStyle}>Duration: {props["duration"]?props["duration"]:""}</div>
            <div style={infoStyle}>Rating: {props["rating"]?props["rating"]:""}</div>
            <div style={infoStyle}>Description: {props["description"]?props["description"]:""}</div>
            <div style={infoStyle}>Production Company: {props["productionCompany"]?props["productionCompany"]:""}</div>
            <div style={infoStyle}>Country: {props["country"]?props["country"]:""}</div>
            <br/>
            <Link to={`/movies/${id}`}><button >view Details</button></Link>
            <Link to={`/movies/delete/${id}`}><button >Delete</button></Link>
        </div>
    );
};

export default Movie;
