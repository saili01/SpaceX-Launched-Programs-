import React from 'react';
import LandingPage from './LandingPage';
import ReactGa from "react-ga";


class App extends React.Component{

    componentDidMount(){
        ReactGa.initialize('UA-177534020-1');
        ReactGa.pageview('/');
    }
    componentDidUpdate(){
        ReactGa.initialize('UA-177534020-1');
        ReactGa.pageview('/');
    }

    render(){
        return (
            <div>
                
                <LandingPage/>
                
            </div>
        )
    }
    
}

export default App;