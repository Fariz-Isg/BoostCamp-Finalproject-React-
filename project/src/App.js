import './App.css';
import { useState } from 'react';
import axios from 'axios';
import SearchHeader from './SearchHeader';
import ImageList from './ImageList';

function App() {

  const [images, setImages] = useState([]);

  async function searchImages(term){
    
    const response = await axios.get('https://api.unsplash.com/search/photos'
      ,
      {
        headers:  {
          Authorization : 'Client-ID viEkrA32UqJd4wYp0qMosgfj2sM6qyPBT8-t_6MQ1-w  '
        },
        params: {
          query: term,
        },
      }
    );

    const data = response.data.results
    return data;
  };

  async function handleSubmit(term){
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList ImagePLaceholder={images}/>
    </div>
  );
}

export default App;
