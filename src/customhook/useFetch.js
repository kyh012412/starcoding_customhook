import React, { useEffect, useState } from 'react';

const useFetch = (initialData, baseUrl) => {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + '/' + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initialData);
  }, []);

  return { data, fetchUrl };
};

export default useFetch;
