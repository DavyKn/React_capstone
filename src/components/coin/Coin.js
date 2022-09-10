import PropTypes from 'prop-types';
import { IoIosArrowDropright } from 'react-icons/io';

const Coin = (props) => {
  const { coin } = props;

  return (
    <div className="coin">
      <div className="coin-arrow">
        <IoIosArrowDropright />
      </div>
      <div className="coin-name-container">
        <p className="coin-name">{coin.name}</p>
        <small>{`$ ${coin.price_usd}`}</small>
      </div>
    </div>
  );
};

export default Coin;

Coin.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    rank: PropTypes.number,
    price_usd: PropTypes.string,
  }).isRequired,
};
