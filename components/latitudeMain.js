import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component
{
    
    
    constructor(props)
    {
        super(props);

        this.state = { lat : " gae "}
        this.test = 23;
        
    }

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => console.log(err)
        )
    
    }

    render()
    {
        this.test = this.state.lat;
       console.log(this.state.lat)
       console.log(this.test)

    return (<div>
        <SeasonDisplay lat = {this.state.lat}/>
          
           
        </div>
        )
    }
}

// ReactDOM.render(
//     <App />,
//     document.querySelector("#root")
// )


