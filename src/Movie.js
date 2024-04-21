// import React, { useState, useEffect } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import axios from 'axios';


// function Movie() {
//     const [movie, setMovie] = useState([]);

//     useEffect(() => {
//         axios.get(` https://api.themoviedb.org/3/trending/movie/day?api_key=9ebd15ad5dd2b095f42523e082eb45c6`)
//             .then(response => {
//                 setMovie(response.data.results);
//                 console.log(response);
//             })
//             .catch(error => {
//                 console.log('Error message:', error);
//             });
//     }, []);



//     return (
//         <div>




//             <Carousel>
//                 {movie.map((item, index){
//                     <Carousel.Item interval={1000}>
//                         <img src={item.poster_path} />

//                         <Carousel.Caption>
//                             <h3>First slide label</h3>
//                             <p>Nulla vitae elit libero a pharetra augue mollis interdum.</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
                  

//                 })}
//             {/* <Carousel.Item interval={1000}>
//                 <img src={ item.poster_path}/>
                   
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item> */}
//             {/* <Carousel.Item interval={500}>
//                     <ExampleCarouselImage text="Second slide" />
//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <ExampleCarouselImage text="Third slide" />
//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item> */}
//             </Carousel>

//         </div>
//     )
// }

// export default Movie


// // https://api.themoviedb.org/3/trending/movie/day?
