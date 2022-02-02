import './App.css';
import "./components/style.scss";

import Footer  from './components/Footer';
import Greeting  from './components/Header';
import Content from './components/Content';
import MovieList from './components/MovieList';

function App() {
  const movies = ['Mone Swal', 'ME', 'Nga Duu', 'Mystery of Burma', 'Phoe Shate', 'Mudras calling', 'Deception']
  return (
    <>
    <div className="App">
      <Greeting/>
      <div className='content'>
        <div className='content-container'>
          <h2>Welcome From Movies List....</h2>
            <ul className='content-list'>
              {movies.map((movie) => <MovieList key = {movie} name={movie} />)}
            </ul>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
