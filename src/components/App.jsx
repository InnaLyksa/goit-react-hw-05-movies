import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar, SearchForm, GalleryImages, Modal, Button } from './index';
import api from './servises/pixabay-api';

import { Loader } from '../components/Loader/Loader';

import ScrollToTop from 'react-scroll-to-top';

export function App() {
  const [imageName, setImageName] = useState('');
  const [modalImg, setModalImg] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [IsLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (!imageName) {
      return;
    }
    setStatus('pending');

    api
      .pixabayApi(imageName, page)
      .then(res => {
        if (res.data.hits.length === 0) {
          toast.error(`There is no "${imageName}" images.`);
          setStatus('idle');
          return;
        }
        setImageData(imageData => [...imageData, ...mapper(res.data.hits)]);
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
  }, [imageName, page]);

  const mapper = array => {
    return array.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
    setModalImg('');
  };

  const handleOpenModal = modalImg => {
    toggleModal();
    setModalImg(modalImg);
  };

  const handleSearchSubmit = searchQuery => {
    if (searchQuery !== imageName) {
      setImageName(searchQuery);
      setPage(1);
      setImageData([]);
      setStatus('idle');
      setModalImg(null);
      setShowModal(false);
      setIsLoadingMore(false);
    } else {
      toast.info('The new search must be different from the current search');
    }
  };

  const onClickloadMore = () => {
    setPage(page => page + 1);
  };

  const resetImageData = () => {
    setImageName('');
    setImageData([]);
    setIsLoadingMore(false);
  };

  return (
    <div>
      <Searchbar>
        <SearchForm
          submitForm={handleSearchSubmit}
          resetImageData={resetImageData}
        />
      </Searchbar>
      {showModal && <Modal onClose={toggleModal} image={modalImg} />}

      {imageData.length > 0 && (
        <GalleryImages
          pictureData={imageData}
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
