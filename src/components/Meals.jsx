import React from "react";
import { useCustomAppContext } from "../context/AppContext";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { meals, loading } = useCustomAppContext();
  console.log(meals);

  if (loading) {
    return (
      <section className="section">
        <h4>Loading..</h4>
      </section>
    );
  }

  if (meals?.length < 1) {
    return (
      <section className="section">
        <h4>Sorry... We couldn't find the flavor you wanted. Please try again! </h4>
      </section>
    );
  }

  if (meals.length > 0) {
    return (
      <section className="section-center">
        {meals.map((each) => {
          const { idMeal, strMeal: title, strMealThumb: imgSrc } = each;
          return (
            <article key={idMeal}>
              <img src={imgSrc} alt={title} style={{ width: "200px" }} />
              <div>
                <h5>{title}</h5>
                <button className="btn-like">Show Detail</button>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
};

export default Meals;
