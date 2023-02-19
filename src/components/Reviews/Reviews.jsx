import { MovieReviewsFetch } from '../../servises/servises-api';
import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { List, ReviewsItem, ReviewerAuthor } from './Reviews.styled';
import { Loader } from '../Loader/Loader';

const Reviews = id => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MovieReviewsFetch(movieId).then(setReview);
  }, [movieId]);

  if (review.length === 0) {
    return <h2>There is no reviews</h2>;
  } else {
    return (
      <Suspense fallback={<Loader />}>
        <List>
          {review &&
            review.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <ReviewerAuthor>Author: {author}</ReviewerAuthor>
                <p>{content}</p>
              </ReviewsItem>
            ))}
        </List>
      </Suspense>
    );
  }
};

export default Reviews;
