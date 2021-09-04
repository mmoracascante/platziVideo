import { useState, useEffect } from 'react';

const useInitialState = () => {
  const [videos, setVideos] = useState({
    myList: [], trends: [], originals: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
