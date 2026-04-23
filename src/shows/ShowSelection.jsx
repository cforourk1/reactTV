/* map over the show list to display information about a show when clicked. I add to add the css file to make my changes work right. I also messed up the classnames.
*/
import "./shows.css"
function ShowSelection({ shows , setSelectedShow }) {
/*
In ShowSelection, we are passing in the show array, and setSelectedShow - this is empty but when the show is clicked on it will be set. I also have the navigation bar in this file. Once a show is selected - it "sets" the selectedShow and then the next component - showSelection can kick off.
*/
    return (
    <nav className="shows">
{/*Mapping over the show list to create the clickable links to the various shows and an onClick listener to then retrieve show information*/}
    {shows.map((show) => (
        <a className="show" key={show.name} onClick={() =>
         setSelectedShow(show)}>{show.name}

         </a>

    ))}
</nav>
    );
}
export default ShowSelection