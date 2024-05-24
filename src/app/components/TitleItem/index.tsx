import "./Titleitem.scss";
type Props = {
  text: string;
  className: string;
  funct: Function;
};
const TitleItem = ({ text, className, funct }: Props) => {
  return (
    <p onClick={() => funct()} className={className}>
      {text}
    </p>
  );
};
export default TitleItem;
