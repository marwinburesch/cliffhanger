export async function getDiscoverShows(value) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=4a21646ec02d2f33481ef1051b8447a6`
  );
  console.log(
    "The searchvalue -> " + value + " could be used in this function"
  );
  const data = await response.json();
  return data.results;
}
