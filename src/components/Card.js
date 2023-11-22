const Card = ({ item }) => {
  const titleFormat = item.title.slice(0, 20);
  const percentageDrop =
    (item.pice_strikethrough - item.price - item) /
    (item.pice_strikethrough * 100).toFixed(0);
  return (
    <div className="card">
      <div className="img-container">
        <img src={item.url_image} alt={item.title} />
      </div>
      <div className="text-container">
        <h5>{titleFormat}...</h5>
        <p>
          Price drop from {item.pice_strikethrough} to {item.price}{" "}
        </p>
        <p>Rating: {item.rating}</p>
      </div>
      <div className="info-container">
        <div className="circle">{percentageDrop}</div>
        <a href={`https://www.amazon.de/${item.url}`}>Go!</a>
      </div>
    </div>
  );
};

export default Card;
