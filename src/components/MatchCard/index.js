import './index.css'

const MatchCard = props => {
  const {singer} = props

  const {competingTeamLogo, competingTeam, result, matchStatus} = singer

  return (
    <li className="li-container1">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="pot"
      />
      <p className="heading4">{competingTeam}</p>
      <p className="paragraph4">{result}</p>
      <p className="heading4">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
