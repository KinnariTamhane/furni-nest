"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function ProductSection() {

  type Product = {
    category: string;
    description: string;
    image: string;
    name: string;
    price: string;
    product_id: string;
    rating: string;
    stock: string;
  };
  
  type ProductList = Product[];

  const [data, setData] = useState<ProductList>([]);

  const filteredData = data.filter((_item, index) => index < 46);



  useEffect(()=>{
      fetch('http://localhost:5001/products')
      .then((response)=>response.json())
      .then((result)=>setData(result))
      .catch((e)=>console.log('error',e))
  },[])

  return (
    <div>
        <h2 className='text-3xl mt-10 text-center mb-10'>Our Products</h2>
          {
            data &&
            <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 block mx-10'>
             {
               filteredData.length > 0 && filteredData.map((item,index) =>{
                return(
                  <div key={index} className='mr-5 mb-8 border border-white px-4 py-3 rounded'>
                    <Image
                      src={`/${item.image+'.png'}`}
                      className='object-cover mb-5'
                      width={300}
                      height={100}
                      alt={item.image}
                    />
                    <p className='text-xl inline-block'>{item.name}</p>
                    <p className='text-md inline-block float-right pr-5'> <span className='text-yellow-400'>&#9733;</span> {item.rating} / 5</p>
                    <p className='text-md mt-3 '>₹ {item.price}</p>
  
                  </div>
                  )
               })
             }
            </div>
          }
    </div>
  )
}

export default ProductSection