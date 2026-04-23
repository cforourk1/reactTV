function ShowSelection({ shows , setSelectedShow }) {
    
    return (
    <menu className="showSelect">
    {shows.map((show) => (
        <a className="show" key={show.name} onClick={() =>
         setSelectedShow(show)}>{show.name}

         </a>

    ))}
</menu>
    );
}
export default ShowSelection