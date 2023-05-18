const Movie = (props) => {
    console.log(props);
    const { title, director, genre, releaseDate, duration, rating, description, productionCompany, country } = props;

    const movieStyle = {
        border: "1px solid red",
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

    return (
        <div style={movieStyle}>
            <div style={titleStyle}>Title: {title}</div>
            <div style={infoStyle}>Director: {director}</div>
            <div style={infoStyle}>Genre: {genre}</div>
            <div style={infoStyle}>Release Date: {releaseDate}</div>
            <div style={infoStyle}>Duration: {duration}</div>
            <div style={infoStyle}>Rating: {rating}</div>
            <div style={infoStyle}>Description: {description}</div>
            <div style={infoStyle}>Production Company: {productionCompany}</div>
            <div style={infoStyle}>Country: {country}</div>
        </div>
    );
};

export default Movie;
