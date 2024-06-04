import "./BallonMap.scss";
const BallonMap = () => {
  return (
    <div className="ballon">
      <h4 className="title">{title}</h4>
      <p className="text">{text}</p>
      <p className="addres">{address}</p>
    </div>
  );
};
export default BallonMap;
