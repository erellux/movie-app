import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genre, release, rate }) {
   return (
      <div>
         <Link to={`/movie/${id}`}>
            {/* <Link to={"/movie/${id}""}></Link>  여기 무조건  ` `로 묶어야됨 "" 안됨*/}
            <img
               src={coverImg}
               alt={title}
               style={{
                  width: "300px",
                  height: "auto",
                  objectFit: "cover",
               }}
            />
            <h2>
               {title} ({rate})
            </h2>
         </Link>
         <h3>{release}</h3>
         <p>{summary}</p>
         <ul>
            {genre.map((g) => (
               <li key={g}>{g}</li>
            ))}
         </ul>
      </div>
   );
}

Movie.propTypes = {
   id: PropTypes.number.isRequired,
   coverImg: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   genre: PropTypes.arrayOf(PropTypes.number).isRequired,
   release: PropTypes.string.isRequired,
   rate: PropTypes.number.isRequired,
};

export default Movie;
