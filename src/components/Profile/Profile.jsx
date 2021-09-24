import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css'
import defaultImage from '../Profile/port4.jpg';
console.log(defaultImage)



export default function Profile({ avatar = defaultImage, name, tag, location, followers, views, likes }) {

    return (<div className={s.profile} >
        <div className={s.description}>
            <img
                src={avatar ?? defaultImage}
                alt={tag}
                className={ s.avatar}
            />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={ s.stats}>
            <li className={s.stat}>
                <span className={ s.label}>Followers</span>
                <span className={ s.quantity}>{followers}</span>
            </li>
            <li className={s.stat}>
                <span className={ s.label}>Views</span>
                <span className={ s.quantity}>{views}</span>
            </li>
            <li className={s.stat}>
                <span className={ s.label}>Likes</span>
                <span className={ s.quantity}>{likes}</span>
            </li>
        </ul>
    </div >);
}


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};