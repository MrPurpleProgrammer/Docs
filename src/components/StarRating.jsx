'use client';
import { useState } from "react";
import { Star } from "lucide-react";
const StarRating = () => {
  const [filledStars, setFilledStars] = useState([false, false, false, false, false]); // State to keep track of which stars are filled

  const handleStarClick = (index) => {
    const updatedStars = filledStars.map((star, i) => i <= index);
   
     // Toggle the filled state of stars up to the clicked index
    setFilledStars(updatedStars); // Update the state
  };
    const RatingCount = filledStars.filter(element => element === true).length;
    console.log(RatingCount);
  return (
    <div className="flex items-start">
      {/* Map through the array of filledStars to render StarIcon components */}
      {filledStars.map((filled, index) => (
        <Star key={index} fill={filled? '#ffd700' : '#ECC7FE'} onClick={() => handleStarClick(index)} className="h-8 w-8" strokeWidth={1} stroke="text-foreground"/> // Pass the filled state and click handler to each StarIcon
      ))}
    </div>
  );
};
export default StarRating
