import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={css.friendListItem}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img className={css.profPic} src={avatar} alt="User avatar" width="48" />
      <p className={css.username}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
