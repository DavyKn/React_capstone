import { useLocation, Navigate } from 'react-router-dom';

const CoinDetails = () => {
  const location = useLocation();
  

  const singleData = location?.state?.coin;
  if (!singleData) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <div className="container-detail">
        <p className="coin-supply">Coins supply in market:</p>
        <p className="coin-supply">${singleData.csupply}</p>
      </div>
      <ul>
        <li className="name">
          <span>name :</span> {singleData.name}
        </li>
        <li className="name">
          <span>Rank :</span> {singleData.rank}
        </li>
        <li className="name">
          <span>Symbol :</span> {singleData.symbol}
        </li>
        <li className="name">
          <span>Market cap in USD :</span> $ {singleData.market_cap_usd}
        </li>
        <li className="name">
          <span>Weekly percentage change :</span> {singleData.percent_change_7d}
          %
        </li>
        <li className="name">
          <span>Price :</span> $ {singleData.price_usd}
        </li>
      </ul>
    </div>
  );
};
export default CoinDetails;
