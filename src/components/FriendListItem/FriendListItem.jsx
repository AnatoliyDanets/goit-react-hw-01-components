// import FriendList from "./FriendList";
import PropTypes from 'prop-types';
import defaultImage from '../FriendListItem/port4.jpg';
import s from '../FriendListItem/FriendListItem.module.css'



export default function FriendListItem({ avatar=defaultImage, name, isOnline =false, id }) {
    return (
        <li className={ s.item} key={id}>
            <span className={s.status} style={{backgroundColor: isOnline? 'green': 'red' }}>{ isOnline} </span>
            <img className={ s.avatar} src={avatar ?? defaultImage} alt={name} width="48" />
            <p className={ s.name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}