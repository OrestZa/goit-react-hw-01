import css from './FriendListItem.module.css'

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {


    return (
      <div className={css.container}>
        <img src="{avatar}" alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={isOnline ? css.isOnline : css.isOffline}>
          {isOnline ? "online" : "offline"}
        </p>
      </div>
    );
}