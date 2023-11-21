import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import Main from '../components/section/Main';
import VideoSearchs from '../components/video/VideoSearchs';

const Channels = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true)
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
            } catch (error) {
                console.log("Eroor -> ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelId])

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="기타 유튜버 채널"
            description="기타 유튜버 채널 페이지 입니다. 키타 유튜버의 영상을 모두 확인할 수 있습니다"
        >
            <section id='channelPage' className={channelPageClass}>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className='channel__info'>
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span>구독자 {channelDetail.statistics.subscriberCount}</span>
                                <span>동영상 {channelDetail.statistics.videoCount}</span>
                                <span>조회수 {channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                        <div className="channel__video video__inner search">
                            <VideoSearchs videos={channelVideo} layout="channel" />
                        </div>
                        <div className="channel__more">
                            {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Channels

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { fetchFromAPI } from '../utils/api';
// import VideSearch from '../components/video/VideoSearchs'
// import Main from '../components/section/Main'

// const Channels = () => {
//     const { channelId } = useParams();
//     const [channelDetail, setChannelDetail] = useState();
//     const [channelVideo, setChannelVideo] = useState([]);
//     const [nextPageToken, setNextPageToken] = useState(null);

//     useEffect(() => {
//         const fetchResults = async () => {
//             try {
//                 const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
//                 setChannelDetail(data.items[0]);

//                 const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
//                 setChannelVideo(videosData.items);

//             } catch (error) {
//                 console.log('Eroor -> ', error)
//             }
//         }
//         fetchResults();
//     }, [channelId])

//     const loadMoreVideos = async () => {
//         if (nextPageToken) {
//             const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
//             setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
//             setNextPageToken(videosData?.nextPageToken);
//         }
//     }

//     return (
//         <Main
//             title="기타 유튜버 채널"
//             description="기타 유튜버 채널 페이지 입니다. 키타 유튜버의 영상을 모두 확인할 수 있습니다"
//         >
//             <section id="channelPage">
//                 {channelDetail && (
//                     <div className="channel__inner">
//                         <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
//                             <div className='circle'>
//                                 <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
//                             </div>
//                         </div>
//                         {/* channel__header */}

//                         <div className='channel__info'>
//                             <h3 className='title'>{channelDetail.snippet.title}</h3>
//                             <p className='desc'>
//                                 <pre>{channelDetail.snippet.description}/</pre>
//                             </p>
//                             <div className='info'>
//                                 <span>구독자 {channelDetail.statistics.subscriberCount}</span>
//                                 <span>동영상 {channelDetail.statistics.videoCount}</span>
//                                 <span>조회수 {channelDetail.statistics.viewCount}</span>
//                             </div>
//                         </div>
//                         {/* channel__info */}

//                         <div className='channel__video video__inner'>
//                             <VideSearch videos={channelVideo} layout="channel" />
//                         </div>
//                         <div className="channel__more">
//                             {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
//                         </div>
//                     </div>
//                 )}
//             </section >
//         </Main>
//     )
// }

// export default Channels