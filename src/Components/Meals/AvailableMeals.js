import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 35,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 22,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 30,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 29,
  },
  {
    id: "m5",
    name: "American Beef",
    description: "Healthy...and Cheesy...",
    price: 45,
  },{
    id: "m6",
    name: "Green Burger",
    description: "Green Vegs inside",
    price: 19,
  },{
    id: "m7",
    name: "Soup Bowl",
    description: "Healthy",
    price: 39,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
