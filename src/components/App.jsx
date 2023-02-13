import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar, SearchForm, GalleryImages, Modal, Button } from './index';
import api from './servises/pixabay-api';

import { Loader } from '../components/Loader/Loader';

import ScrollToTop from 'react-scroll-to-top';

export function App() {
  const [query, setQuery] = useState('');
  const [modalImg, setModalImg] = useState(null);
  const [pictureData, setPictureData] = useState('');
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [IsLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');

    api
      .pixabayApi(query, page)
      .then(res => {
        if (res.data.hits.length === 0) {
          toast.error(`There is no "${query}" images.`);
          setStatus('idle');
          return;
        }
        setPictureData(pictureData => [
          ...pictureData,
          ...mapper(res.data.hits),
        ]);
        setStatus('resolved');

        const lengthData = (page - 1) * 12 + res.data.hits.length;

        if (lengthData >= res.data.totalHits) {
          setIsLoadingMore(false);
        } else {
          setIsLoadingMore(true);
        }
        if (res.data.hits.length < 12 && res.data.hits.length > 0) {
          toast.info('There is no more images');
        }
      })
      .catch(() => toast.error(`Ups! Something is wrong :(  Try again later!`));
  }, [query, page]);

  const mapper = array => {
    return array.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const handleOpenModal = modalImg => {
    toggleModal();
    setModalImg(modalImg);
  };

  const handleSearchSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setPictureData('');
    setStatus('idle');
    setModalImg(null);
    setShowModal(false);
    setIsLoadingMore(false);
  };

  const onClickloadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <Searchbar>
        <SearchForm submitForm={handleSearchSubmit} />
      </Searchbar>
      {showModal && <Modal onClose={toggleModal} image={modalImg} />}

      {pictureData.length > 0 && (
        <GalleryImages
          pictureData={pictureData}
          onClick={handleOpenModal}
        ></GalleryImages>
      )}

      <ScrollToTop
        color="black"
        smooth
        width="30"
        height="30"
        style={{
          background: '#088ecc',
        }}
      />

      {status === 'pending' && <Loader />}
      {IsLoadingMore && <Button onClick={onClickloadMore}>Load more</Button>}
      <ToastContainer
        autoClose={1000}
        theme="colored"
        position="bottom-center"
      />
    </div>
  );
}
