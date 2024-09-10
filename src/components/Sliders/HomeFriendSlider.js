'use client';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode } from 'swiper/modules';
import AddFriendCard from '../cards/AddFirend/AddFriendCard';

const HomeFriendSlider = ({ friendsSuggestions }) => {
    const [removeId, setRemoveId] = useState(null)
    const [friends, setFriends] = useState();

    useEffect(() => {
        if (friendsSuggestions?.length > 0) {
            setFriends(friendsSuggestions)
        }
    }, [friendsSuggestions])

    const handleRemoveFromUI = (userId) => {
        if (friends?.length > 0) {
            setFriends(prev => [...prev]?.filter(x => x._id != userId))
        }
    }
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}

            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                360: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                556: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },

            }}
        >
            {
                friends?.map((user, idx) => <SwiperSlide key={user?._id}>
                    <AddFriendCard key={user?._id} user={user} handleRemoveFromUI={handleRemoveFromUI} />
                </SwiperSlide>)
            }

        </Swiper>
    )
}

export default HomeFriendSlider