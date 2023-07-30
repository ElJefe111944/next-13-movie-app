import Movie from "./components/Movie";

async function getData() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
  console.log(data)
 
  return <main>
    {data.results.map((item) => (
      <Movie 
        key={item.id}
        id={item.id}
        title={item.title}
        poster_path={item.poster_path}
        release_date={item.release_date}
      />
    ) )}
  </main>
}