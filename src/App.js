import './App.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Shopping from './component/Shopping';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  const [movie, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [filterMovie, setFilterMovie] = useState([]);
  const imageurl = "https://image.tmdb.org/t/p/w500/";
  // const apiKey = "9ebd15ad5dd2b095f42523e082eb45c6"

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=9ebd15ad5dd2b095f42523e082eb45c6`)
      .then(response => {
        // console.log(response);
        setMovie(response.data.results);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = movie.filter(item => item.title.toLowerCase().includes(searchMovie.toLowerCase()));
    setFilterMovie(filtered);
  }, [searchMovie, movie]);

  return (
    <>
      <h1 className='movie-text'>Movie App</h1>

      <input className='movie-input' style={{ backgroundColor: '#9b93aa', textDecorationColor: 'black', borderBlockColor: 'black', marginTop: '25px', }}
        type='text'
        placeholder='search'
        value={searchMovie}
        onChange={e => setSearchMovie(e.target.value)} />
        
      <Button className='ms-2 search-btn' variant="dark" >Search</Button>
   
      <Container>
        <Row>
          {filterMovie.map((item) => (
            <Col lg={4} className='mb-3' >
              <Shopping
                overview={item.overview}
                poster_path={imageurl + item.poster_path}
                title={item.title}
                release_date={item.release_date} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;