import React from 'react'
import ReviewModel from '../../models/ReviewModel'
import Review from './Review'

type Props = {
    reviews: ReviewModel[],
    productId: number | undefined,
    mobile: boolean
}

const LatestReviews = (props: Props) => {
    
    return (
        <>
        {props.reviews.slice(0,3).map(review => <Review key={review.id} review={review}></Review>)}
        </>
      );
}

export default LatestReviews