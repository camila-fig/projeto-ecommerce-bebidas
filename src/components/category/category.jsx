import './category.scss'

export function Category( {category} ) {
    const { title } = category

    return (
        <div className="category-container">        
                <p>{title}</p>        
        </div>
        
    )
}