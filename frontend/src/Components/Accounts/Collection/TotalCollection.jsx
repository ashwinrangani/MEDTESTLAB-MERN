import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TotalCollection = ({ input }) => {
  const [totalCollection, setTotalCollection] = useState(0);

  useEffect(() => {
    getTotalCollection();

    async function getTotalCollection() {
      try {
        const response = await axios.get('http://localhost:4000/total-collection');
        const { total } = response.data;
        setTotalCollection(total);
      } catch (error) {
        console.error(error);
      }
    }
  }, [input]);

  return (
    <div className='mt-3 ml-2'>
      <h1>Total Collection: {totalCollection}</h1>
    </div>
  );
};

export default TotalCollection;
