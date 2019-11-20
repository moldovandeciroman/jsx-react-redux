import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class SearchBar extends React.Component
{

    state = {term : ""};

     onInputChange(event)
    {
        
        return event.target.value;
    };

    
    onFormSubmit(event)
    {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render()
    {
        return (<div className = "ui main">
            <form className = "ui form" onSubmit = {(e) => this.onFormSubmit(e)}>
                <div className ="ui container">
                    <label>Image Search</label>
                    <input type = "text"  onChange ={e => this.setState({term : this.onInputChange(e)}) } value = {this.state.term}   />  
                   
                </div>
            </form>
        </div>
        )
        
    }

    
}
export default SearchBar;
