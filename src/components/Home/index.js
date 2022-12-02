import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {list: [], isClick: true}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const {teams} = jsonData

    const filterData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({list: filterData, isClick: false})
  }

  render() {
    const {list, isClick} = this.state
    return (
      <div className="bg-container">
        {isClick ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />

              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <ul className="ul-container">
              {list.map(simple => (
                <TeamCard simple={simple} key={simple.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
