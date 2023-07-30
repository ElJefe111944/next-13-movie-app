import Link from "next/link"


const Movie = ({ title }) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>Release Date</h2>
        <Link href={`/#`}>Details</Link>
    </div>
  )
}

export default Movie