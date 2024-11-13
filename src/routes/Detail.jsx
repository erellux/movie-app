import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
   const { id } = useParams();
   console.log(id);

   const getMovie = async () => {
      const json = await (
         await fetch(
            `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
         )
      ).json();
      console.log(json);
   };

   useEffect(() => {
      getMovie();
   }, []);

   return <h1>This is detail Page!</h1>;
}

export default Detail;
