function ShowSelection({ shows , setSelectedShow }) {
    return (
    <menu className="showSelect">
    {shows.map((show) => (
        <div className={"showCard" + show} key={show} onClick={() =>
         setSelectedShow(show)}>
         </div>

    ))}
</menu>
    );
}
export default ShowSelection