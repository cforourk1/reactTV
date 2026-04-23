/* map over the show list to display information about a show when clicked. I add to add the css file to make my changes work right. I also messed up the classnames.
*/
import "./shows.css"
function ShowSelection({ shows , setSelectedShow }) {
/*
*/
    return (
    <nav className="shows">
    {shows.map((show) => (
        <a className="show" key={show.name} onClick={() =>
         setSelectedShow(show)}>{show.name}

         </a>

    ))}
</nav>
    );
}
export default ShowSelection