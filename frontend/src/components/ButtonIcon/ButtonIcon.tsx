import './styles.css';
import ArrowImg from '../../assets/images/arrow.svg';

interface ButtonProps {
  text: string;
}

export function ButtonIcon({ text }: ButtonProps) {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>{text}</h6>
      </button>
      <div className="btn-icon-container">
        <img src={ArrowImg} />
      </div>
    </div>
  );
}
