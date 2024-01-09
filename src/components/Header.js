import { useSelector } from "react-redux";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

const Header = () => {
      

     const cartItems= useSelector((store)=>store.cart.items);

  return (
    <div>
      <div className="offer">
        <h3>20% Off for Life | Subscribe &amp; Save Now</h3>
      </div>
      <div className="header">
        <p className="shop-drop">shop </p>
        <span className="material-symbols-outlined">expand_more</span>
        <Link to="/bestsellers"><p>Bestsellers</p></Link>
        <p>Bundles</p>
        <h2>
          <Link to="/"><i className="fa-solid fa-fire kettle-heading" /> Kettle &amp; Fire</Link>
        </h2>
        <p>Learn </p>
        <span className="material-symbols-outlined">expand_more</span>
        <p>About us</p>
        <p>Loyality Program</p>
        <p>
          <i className="fa-solid fa-magnifying-glass" />
        </p>
        <Link to={"/login"}><p>
          <i className="fa-solid fa-user" />
        </p></Link>
        <Link to={"/cart"}><p>
          <i className="fa-solid fa-cart-shopping" />
          ({cartItems.length})
        </p></Link>
      </div>

    </div>

  )
}

export default Header;