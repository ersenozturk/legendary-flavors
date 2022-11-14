import React from 'react'
import { useCustomAppContext } from '../context/AppContext'

const Meals = () => {
    const {meals} = useCustomAppContext()
    console.log(meals);
  return (
    <section className='section-center'>
        {
            meals.map((each)=>{
                const {idMeal, strMeal: title, strMealThumb: imgSrc} = each
                return(
                    <article key={idMeal}>
                        <img src={imgSrc} alt={title}  style={{width:'200px'}}/>
                        <div>
                            <h5>{title}</h5>
                            <button className='btn-like'>Show Detail</button>
                        </div>
                    </article>
                )
            })
        }

    </section>
  )
}

export default Meals