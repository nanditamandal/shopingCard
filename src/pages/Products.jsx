import { Link } from "react-router-dom";


function Products(props) {

    const {title, id , description, images, thumbnail}=props.element;
    // console.log(props.element)

  return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <Link to={`/productDetails/${id}`}> <div className=""><button className="btn btn-accent">Details</button></div> </Link>
            <div className=""><button className="btn btn-primary">Add to card</button></div>
            </div>
        </div>
        </div>
  )
}

export default Products