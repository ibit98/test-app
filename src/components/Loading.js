import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

class Loading extends React.Component {
    componentDidMount() {
        setTimeout(() =>
            this.props.onLoad(),
            1000
        )
    }
    render() {
        return(
            <div>
                <PropagateLoader
                    size={25}
                    color={"#F8E71C"}
                    loading={true}
                />
            </div>
        )
    }
}

export default Loading;