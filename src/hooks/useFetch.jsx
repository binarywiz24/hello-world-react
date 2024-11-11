import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading('loading...');
    setData(null);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        if (res.data) {
          setData(res.data);
        } else {
          setError('Data not loaded');
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError('An error occurred. Awkward..');
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
