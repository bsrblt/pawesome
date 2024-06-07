import React, { useState } from "react";
import Button from "./Button";

interface ModalProps {
  onClose: () => void;
  productId: number;
  onAddReview: (score: number, comment: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, productId, onAddReview }) => {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleScoreChange = (newScore: number) => {
    setScore(newScore);
  };

  const handleSubmit = () => {
    if (score === 0) {
      setError("Please give at least 1 star before submitting.");
    } else {
      onAddReview(score, comment);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-tahiti font-lobster tracking-wider">
          Add Your Review
        </h2>
        <div className="flex items-center mb-4">
          <span className="text-gray-900 mr-2">Score:</span>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-2xl ${
                index < score ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => handleScoreChange(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <section className="mr-2">
          <textarea
            className="w-full p-2 border border-tahiti rounded mb-4 shadow-sh"
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </section>

        <div className="flex justify-between">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
