import { InfinitySpin } from 'react-loader-spinner';
import { WraperLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <WraperLoader>
      <InfinitySpin color="#f3a407" ariaLabel="loading" />;
    </WraperLoader>
  );
};
