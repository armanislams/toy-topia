import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import useTitle from '../components/hooks/UseTitle';
import ToyCard from '../Layout/ToyCard';
import ThemeSection from '../Layout/ThemeSection';
import SellerSpotlight from '../Layout/SellerSpotlight';
import TestimonialCard from '../Layout/TestimonialCard';
import TopBrands from '../components/TopBrands';



const Home = () => {
    useTitle('Home');
    
    const toysData = useLoaderData()
    const testimonials = toysData.flatMap(toys => toys.testimonials)
    console.log(testimonials);
    

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const popularToys = toysData.slice(0, 8); 
    const sliderImages = toysData.slice(0, 4).map((toy, index) => ({
    id: toy.toyId,
    url: toy.pictureURL,
    caption: toy.toyName, 
    text: toy.description.length > 80 ? toy.description.substring(0, 80) + '...' : toy.description,
    themeCaption: index === 0 ? "Featured Toy Spotlight" : toy.toyName,
}));

    const SliderSection = () => (
        <section className="h-[30vh] md:h-[60vh] relative overflow-hidden shadow-xl rounded-lg mb-8">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
            >
                {sliderImages.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="h-full bg-center flex md:gap-10 items-center justify-between p-10 md:p-20"
                            >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            
                            <div className="relative z-10 text-white max-w-lg text-left">
                                <h2 className="text-3xl md:text-6xl font-black mb-3 leading-tight" data-aos="fade-right">
                                    {slide.caption}
                                </h2>
                                <p className="text-lg md:text-xl hidden md:block font-medium mb-6" data-aos="fade-right" data-aos-delay="200">
                                    {slide.text}
                                </p>
                                <Link to={`/toy/${slide.id}`} className="btn bg-red-600 hover:bg-red-700 text-white border-0 md:text-lg font-bold shadow-lg" data-aos="fade-right" data-aos-delay="400">
                                    View Featured Toy
                                </Link>
                            </div>
                            <div>
                                <img className='w-50 md:w-80' src={slide.url} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );

    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-4 px-5 md:p-8">
          <SliderSection />
          <section className="py-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
              Popular Toys Right Now
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {popularToys.map((toy) => (
                <ToyCard key={toy.toyId} toy={toy} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/all-toys"
                className="btn bg-red-500 hover:bg-red-600 text-white border-0 text-lg font-bold shadow-xl"
              >
                View All Toys
              </Link>
            </div>
          </section>

          <ThemeSection />

          <SellerSpotlight />

          <div className="pb-12">
            <h1 className="text-2xl font-bold text-gray-800 text-center py-5">Customer Testimonials</h1>
            <Swiper
              effect={"coverflow"}
              loop={true}
              autoplay={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"3"}
              coverflowEffect={{
                rotate: 30,
                stretch: "50%",
                depth: 200,
                scale: 0.75,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard t={t}></TestimonialCard>
                </SwiperSlide>
              ))}
            </Swiper>
                </div>
                <TopBrands/>
        </div>
      </div>
    );
};

export default Home;    