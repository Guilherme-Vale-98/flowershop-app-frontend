import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
type Props = {
    rating?: number
}

const StarReview = (props: Props) => {
    const rating = props.rating || 0;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />);
        } else if (i<rating+1) {
            stars.push(<FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "gold" }} />);
        } else {
            stars.push(<FontAwesomeIcon icon={farStar} style={{ color: "gold" }} />);
        }
    }

    return (
        <div>
            {stars}
        </div>
    );
};

export default StarReview;