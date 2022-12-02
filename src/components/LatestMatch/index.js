import './index.css'

const LatestMatch = props => {
  const {present} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = present
  return (
    <div className="present-match">
      <p className="heading5">{competingTeam}</p>
      <div className="common">
        <div>
          <p className="heading5">{date}</p>
          <p className="paragraph5">{venue}</p>
          <p className="paragraph5">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing"
        />
      </div>
      <hr />
      <p className="heading5">First Innings</p>
      <p className="paragraph5">{firstInnings}</p>
      <p className="heading5">Second Innings</p>
      <p className="paragraph5">{secondInnings}</p>
      <p className="heading5">Man Of The Match</p>
      <p className="paragraph5">{manOfTheMatch}</p>
      <p className="heading5">Umpires</p>
      <p className="paragraph5">{umpires}</p>
    </div>
  )
}
export default LatestMatch
