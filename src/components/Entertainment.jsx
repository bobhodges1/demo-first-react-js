export function TVEpisode(props) {
  return (
    <div>
      <h2>{props.episodeData.name}</h2>
      <p>{props.episodeData.summary}</p>
      <br />
      <img src={props.episodeData.image.medium} />
    </div>
  );
}


