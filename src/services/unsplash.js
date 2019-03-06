const searchPhotos = fetch(
  `https://api.unsplash.com/search/photos?query=${searchTerm}`,
  {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
    }
  }
);

export default searchPhotos;
