import React, { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { useSession } from "next-auth/react";
import {
  Review,
  reviewsData,
  addReview,
  calculateAverageScore,
} from "../../lib/reviewsData";

interface ReviewsProps {
  productId: number;
}

const Reviews: React.FC<ReviewsProps> = ({ productId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const productReviews = reviewsData.filter(
      (review) => review.productId === productId
    );
    setReviews(productReviews);
    const newAverageScore = calculateAverageScore(productId);
    setAverageScore(newAverageScore);
  }, [productId]);

  const addReviewCalcAvg = (score: number, comment: string) => {
    const newReview: Review = {
      id: reviews.length + 1,
      productId,
      score,
      comment,
    };
    addReview(newReview);
    setReviews([...reviews, newReview]);
    const newAverageScore = calculateAverageScore(productId);
    setAverageScore(newAverageScore);
    setIsModalOpen(false);
  };

  const handleCommentClick = () => {
    if (isLoggedIn) {
      setIsModalOpen(true);
    } else {
      alert("You need to login to comment and review.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" bg-lemonlight/50 rounded-lg p-6 shadow-sh md:h-[500px] mb-5 mt-1">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="grid items-center mb-4">
        <span className="text-lg font-semibold">
          Average Score: {averageScore.toFixed(1)}
        </span>
        <div className="font-bold text-5xl">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          productId={productId}
          onAddReview={addReviewCalcAvg}
        />
      )}

      <div className="mt-4">
        {reviews.map((review) => (
          <div key={review.id} className="mb-4">
            <div className="grid items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < review.score ? "text-yellow-400" : "text-gray-400"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-700">{review.comment}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleCommentClick} className="text-turq underline">
        Add your review
      </button>
    </div>
  );
};

export default Reviews;
