import Image from "next/image";
import Banner from './container/BannerSection'
import Header from './container/Header'
import Browse from "./container/BrowseSection";
import Products from './container/ProductSection'

export default function Home() {
  return (
    <div className="">
      <main className="">
          <Header/>
          <Banner/>
          <Browse/>
          <Products/>
      </main>

    </div>
  );
}
