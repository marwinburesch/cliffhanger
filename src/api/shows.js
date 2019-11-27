export async function getDiscoverShows(query) {
  const apiKey = "4a21646ec02d2f33481ef1051b8447a6";
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${query}`
  );
  const data = await response.json();
  return data.results;
}
