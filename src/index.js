import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            errorMessage: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude
                })
            },
            (error) => {
                this.setState({
                    errorMessage: error.message
                })
            }
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.latitude}
                    {this.state.errorMessage}
                </div>
                <div>
                    {this.state.longitude}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)