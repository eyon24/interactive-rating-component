import image from "../images/illustration-thank-you.svg";

const Thanks = (props) => {
  return (
    <div className="ty-container">
      <img src={image} alt=""></img>
      <span>You selected {props.rating} out of 5</span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thanks;
