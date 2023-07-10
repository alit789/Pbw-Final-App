import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";

const CardList = (props) => {
  return (
    <a href="">
      <Card id="cardHover" className="border shadow-sm mt-5" style={{ width: "18rem" }}>
        <Card.Img id="gambarList" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="descList">{props.desc}</Card.Text>
          <div className="price">
            <p>Price</p>
            <p>{props.price}/<span id="cardDay">Day</span></p>
          </div>
        </Card.Body>
      </Card>
    </a>
  );
};

export default CardList;
