import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import unsplash from './unsplash'
import './grid.css'
import ImageCard from './ImageCard'



class ImageList extends React.Component
{

    onConsole()
    {
       const image = this.props.images.map(penis =><ImageCard key={penis.id} image={penis}/>)
       return image
    }
    render()
    {
        return<div className ="image-list"> {this.onConsole()} </div>;
    }
}

export default ImageList;