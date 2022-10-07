
import React from 'react'
import "./category.scss"

const Category = ({ category, onCategory}) => {
  return (
    <div className="category">
      <div className="category__logo">
        <span>Aydify Movie</span>
      </div>
      <div className="category__list">
        <div className="category__list-item">
          <span onClick={() => onCategory("")} className="category__list-item_link">All</span>
        </div>
        {
          category.map(cat => (
            <div className="category__list-item" key={cat.id}>
              <img src={cat.icons} />
              <span onClick={() => onCategory(cat.name)} className="category__list-item_link">{cat.name}</span>
            </div>
          ))
        }
      </div>
      <div className="category__footer">
          2021@aydifyMovie
      </div>
    </div>
  )
}

export default Category