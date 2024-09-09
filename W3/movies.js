const axios = require('axios');
const http = require('http');

// Defining API key and query URL
const apiKey = 'd24b9f5d';
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

// Function to fetch movies
async function fetchMovies(searchQuery) {
  try {
    const response = await axios.get(`${baseUrl}&s=${searchQuery}`);
    const movies = response.data.Search;  // Get the 'Search' array from response
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Use environment port provided by Render, or default to 5000 for local testing
const PORT = process.env.PORT || 5000;

// Create a web server to display the movies in the browser
http.createServer(async (req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  const searchQuery = 'star wars';  // You can change this to any movie search term
  const movies = await fetchMovies(searchQuery);
  
  if (movies) {
    let html = `<h1>Search Results for "${searchQuery}"</h1>`;
    html += '<table border="1">';
    html += '<tr><th>Title</th><th>Year</th><th>Poster</th></tr>';
    
    movies.forEach(movie => {
      html += `<tr>`;
      html += `<td>${movie.Title}</td>`;
      html += `<td>${movie.Year}</td>`;
      html += `<td><img src="${movie.Poster}" alt="${movie.Title}" width="100"></td>`;
      html += `</tr>`;
    });
    
    html += '</table>';
    res.write(html);
  } else {
    res.write('No movies found.');
  }
  
  res.end();
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
