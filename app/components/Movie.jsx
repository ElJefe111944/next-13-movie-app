import Link from "next/link"


const Movie = ({ title, id, poster_path, release_date }) => {

  const imagePath = "https://image.tmdb.org/t/p/w500/"

  return (
    <div>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <Link href={`/#`}>
          <img src={imagePath + poster_path} alt={title} />
        </Link>
    </div>
  )
}

export default Movie