/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */


/*
bring in the files I created to use inside the app render
*/

import { useState } from "react";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";



/*
update the app to pull in my functions to display shows, and details when clicked.

*/
export default function App() {
  const [selectedShow, setSelectedShow] = useState(tvShows[0])

return (
    <>
        <header>
            <p>React TV</p>
            <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
        </header>
        <main>
            <ShowDetails show={selectedShow} />
        </main>
    </>
)
}