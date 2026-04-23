import { useState } from "react"
import EpisodeList from "../episodes/EpisodeList"
import EpisodeDetails from "../episodes/EpisodeDetails"


function ShowDetails({ show }) {
const [selectedEpisode, setSelectedEpisode] = useState()
if (!show) {
    return <p>Select a show to get started!</p>
}

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