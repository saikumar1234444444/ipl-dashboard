import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {simple} = props
  const {id, name, teamImageUrl} = simple
  return (
    <Link to={`/blogs/${id}`}>
      <li className="li-container">
        <img src={teamImageUrl} alt={`${name}`} className="picture" />
        <p className="heading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
