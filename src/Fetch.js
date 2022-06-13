import React, {Component} from 'react';

class App extends Component{
    state = {
        data: [],
    }
    // Code is invoked after the component is mounted/inserted into the DOM tree
    componentDidMount(){
        const url = "https://rickandmortyapi.com/api/character/";
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            //work with JSON data here
            console.log(response.results)
            this.setState({
                data: response.results,
            })
        })
        .catch((err)=>{
            // Do something for an error here 
            console.error(err);
        })
    }
    render(){
        const {data} = this.state
        
        const result = data.map((item, index) =>{
            return <li>{item.name}, {item.status}, <img src={item.image}></img></li>
        })
        
        return <ul>{result}</ul>
    }
}
export default App
// Replace ./data.json with your JSON feed
