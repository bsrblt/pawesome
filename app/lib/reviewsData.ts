export interface Review {
  id: number;
  productId: number;
  score: number;
  comment?: string;
}

export const reviewsData: Review[] = [
  { id: 1, productId: 1, score: 5, comment: "Great product! My dog loves it." },
  {
    id: 2,
    productId: 1,
    score: 4,
    comment: "Good quality food, but a bit pricey.",
  },
  {
    id: 3,
    productId: 2,
    score: 4,
    comment: "My dog really likes the wet food.",
  },
  {
    id: 4,
    productId: 2,
    score: 3,
    comment: "It's okay, but not as good as the dry food.",
  },
  { id: 5, productId: 3, score: 5, comment: "Perfect for my growing puppy!" },
  {
    id: 6,
    productId: 3,
    score: 4,
    comment: "Good nutrition, but my puppy is a bit picky.",
  },
  {
    id: 7,
    productId: 4,
    score: 4,
    comment: "Great for my senior dog, but could use more flavor.",
  },
  {
    id: 8,
    productId: 4,
    score: 5,
    comment: "My older dog is more energetic since switching to this food.",
  },
  {
    id: 9,
    productId: 5,
    score: 5,
    comment: "My cat loves this dry food, and it keeps her healthy.",
  },
  {
    id: 10,
    productId: 5,
    score: 4,
    comment: "A bit expensive, but worth it for the quality.",
  },
  { id: 11, productId: 6, score: 5, comment: "My cat devours this wet food!" },
  {
    id: 12,
    productId: 6,
    score: 4,
    comment: "Good product, but the cans are a bit small.",
  },
  {
    id: 13,
    productId: 7,
    score: 5,
    comment: "Ideal for my kitten. She's growing so fast!",
  },
  {
    id: 14,
    productId: 7,
    score: 4,
    comment: "Good food, but my kitten sometimes gets bored of it.",
  },
  {
    id: 15,
    productId: 8,
    score: 4,
    comment: "Great for older cats, but could use more variety in flavors.",
  },
  {
    id: 16,
    productId: 8,
    score: 5,
    comment: "My senior cat's health has improved with this food.",
  },
  {
    id: 17,
    productId: 9,
    score: 5,
    comment: "My hamster loves this food, and it's very healthy.",
  },
  {
    id: 18,
    productId: 9,
    score: 4,
    comment: "Good product, but a bit more expensive than others.",
  },
  {
    id: 19,
    productId: 10,
    score: 5,
    comment: "My guinea pig can't get enough of this food!",
  },
  {
    id: 20,
    productId: 10,
    score: 4,
    comment: "Great flavor, but wish it came in a bigger bag.",
  },
  {
    id: 21,
    productId: 11,
    score: 5,
    comment: "Perfect treat for my small pet. She loves it!",
  },
  {
    id: 22,
    productId: 11,
    score: 4,
    comment: "Good treats, but they don't last long.",
  },
  {
    id: 23,
    productId: 12,
    score: 5,
    comment: "These snacks are great for my older pet.",
  },
  {
    id: 24,
    productId: 12,
    score: 4,
    comment: "Healthy and tasty, but a bit pricey.",
  },
  {
    id: 25,
    productId: 13,
    score: 5,
    comment: "Great for weight control and my cat loves it!",
  },
  {
    id: 26,
    productId: 13,
    score: 4,
    comment: "Good diet food, but my cat sometimes prefers wet food.",
  },
  {
    id: 27,
    productId: 14,
    score: 5,
    comment: "My dog can't get enough of these treats!",
  },
  {
    id: 28,
    productId: 14,
    score: 4,
    comment: "Great treats, but a bit on the expensive side.",
  },
];

export const calculateAverageScore = (productId: number): number => {
  const productReviews = reviewsData.filter(
    (review) => review.productId === productId
  );
  const totalScore = productReviews.reduce(
    (acc, review) => acc + review.score,
    0
  );
  return productReviews.length ? totalScore / productReviews.length : 0;
};

export const addReview = (newReview: Review): void => {
  reviewsData.push(newReview);
};
