import React, { useEffect, useState } from 'react'

import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider'

import { fetchFromAPI } from '../utils/api'


const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = "UCNroQMUbFjMUVvhY-Fcjlkw"
        const v2 = "UCTdMmswUit6aZ9yp-JyDezQ";
        const v3 = "UCY8X9tLD1xyKMfBpEDCVAKQ";
        const v4 = "UCDJXyjBhdL3H8527gyxMaEw";
        const v5 = "UCcjPm1u-7Lmvrfy1thcXvEA";

        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videosData.items);

                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videosData2.items);

                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videosData3.items);

                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videosData4.items);

                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videosData5.items);

            } catch (error) {
                console.log('Eroor fetching data', error)
            }
        }
        fetchResults();
    }, [])
    return (
        <Main
            title="기타 유튜버"
            description="기타 유튜버 모음 사이트에 오신것을 환영합니다"
        >
            <Today />
            <Youtuber />

            <VideoSlider videos={channelVideo} title='Emotional Guitarist AZ 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo2} title='펀투 (funtwo) 최신 영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='😘 Neil Zaza 최신 영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='cho pilsung Awesome Show TV 최신 영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='KYUHEE PARK 최신 영상' name='v5' />
        </Main>



    )
}

export default Home