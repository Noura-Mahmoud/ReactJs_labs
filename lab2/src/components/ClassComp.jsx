import axios from "axios";
import Movie from "./Movie";
import{Component} from "react"
import{v4 as uuid} from 'uuid'
    const movieStyle = {
        border: "1px solid red",
        padding: "10px",
        marginBottom: "20px",
        margin: "50px",
        backGround: "cyan"
    };

    const titleStyle = {
        // fontWeight: "bold"
    };

    const infoStyle = {
        marginTop: "5px",
        // fontWeight: "2px"
    };
class ClassComp extends Component {
    constructor(){
        super();
        this.state = {moviesArr:[]}
        // console.log("inside cons")
    }
    
    // state = {  } 
    render() {
  if (!this.state.moviesArr || this.state.moviesArr.length<1) {
    return (
      <div>
        Loading..........
      </div>
    );
  }

  //! it doesn't show the adudlt value!
  //! can't use movie component
  return (
    <div>
        {/* {this.state.moviesArr.map((m) => (
        <Movie {...m}/>))} */}
      {this.state.moviesArr.map((m) => (
        <div key={m.id} style={movieStyle}>
          {Object.entries(m).map(([key, value]) => (
            <div style={titleStyle} key={key}>
              <span style={infoStyle}>{key}: </span>
              {typeof value === "object" ? JSON.stringify(value) : value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

    componentDidMount(){
        const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
        const url = "https://api.themoviedb.org/3";
        // const imgPath = "https://image.tmdb.org/t/p/w500/";
        const path = "/discover/movie?sort_by=popularity.desc";
        const apiUrl = url + path + apiKey;
        // console.log(apiUrl);
        // axios.get(apiUrl).then((res)=> {
        //     return this.setState({moviesArr: res.data.results})},()=>console.log(`movies data: \n${this.state.moviesArr}`));

        axios.get(apiUrl).then((res) => {
            this.setState({ moviesArr: res.data.results }, () => {
            console.log("movies data:", this.state.moviesArr);
            }).then(console.log("movies data:", this.state.moviesArr));
  });
    }
}
 
export default ClassComp;