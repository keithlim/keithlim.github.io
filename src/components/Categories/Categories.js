import "./Categories.css"
import experienceBG from "../../images/experienceBG.jpg"
import projectsBG from "../../images/projectsBG.jpg"
import educationBG from "../../images/educationBG.jpg"
import downloadsBG from "../../images/downloadsBG.jpg"
import Category from "../Category/Category"

function Categories() {
    return (
        <section className="categories">

            <div className="categories-centerTop">

                <Category categoryName={"EXPERIENCE"} image={experienceBG} />

                <Category categoryName={"PROJECTS"} image={projectsBG} />

            </div>

            <div className="categories-centerBottom">

                <Category categoryName={"EDUCATION"} image={educationBG} />

                <Category categoryName={"DOWNLOADS"} image={downloadsBG} />

            </div>

        </section>
    )
}

export default Categories;