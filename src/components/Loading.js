import React from "react";

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            done : false
        }
    }
    componentDidMount() {
        setTimeout(() =>
            this.setState({
                loading : false,
                done : true
            }),
            5000
        )
    }
    render() {
        return(
            <div>
                {this.state.loading && (
                    <div> Fetching Data</div>
                )}
                {this.state.done && (
                    <div> Welcome to My Page </div>
                )}
            </div>
        )
    }
}

export default Loading;