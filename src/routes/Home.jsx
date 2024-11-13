import { useState } from "react";
import { useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
   const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);

   const getMovies = async () => {
      const json = await (
         await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`)
      ).json();

      setMovies(json); // json 데이터 구조에 따라 바뀜
      setLoading(false); // 상태 변환 해줘야됨
   };

   useEffect(() => {
      getMovies();
   }, []);

   //console.log(movies); // 빈 배열 movies에 잘 들어왔나 체크

   return (
      <>
         <div>
            {loading ? (
               <h1>Loading...</h1>
            ) : (
               <div>
                  {movies.map((movie) => (
                     <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.poster_path}
                        title={movie.title}
                        summary={movie.overview}
                        genre={movie.genre_ids}
                        release={movie.release_date}
                        rate={movie.vote_average}
                     />
                  ))}
               </div>
            )}
         </div>
      </>
   );
}

export default Home;
