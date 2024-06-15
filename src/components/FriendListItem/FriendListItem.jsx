// import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
