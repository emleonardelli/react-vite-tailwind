import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
  const [items, setItems] = useState(null);
  const getProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const resJson = await res.json();
    setItems(resJson);
  };
  useEffect(()=>{
    getProducts();
  },[]);
  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items && items.map(item => (
          <Card item={item}/>
        ))}
      </div>
    </Layout>
  )
}

export default Home