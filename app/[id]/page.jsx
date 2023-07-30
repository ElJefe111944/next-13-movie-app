import Image from "next/image";

export default async function MovieDetails({ params }) {


    const imagePath = "https://image.tmdb.org/t/p/w500/"

    const Id = params.id

    const res = await fetch(`https://api.themoviedb.org/3/movie/${Id}?api_key=${process.env.API_KEY}`, {
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json();


    return (
        <div>
            <div>
                <h2 className="text-2xl">{data.title}</h2>
                <h2 className="text-lg">{data.release_date}</h2>
                <h2>Runtime: {data.runtime} minutes</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-2 text-white rounded-md text-sm">{data.status}</h2>
                <Image width={1000} height={1000} className="my-12 w-full" src={imagePath + data.backdrop_path} priority />
                <p>{data.overview}</p>
            </div>
        </div>
    )

}

