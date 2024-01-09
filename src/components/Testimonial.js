import React from 'react'

const Testimonial = () => {
  return (
    <div><>
    <div className="testimonial-container">
      <h3>Kettle &amp; Fire in the wild </h3>
      <div className="test-wild">
        <div className="wild-1">
          <img
            className="wild-img"
            src="https://ucarecdn.com/fb9d6a96-eee3-444e-a2f3-a1ec407eb12d/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/500x/"
            alt="img"
          />
          <p className="wild-p">@LYFEWITHMARCIAV</p>
          <p className="wild-info">
            “This was sooo delish... and perfect dinner!”
          </p>
          <p className="wild-des">SHOP CHICKEN BONE BROTH</p>
        </div>
        <div className="wild-2">
          <img
            className="wild-img"
            src="https://ucarecdn.com/7c0b58e7-db4d-4152-98f8-1da9c589d31d/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/500x/"
            alt="img"
          />
          <p className="wild-p">@THENATUREMYSTIC</p>
          <p className="wild-info">“One of my favorite cooking secrets”</p>
          <p className="wild-des">SHOP TOM YUM CHICKEN BONE BROTH</p>
        </div>
        <div className="wild-3">
          <img
            className="wild-img"
            src="https://ucarecdn.com/3726e5d7-0aff-40e0-9f3c-553c4cf1dc3f//-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/500x/"
            alt="img"
          />
          <p className="wild-p">@GRACIE_NORTON</p>
          <p className="wild-info">
            "It helped repair my leaky gut, digestion, inflammation, sugar
            cravings, energy levels"
          </p>
          <p className="wild-des">SHOP CHICKEN BONE BROTH</p>
        </div>
      </div>
    </div>
    <div className="company-container">
      <h3>Find us in more than 10,000 stores, nationwide.</h3>
      <div className="company-box">
        <img
          className="box-img-1"
          src="https://cdn.kettleandfire.com/19564575-5762-4a58-9cf7-bdca5b907223/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/"
          alt="img"
        />
        <img
          className="box-img-2"
          src="https://cdn.kettleandfire.com/ff5983b7-1a87-4295-a7e4-905a6f5f8eaf/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/"
          alt="img"
        />
        <img
          className="box-img-3"
          src="https://cdn.kettleandfire.com/e6560630-339c-4501-ac4a-124f5df7067a/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/"
          alt="img"
        />
        <img
          className="box-img-4"
          src="https://ucarecdn.com/508a4551-5e42-4a56-b994-df3f2ca0c0b1/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/"
          alt="img"
        />
      </div>
      <button className="store-btn">FIND A STORE NEAR ME</button>
    </div>
  </>
  </div>
  )
}

export default Testimonial;