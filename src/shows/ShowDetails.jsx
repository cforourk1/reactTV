import { useState } from "react"
import EpisodeList from "../episodes/EpisodeList"
import EpisodeDetails from "../episodes/EpisodeDetails"


function ShowDetails({ show }) {
const [selectedEpisode, setSelectedEpisode] = useState()
/*If there is not a show selected - prompt user to select one
*/
if (!show) {
    return <p>Select a show to get started!</p>
}
/* return the show information - name, episodes, get a selected episode and its details
*/
    return (
        <div className="ShowDetails">
    <EpisodeList
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