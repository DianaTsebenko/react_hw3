import React, { Component } from 'react';
import './styles.css';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import axios from 'axios';

const API_KEY = '44796610-199f31a4ab0c11e14848311c2';

class ImageSearch extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  // Пошук за запитом
  handleSearch = query => {
    this.setState({ query, images: [], page: 1 });
  };

  // Завантаження більше зображень
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // Запит до Pixabay
  fetchImages = async () => {
    const { query, page } = this.state;
    const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    this.setState({ isLoading: true });

    try {
      const response = await axios.get(URL);
      const newImages = response.data.hits.map(
        ({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        })
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
      }));
    } catch (error) {
      console.error('Axios error:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Відкриття великого зображення
  openModal = imageUrl => {
    this.setState({ showModal: true, modalImage: imageUrl });
  };

  // Закриття модального вікна
  closeModal = () => {
    this.setState({ showModal: false, modalImage: null });
  };

  render() {
    const { images, isLoading, showModal, modalImage } = this.state;

    return (
      <div className="searchImages">
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.loadMore} />}
        {showModal && <Modal imageUrl={modalImage} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default ImageSearch;
