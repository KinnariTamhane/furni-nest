'use client';


import Banner from './container/BannerSection'
import Header from './container/Header'
import Browse from "./container/BrowseSection";
import Products from './container/ProductSection';
import { useState } from 'react';

// export const CategorySelected = createContext();

export default function Home() {

const [type,setType] = useState('');

const selectedCategory = (category:string) => {
  setType(category)
}

  return (
    <main>
          <Header/>
          <Banner/>
          <Browse callback={selectedCategory}/>
          <Products selectedType={type || ''}/>
    </main>
  )
}
