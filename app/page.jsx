import Movie from "./components/Movie";

async function getData() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()
  console.log(data)

  return <main>
    <div className="grid gap-16 grid-cols-fluid">
      {data.results.map((item) => (
        <Movie
          key={item.id}
          id={item.id}
          title={item.title}
          poster_path={item.poster_path}
          release_date={item.release_date}
        />
      ))}
    </div>
  </main>
}