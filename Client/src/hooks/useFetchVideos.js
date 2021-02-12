import { useState, useEffect } from 'react';
import axios from 'axios';
import {youtube_key} from '../keys';

const useFetchVideos = (keyword, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keyword}&${nextPageToken && `pageToken=${nextPageToken}`}&key=${youtube_key}`
      )
      .then((res) => {
        setData(prevVideos => {
          return [...prevVideos, ...res.data.items]
        });
        setNextPageToken(res.data.nextPageToken)
      })
      .catch((error) => {
        setError(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, token]);
  return { data, error, nextPageToken };
};

export default useFetchVideos;