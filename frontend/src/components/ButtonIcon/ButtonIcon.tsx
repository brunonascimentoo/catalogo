import './styles.css';
import ArrowImg from '../../assets/images/arrow.svg';

export function ButtonIcon() {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>inicie agora a sua busca</h6>
      </button>
      <div className="btn-icon-container">
        <img src={ArrowImg} />
      </div>
    </div>
  );
}
