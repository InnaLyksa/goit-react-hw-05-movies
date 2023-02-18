import { MovieCreditsFetch } from '../../components/servises/servises-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ImageItem, Wraper } from './Cast.styled';

const DEFAULT_FOTO =
  'http://placehold.it/100.png/aaa698/ffffff&text=No image((';

export const Cast = () => {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    MovieCreditsFetch(movieId).then(setCast);
  }, [movieId]);
  return (
    <List>
      {casts.cast &&
        casts.cast.map(({ id, character, name, profile_path }) => (
          <ImageItem key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                width={150}
                alt={name}
              />
            ) : (
              <img src={DEFAULT_FOTO} alt={''} width={150} height={225} />
            )}
            <Wraper>
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </Wraper>
          </ImageItem>
        ))}
    </List>
  );
};
