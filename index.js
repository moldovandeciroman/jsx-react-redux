import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import unsplash from './unsplash'
import ImageList from './ImageList'
class App extends React.Component
{

    state = {images : []}

    onSearchSubmit = async (term) =>
    {
         const response =await unsplash.get('/search/photos', {
          params: 
          {
              query : term
          },

           

        })
        this.setState({ images : response.data.results})
    }



    render()
    {
        
    return (
    <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
    </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
