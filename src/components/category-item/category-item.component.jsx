import './category-item.styles.scss'

const CategoryItem = ({category}) => {

    const { id, title, subtitle, imageUrl } = category

    return (
        <div key={id} className="category-container">
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div> 
    )
}

export default CategoryItem