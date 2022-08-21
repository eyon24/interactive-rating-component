import { useState } from "react";
import Submit from "./Submit";
import Thanks from "./Thanks";

const Rating = () => {
  const [pending, setPending] = useState(true);
  const [rating, setRating] = useState(null);

  const handleSubmit = (value) => {
    setRating(value);
    setPending(false);
  };

  return (
    <div className="wrapper">
      {pending && <Submit handleSubmit={handleSubmit} />}
      {!pending && <Thanks rating={rating} />}
    </div>
  );
};

export default Rating;
