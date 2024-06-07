export interface Product {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  Category: string;
  type: string;
  featured: string;
  nutritionValues: {
    [key: string]: string;
  };
}

export const productsData: Product[] = [
  {
    id: 1,
    imageSrc: "/dogfood.jpg",
    title: "Premium Dry Dog Food",
    description:
      "High-quality protein and all the essential nutrients for your little pup.",
    price: 49.99,
    Category: "Dog",
    type: "Dry",
    featured: "Yes",
    nutritionValues: {
      Calories: "350 kcal",
      Protein: "25 g",
      Fat: "12 g",
      Fiber: "3 g",
      Carbohydrates: "50 g",
    },
  },
  {
    id: 2,
    imageSrc: "/dogfoodwet.jpg",
    title: "Wet Dog Food",
    description:
      "Delicious, nutritious and now with extra flavor! Wet food for your canine friend.",
    price: 39.99,
    Category: "Dog",
    type: "Wet",
    featured: "No",
    nutritionValues: {
      Calories: "200 kcal",
      Protein: "15 g",
      Fat: "8 g",
      Fiber: "2 g",
      Carbohydrates: "20 g",
    },
  },
  {
    id: 3,
    imageSrc: "/dogfood3.jpg",
    title: "Puppy Food",
    description:
      "Specially formulated and highly nutritious for all kinds of growing puppies.",
    price: 26.99,
    Category: "Dog",
    type: "Dry",
    featured: "No",
    nutritionValues: {
      Calories: "400 kcal",
      Protein: "30 g",
      Fat: "15 g",
      Fiber: "4 g",
      Carbohydrates: "45 g",
    },
  },
  {
    id: 4,
    imageSrc: "/dog1.jpg",
    title: "Senior Dog Food",
    description:
      "Tailored nutrition carefully crafted for your older canine companion.",
    price: 29.99,
    Category: "Dog",
    type: "Dry",
    featured: "No",
    nutritionValues: {
      Calories: "300 kcal",
      Protein: "20 g",
      Fat: "10 g",
      Fiber: "5 g",
      Carbohydrates: "40 g",
    },
  },
  {
    id: 5,
    imageSrc: "/catfood.jpg",
    title: "Premium Dry Cat Food",
    description: "High-quality protein and essential nutrients for your Cat.",
    price: 49.99,
    Category: "Cat",
    type: "Dry",
    featured: "Yes",
    nutritionValues: {
      Calories: "350 kcal",
      Protein: "25 g",
      Fat: "12 g",
      Fiber: "3 g",
      Carbohydrates: "50 g",
    },
  },
  {
    id: 6,
    imageSrc: "/wetcat.jpg",
    title: "Wet Cat Food",
    description: "Delicious and nutritious Wet food for your feline friend.",
    price: 28.99,
    Category: "Cat",
    type: "Wet",
    featured: "No",
    nutritionValues: {
      Calories: "200 kcal",
      Protein: "15 g",
      Fat: "8 g",
      Fiber: "2 g",
      Carbohydrates: "20 g",
    },
  },
  {
    id: 7,
    imageSrc: "/kitty.jpg",
    title: "Kitty Food",
    description:
      "Specially formulated and highly nutritious for growing kitties.",
    price: 27.99,
    Category: "Cat",
    type: "Dry",
    featured: "No",
    nutritionValues: {
      Calories: "400 kcal",
      Protein: "30 g",
      Fat: "15 g",
      Fiber: "4 g",
      Carbohydrates: "45 g",
    },
  },
  {
    id: 8,
    imageSrc: "/petfood.png",
    title: "Senior Cat Food",
    description:
      "Tailored nutrition carefully crafted for your older feline companion.",
    price: 23.99,
    Category: "Cat",
    type: "Dry",
    featured: "No",
    nutritionValues: {
      Calories: "300 kcal",
      Protein: "20 g",
      Fat: "10 g",
      Fiber: "5 g",
      Carbohydrates: "40 g",
    },
  },
  {
    id: 9,
    imageSrc: "/hamsterfood.jpg",
    title: "Hamster Food",
    description:
      "Balanced diet and healthy munchies for your Small Pet furry friend.",
    price: 14.99,
    Category: "Small Pet",
    type: "Dry",
    featured: "Yes",
    nutritionValues: {
      Calories: "250 kcal",
      Protein: "18 g",
      Fat: "10 g",
      Fiber: "6 g",
      Carbohydrates: "35 g",
    },
  },
  {
    id: 10,
    imageSrc: "/gp.jpg",
    title: "Guinea Pig Food",
    description: "Your little friend's favourite food, now with extra flavour.",
    price: 19.99,
    Category: "Small Pet",
    type: "Dry",
    featured: "No",
    nutritionValues: {
      Calories: "260 kcal",
      Protein: "20 g",
      Fat: "8 g",
      Fiber: "7 g",
      Carbohydrates: "30 g",
    },
  },
  {
    id: 11,
    imageSrc: "/smallpet1.jpg",
    title: "Tiny Treats",
    description:
      "Treat your cutest with the best taste on the pet food market.",
    price: 19.99,
    Category: "Small Pet",
    type: "Treat",
    featured: "No",
    nutritionValues: {
      Calories: "150 kcal",
      Protein: "10 g",
      Fat: "5 g",
      Fiber: "4 g",
      Carbohydrates: "20 g",
    },
  },
  {
    id: 12,
    imageSrc: "/gp2.jpg",
    title: "Healthy Snacks",
    description:
      "Carefully crafted healthy fiber and protein for your older tiny companion.",
    price: 29.99,
    Category: "Small Pet",
    type: "Treat",
    featured: "No",
    nutritionValues: {
      Calories: "180 kcal",
      Protein: "12 g",
      Fat: "6 g",
      Fiber: "5 g",
      Carbohydrates: "25 g",
    },
  },
  {
    id: 13,
    imageSrc: "/wetfood2.jpg",
    title: "Diet Wet Cat Food",
    description:
      "Maintains weight control while keeping it tasty for your feline.",
    price: 29.99,
    Category: "Cat",
    type: "Wet",
    featured: "No",
    nutritionValues: {
      Calories: "180 kcal",
      Protein: "14 g",
      Fat: "7 g",
      Fiber: "3 g",
      Carbohydrates: "18 g",
    },
  },
  {
    id: 14,
    imageSrc: "/treats.jpg",
    title: "Dog Treats",
    description:
      "Maintains weight control while keeping it tasty for your canine.",
    price: 24.99,
    Category: "Dog",
    type: "Treat",
    featured: "Yes",
    nutritionValues: {
      Calories: "120 kcal",
      Protein: "8 g",
      Fat: "4 g",
      Fiber: "3 g",
      Carbohydrates: "15 g",
    },
  },
];
