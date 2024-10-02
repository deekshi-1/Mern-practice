const Card = (props) => {
  const userdetail = props.data;
  return (
    <div className="card">
      <div className="image">
        <img src={userdetail.imgUrl} alt="profileImage" />
      </div>
      <div className="detail">
        <h3>Name:{userdetail.name}</h3>
        <h4>Role:{userdetail.role}</h4>
      </div>
    </div>
  );
};

export default Card;
