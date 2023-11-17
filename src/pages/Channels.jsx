import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideSearch from '../components/video/VideoSearchs'

const Channels = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);


    // const [loading, setLoading] = useState(true);
    // const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                setChannelVideo(videosData.items);

            } catch (error) {
                console.log('Eroor -> ', error)
            }
        }
        fetchResults();
    }, [channelId])

    return (
        < section id="channelPage" >
            {channelDetail && (
                <div className="channel__inner">
                    <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    {/* channel__header */}

                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>
                            <pre>{channelDetail.snippet.description}/</pre>
                        </p>
                        <div className='info'>
                            <span>구독자 {channelDetail.statistics.subscriberCount}</span>
                            <span>동영상 {channelDetail.statistics.videoCount}</span>
                            <span>조회수 {channelDetail.statistics.viewCount}</span>
                        </div>
                    </div>
                    {/* channel__info */}

                    <div className='channel__video video__inner'>
                        <VideSearch videos={channelVideo} layout="channel" />
                    </div>
                    <div className="channel__more"></div>
                </div>
            )}
        </section >
    )
}

export default Channels