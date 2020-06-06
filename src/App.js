import React from 'react';
import './App.css';
import FadeIn from "react-fade-in";
import Loading from './components/Loading';
import Landing from './components/Landing';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true
        }
    }
    onLoad = () => (
        this.setState({
            loading : false
        })
    )
    render() {
        return(
            <div className="App">
                {this.state.loading ?
                    <header className="App-header">
                        <Loading onLoad={this.onLoad}/>
                    </header>:
                    <FadeIn transitionDuration={600} >
                        <Landing />
                    </FadeIn>
                }
            </div>
        )
    }
}

export default App;
