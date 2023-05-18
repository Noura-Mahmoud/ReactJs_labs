const Movie = (props) => {
    // console.log(props);
    const { title, genre, rating, description} = props;

    const movieStyle = {
        border: "1px solid red",
        padding: "25px",
        marginBottom: "20px",
        margin: "50px auto",
        backgroundColor: "lightGray",
        borderRadius: "25px",
        width: "30%",
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
            <div style={infoStyle}>Genre: {genre}</div>
            <div style={infoStyle}>Rating: {rating}</div>
            <div style={infoStyle}>Description: {description}</div>
        </div>
    );
};

export default Movie;
