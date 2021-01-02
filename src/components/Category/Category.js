import "./Category.css"

function Category({ categoryName, image }) {
    return (
        <article style={{ backgroundImage: "url(" + image + ")", backgroundSize: "cover", height: "250px" }}>
            <div className="category-div">

                <h1>
                    {categoryName}
                </h1>

                <div className="underline"></div>

            </div>
        </article >
    )
}

export default Category;
