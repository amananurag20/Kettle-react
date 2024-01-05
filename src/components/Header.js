    import DropDown from "./DropDown";
    
    const Header= ()=>{

        return (
            <div>
  <div className="offer">
    <h3>20% Off for Life | Subscribe &amp; Save Now</h3>
  </div>
  <div className="header">
    <p className="shop-drop">shop </p>
    <span className="material-symbols-outlined">expand_more</span>
    <p>Bestsellers</p>
    <p>Bundles</p>
    <h2>
      <i className="fa-solid fa-fire kettle-heading" /> Kettle &amp; Fire
    </h2>
    <p>Learn </p>
    <span className="material-symbols-outlined">expand_more</span>
    <p>About us</p>
    <p>Loyality Program</p>
    <p>
      <i className="fa-solid fa-magnifying-glass" />
    </p>
    <p>
      <i className="fa-solid fa-user" />
    </p>
    <p>
      <i className="fa-solid fa-cart-shopping" />
    </p>
  </div>
  <DropDown/>
</div>

        )
    }

    export default Header;