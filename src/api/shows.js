export async function getDiscoverShows() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data.results;
}
