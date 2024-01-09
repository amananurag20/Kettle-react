const MissionSection=()=>{
    return(
        <>
  <div className="mission-container">
    <div className="mission-info">
      <h2>
        It's our mission to improve the way we eat, starting from the ground up.
      </h2>
    </div>
    <div className="mission-values">
      <div className="mission-box">
        <span className="material-symbols-outlined mission-icon">
          check_circle
        </span>
        <p>We carefully source the highest quality ingredients.</p>
      </div>
      <div className="mission-box">
        <span className="material-symbols-outlined mission-icon">
          check_circle
        </span>
        <p>We partner with farms that reflect our core values.</p>
      </div>
      <div className="mission-box">
        <span className="material-symbols-outlined mission-icon">
          check_circle
        </span>
        <p>
          Slow-simmered at the perfect temperatures for maximum flavor and
          nutrition.
        </p>
      </div>
      <button className="learn-btn"> LEARN MORE</button>
    </div>
  </div>
  <div className="sub-container">
    <div>
      <img
        className="sub-img"
        src="https://ucarecdn.com/eee9010b-9f23-400b-ab1d-657b5086c93b/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/555x/"
        alt="img"
      />
    </div>
    <div className="sub-info">
      <h2 className="save-text">Subscribe &amp; Save</h2>
      <div className="commit-text">
        <p>No Commitment • Delivered Monthly</p>
      </div>
      <button className="shop-btn">SHOP BROTH SUBSCRIPTIONS</button>
      <p className="free-text">Free Shipping with 12+ Cartons</p>
    </div>
  </div>
</>

    )
}

export default MissionSection;