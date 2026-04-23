import { useState } from "react"
import EpisodeList from "../episodes/EpisodeList"
import EpisodeDetails from "../episodes/EpisodeDetails"


function ShowDetails({ show }) {
/*like in javascript we are declaring variable to render later. The power of react is that useState will update the calue in the function and re-rerender without me having to tell it to do so. the array itself is destructuring. this will return both the selected episode AND render it to update with the details automatically. 

*/
const [selectedEpisode, setSelectedEpisode] = useState()
if (!show) {
//if no show is selected prompt user to select
    return <p>Select a show to get started!</p>
}
/* return the show information - name, episodes, get a selected episode and its details
*/
    return (
        <div className="ShowDetails">
    <EpisodeList
      {/* calling th episode list component. this feeds in data about the show's available episodes */}
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
    />
    <EpisodeDetails episode={selectedEpisode} />
    </div>
    )
}

export default ShowDetails