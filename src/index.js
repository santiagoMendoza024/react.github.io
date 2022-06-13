import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
//import App from './Api';
//import App from './Fetch';
import './index.css';
/*
class App extends React.Component{
    render(){
        return (
            <div className='App'>
                <h1>Hello, this is a golden ticket React!</h1>
            </div>
        )
    }
}
*/

ReactDom.render(<App />, document.getElementById('root'))