import React from 'react'
import ReviewModel from '../../models/ReviewModel'

type Props = {
    review: ReviewModel
}

const Review = (props: Props) => {
    const date = new Date(props.review.date);

    const longMonth = date.toLocaleString('pt-BR', {month: "long"});
    const dateDay = date.getDate();
    const dateYear = date.getFullYear();

    const showDate = dateDay+" "+longMonth+", " + dateYear;

  return (
    <div className="card mb-3 mt-3" style={{ maxWidth: '100%' }}>
          <div className="row g-0">
            <div className="col-md-2 d-flex justify-content-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Card Image"
                className="img-fluid review-img"    
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">{props.review.userEmail}</h5>
                <p>{showDate}</p>
                <p className="card-text">
                 {props.review.content}
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Review