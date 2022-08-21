import { useState } from "react";
import logo from "../images/icon-star.svg";

const Submit = (props) => {
  const [rating, setRating] = useState(null);

  const handleSubmit = () => {
    props.handleSubmit(rating);
  };

  return (
    <div className="submit-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons">
        <div className="ratings">
          <button value={1} onClick={(e) => setRating(e.target.value)}>
            1
          </button>
          <button value={2} onClick={(e) => setRating(e.target.value)}>
            2
          </button>
          <button value={3} onClick={(e) => setRating(e.target.value)}>
            3
          </button>
          <button value={4} onClick={(e) => setRating(e.target.value)}>
            4
          </button>
          <button value={5} onClick={(e) => setRating(e.target.value)}>
            5
          </button>
        </div>
        <button className="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Submit;
