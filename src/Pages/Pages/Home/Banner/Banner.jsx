
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import HomeBannerContent from "../../../../Components/HomeBannerContent/HomeBannerContent";

const Banner = () => {
  return (
    <div className=" bgBannerImg">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <HomeBannerContent
              cStyle="btn-sm"
              bgImg={`https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/language-learning-1200x675.jpg?h=c74750f6&itok=vmcKnhmg`}
              title={`Every student matters, every moment counts.`}
              subTitle={`LANGUAGE MASTER`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>

          <SwiperSlide>
            <HomeBannerContent
            bgImg={`https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/language-learning-1200x675.jpg?h=c74750f6&itok=vmcKnhmg`}
              cStyle="btn-sm"
              title={`
              Teaching Turning
              Today's Learners Into
              Tomorrow's Leaders`}
              subTitle={`LANGUAGE MASTER`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>

          <SwiperSlide>
            <HomeBannerContent
              cStyle="btn-sm"
              title={`
              To have another language is to possess a second soul.`}
              subTitle={`LANGUAGE MASTER`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>

          <SwiperSlide>
            <HomeBannerContent
              cStyle="btn-sm"
              title={`
              Putting Children First. Preparing Children For Success In Life`}
              subTitle={`LANGUAGE MASTER`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
