import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import Main from '../components/section/Main';


const Video = () => {

    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
                console.log(data);
            });
    }, [videoId]);


    return (
        <Main
            title="영상 페이지"
            description="기타 유튜버 영상을 볼 수 있습니다"
        >
            <section id='videoPage'>

                {videoDetail && (
                    <div className="video__view">
                        <div className="video__play">
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100%'
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        {/* video__play */}

                        <div className="video__info">
                            <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                        </div>
                        {/* video__info */}

                        <div className='video__channel'>
                            <div className='id'>
                                <Link className='link' to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                            </div>
                            {/* id */}

                            <div className='count'>
                                <span className='view'>🎥 {videoDetail.statistics.viewCount}</span>
                                <span className='like'>😍 {videoDetail.statistics.likeCount}</span>
                                <span className='comment'>📝 {videoDetail.statistics.commentCount}</span>
                            </div>
                            {/* count */}

                        </div>
                        {/* video__channel */}

                        <div className='video__desc'>
                            {videoDetail.snippet.description}
                        </div>
                        {/* video__desc */}
                    </div>
                )}

            </section>
        </Main>

    )
}

export default Video