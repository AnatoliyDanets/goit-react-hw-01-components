import React from "react";
// import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";
import s from '../FriendList/FriendList.module.css'

export default function FriendList({ friends }) {
    return (
        <div className={s.wrap }>
        <ul className={ s.friend__list}>
            {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
            />)}

            </ul>
            </div>
    )
}
