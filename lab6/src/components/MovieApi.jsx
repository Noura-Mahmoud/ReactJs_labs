import { Link } from "react-router-dom";

const MovieApi = (props) => {

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
            <div style={titleStyle}>title: {props["title"]?props["title"]:""}</div>
            <div style={infoStyle}>genre_ids: {props["genre_ids"]?props["genre_ids"]:""}</div>
            <div style={infoStyle}>id: {props["id"]?props["id"]:""}</div>
            <div style={infoStyle}>original_language: {props["original_language"]?props["original_language"]:""}</div>
            <div style={infoStyle}>original_title: {props["original_title"]?props["original_title"]:""}</div>
            <div style={infoStyle}>overview: {props["overview"]?props["overview"]:""}</div>
            <div style={infoStyle}>popularity: {props["popularity"]?props["popularity"]:""}</div>
            <br/>
            <Link to={`/movies/${id}`}><button >view Details</button></Link>
            <Link to={`/movies/delete/${id}`}><button >Delete</button></Link>
        </div>
    );
};

export default MovieApi;
