const RecipesCarousel =()=>{
    return (

        <div classname="recipes-container">
  <h2 className="mouth-text">Mouth-Watering Recipes</h2>
  <div
    id="carouselExampleIndicators"
    className="carousel slide "
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="{0}"
        classname="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="{1}"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="{2}"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="carousel-container">
          <div className="carousel-menu">
            <img
              className="carousel-img"
              src="https://ucarecdn.com/9ccf9934-1340-4674-be8b-758d1210033c/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1350x/"
              alt="img"
            />
            <div className="carousel-card-1">
              <h3>Mouth-Watering Recipes</h3>
              <button className="make-btn">MAKE IT</button>
            </div>
          </div>
          <div className="carousel-menu">
            <img
              className="carousel-img"
              src="//ucarecdn.com/09910ee4-2c62-4ca9-8f5d-155488a7e715/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1350x/"
              alt="img"
            />
            <div className="carousel-card-2">
              <h3>Stuffed Bell Peppers</h3>
              <button classname="make-btn">MAKE IT</button>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd menu carausel  */}
      <div className="carousel-item">
        <div className="carousel-container">
          <div className="carousel-menu">
            <img
              className="carousel-img"
              src="https://ucarecdn.com/09910ee4-2c62-4ca9-8f5d-155488a7e715/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1350x/"
              alt="img"
            />
            <div className="carousel-card-1">
              <h3>Stuffed Bell Peppers</h3>
              <button className="make-btn">MAKE IT</button>
            </div>
          </div>
          <div className="carousel-menu">
            <img
              className="carousel-img"
              src="https://ucarecdn.com/61d2f2a6-c3ac-4d0b-8586-d6c35e510f01/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1350x/"
              alt="img"
            />
            <div className="carousel-card-2">
              <h3>Tomato Vasil Soup</h3>
              <button className="make-btn">MAKE IT</button>
            </div>
          </div>
        </div>
      </div>
       {/* 3rd menu carausel  */}
      <div className="carousel-item">
        <div className="carousel-container">
          <div className="carousel-menu">
            <img
              className="carousel-img"
              src="https://ucarecdn.com/61d2f2a6-c3ac-4d0b-8586-d6c35e510f01/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1350x/"
              alt="img"
            />
            <div className="carousel-card-1">
              <h3>Tomato Vasil Soup</h3>
              <button className="make-btn">MAKE IT</button>
            </div>
          </div>
          <div className="carousel-menu">
            <img
              classname="carousel-img"
              src="https://ucarecdn.com/9ccf9934-1340-4674-be8b-758d1210033c/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1350x/"
              alt="img"
            />
            <div className="carousel-card-2">
              <h3>Mouth-Watering Recipes</h3>
              <button classname="make-btn">MAKE IT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true">
        <span className="sr-only">Previous</span>
      </span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true">
        <span className="sr-only">Next</span>
      </span>
    </a>
  </div>
</div>

    )
}

export default RecipesCarousel;