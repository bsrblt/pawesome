export interface Product {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  Category: string;
  type: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    imageSrc: "/dogfood.jpg",
    title: "Premium Dry Dog Food",
    description: "High-quality protein and essential nutrients for your pup.",
    price: 49.99,
    Category: "Dog",
    type: "Dry",
  },
  {
    id: 2,
    imageSrc: "/dogfoodWet.jpg",
    title: "Wet Dog Food",
    description: "Delicious and nutritious Wet food for your canine friend.",
    price: 39.99,
    Category: "Dog",
    type: "Wet",
  },
  {
    id: 3,
    imageSrc: "/Dogfood3.jpg",
    title: "Puppy Food",
    description:
      "Specially formulated and highly nutritious for growing puppies.",
    price: 26.99,
    Category: "Dog",
    type: "Dry",
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
  },
  {
    id: 5,
    imageSrc: "/catfood.jpg",
    title: "Premium Dry Cat Food",
    description: "High-quality protein and essential nutrients for your Cat.",
    price: 49.99,
    Category: "Cat",
    type: "Dry",
  },
  {
    id: 6,
    imageSrc: "/wetcat.jpg",
    title: "Wet Cat Food",
    description: "Delicious and nutritious Wet food for your feline friend.",
    price: 28.99,
    Category: "Cat",
    type: "Wet",
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
  },
  {
    id: 10,
    imageSrc: "/gp.jpg",
    title: "Guinea Pig Food",
    description: "Your little friend's favourite food, now with extra flavour.",
    price: 19.99,
    Category: "Small Pet",
    type: "Dry",
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
  },
];