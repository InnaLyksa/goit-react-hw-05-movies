import { MovieReviewsFetch } from '../../components/servises/servises-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ReviewsItem, ReviewerAuthor } from './Reviews.styled';

export const Reviews = id => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MovieReviewsFetch(movieId).then(setReview);
  }, [movieId]);

  if (review.length === 0) {
    return <h2>There is no reviews</h2>;
  } else {
    return (
      <List>
        {review &&
          review.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewerAuthor>Author: {author}</ReviewerAuthor>
              <p>{content}</p>
            </ReviewsItem>
          ))}
      </List>
    );
  }
};
