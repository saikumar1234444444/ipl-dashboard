import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {present: {}, recent: [], banner: '', isLoad: true}

  componentDidMount = () => {
    this.getValue()
  }

  getValue = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details

    const matchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatch = data.recent_matches
    const recentMatchDetails = recentMatch.map(support => ({
      umpires: support.umpires,
      result: support.result,
      support: support.support,
      manOfTheMatch: support.man_of_the_match,
      id: support.id,
      date: support.date,
      venue: support.venue,
      competingTeam: support.competing_team,
      competingTeamLogo: support.competing_team_logo,
      matchStatus: support.match_status,
    }))
    this.setState({
      present: matchDetails,
      recent: recentMatchDetails,
      banner: teamBannerUrl,
      isLoad: false,
    })
  }

  render() {
    const {present, recent, banner, isLoad} = this.state
    return (
      <div className="click-container">
        {isLoad ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={banner} alt="team banner" className="banner" />
            <h1 className="heading5">Latest Matches</h1>
            <LatestMatch present={present} />
            <ul className="ul-container1">
              {recent.map(singer => (
                <MatchCard singer={singer} id={singer.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
