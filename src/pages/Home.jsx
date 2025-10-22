import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import useTitle from '../components/hooks/UseTitle';
import ToyCard from '../Layout/ToyCard';
import ThemeSection from '../Layout/ThemeSection';
import SellerSpotlight from '../Layout/SellerSpotlight';



const Home = () => {
    useTitle('Home');
    
    const toysData = useLoaderData()

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const popularToys = toysData.slice(0, 8); 
    const sliderImages = toysData.slice(0, 3).map((toy, index) => ({
    id: toy.toyId,
    url: toy.pictureURL,
    caption: toy.toyName, 
    text: toy.description.length > 80 ? toy.description.substring(0, 80) + '...' : toy.description,
    themeCaption: index === 0 ? "Featured Toy Spotlight" : toy.toyName,
}));

    const SliderSection = () => (
        <section className="h-[40vh] md:h-[70vh] relative overflow-hidden shadow-xl rounded-lg mb-12">
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
                        <div 
                            className="h-full bg-cover bg-center flex items-center justify-start p-10 md:p-20"
                            style={{ backgroundImage: `url(${slide.url})` }} 
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            
                            <div className="relative z-10 text-white max-w-lg text-left">
                                <h2 className="text-4xl md:text-6xl font-black mb-3 leading-tight" data-aos="fade-right">
                                    {slide.caption}
                                </h2>
                                <p className="text-lg md:text-xl font-medium mb-6" data-aos="fade-right" data-aos-delay="200">
                                    {slide.text}
                                </p>
                                <Link to={`/toy/${slide.id}`} className="btn bg-red-600 hover:bg-red-700 text-white border-0 text-lg font-bold shadow-lg" data-aos="fade-right" data-aos-delay="400">
                                    View Featured Toy
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
           
            <div className="container mx-auto p-4 md:p-8">
                <SliderSection />
                <section className="py-16" data-aos="fade-up">
                    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
                        Popular Toys Right Now
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {/* Display the minimum 6 required toys */}
                        {popularToys.map(toy => (
                            <ToyCard key={toy.toyId} toy={toy} />
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                         <Link to="/all-toys" className="btn bg-red-500 hover:bg-red-600 text-white border-0 text-lg font-bold shadow-xl">
                            View All Toys
                        </Link>
                    </div>
                </section>
                
                <ThemeSection />

                <SellerSpotlight />
                
            </div>
        </div>
    );
};

export default Home;    