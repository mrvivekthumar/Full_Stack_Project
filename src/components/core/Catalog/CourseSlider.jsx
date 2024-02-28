import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

import CourseCard from './CourseCard'

const CourseSlider = ({ Courses }) => {
    return (
        <>
            {Courses?.length ? (
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={25}
                    // freeMode={true}
                    pagination={true}
                    loop={true}
                    modules={[FreeMode, Pagination, Autoplay]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="max-h-[30rem] mx-auto"
                >
                    {Courses?.map((course, i) => (
                        <SwiperSlide key={i}>
                            <CourseCard course={course} Height={"h-[230px]  md:h-[250px]"} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p className="text-xl text-richblack-5">No Course Found</p>
            )}
        </>
    )
}

export default CourseSlider
