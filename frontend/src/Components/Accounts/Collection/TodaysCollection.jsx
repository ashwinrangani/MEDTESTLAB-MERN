import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TodaysCollection = ({ input }) => {

    const [date, setDate] = useState('');
    const [todayTotal, setTodayTotal] = useState(0);

    useEffect(() => {
        const today = new Date().toLocaleDateString('en-IN', {day: '2-digit', month: '2-digit', year: 'numeric'})
        setDate(today);
        

    const getTodaysCollection = async () => {
    
        try {
        const response = await axios.get('http://localhost:4000/todays-collection');
        const { todaysTotal } = response.data
        setTodayTotal(todaysTotal);
        
        } catch (error) {
        console.error(error)
       
        }
        
}
getTodaysCollection();
    },[input])

    

  return (
    <div className='mt-3 ml-2'>
        <h1>Current Date: {date} <span className='md:ml-3'>Today's Collection: {todayTotal}</span> </h1> 
       
    </div>
  )
}

export default TodaysCollection;