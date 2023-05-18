import{PureComponent} from "react"

class ClassComp extends PureComponent {
    constructor(){
        super();
        this.state = {imageUrl:null, imageNum:1}
        console.log("inside cons image")
    }
    // state = {  } 
    render() {
        // this.imageUrl = "Images/"+this.state.imageNum+".png";
        console.log(this.state.imageUrl);

        return <div style={{ color: 'blue', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
            <input type="button" value="prev" onClick={(e)=>{
                if (this.state.imageNum > 0)
                    this.setState((oldState)=>({...oldState, imageNum: this.state.imageNum-1, imageUrl:"Images/"+this.state.imageNum+".jpeg"}))
                console.log(this.state.imageUrl);
                console.log(this.state.imageNum);
            }}/>
            <input type="button" value="next"onClick={(e)=>{
                if (this.state.imageNum < 7)
                this.setState((oldState)=>({...oldState, imageNum: this.state.imageNum+1, imageUrl:"Images/"+this.state.imageNum+".jpeg"}))
                console.log(this.state.imageUrl);
                console.log(this.state.imageNum);
            }}/>
            <br/>
            <img width="300px" height="300px" src={this.state.imageUrl} alt="img"/>
        </div>
    }
    componentDidMount(){
        // console.log(this.state.imageUrl);
        // console.log(this.state.imageNum);

        this.imageUrl = "Images/"+this.imageNum+".jpeg";
        // this.imageUrl = "Images/"+this.imageNum+".png";
    }
}
 
export default ClassComp;