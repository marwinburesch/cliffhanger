export async function getDiscoverShows() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=4a21646ec02d2f33481ef1051b8447a6`
  );
  const data = await response.json();
  return data.results;
}
