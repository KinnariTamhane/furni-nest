import Image from "next/image";
import Banner from './container/BannerSection'
import Header from './container/Header'

export default function Home() {
  return (
    <div className="">
      <main className="">
          <Header/>
          <Banner/>
      </main>

    </div>
  );
}
