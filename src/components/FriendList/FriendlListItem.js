export const FriendlistItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <>
      <span className={isOnline ? 'status' : 'status isOnline'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};
