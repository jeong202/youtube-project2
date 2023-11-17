import React from 'react';
import { Link } from 'react-router-dom';

const VideoSearchs = ({ videos, layout }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <>
            {videos.map((video, key) => (
                <div className={`video ${layout}`} key={key}>
                    <div className="video__thumb play__icon">
                        <Link
                            to={`/video/${video.id.videoId}`}
                            style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
                        >
                        </Link>
                    </div>
                    <div className="video__info">
                        <h3 className='title'>
                            <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                        </h3>
                        <p className='desc'>
                            {video.snippet.description}
                        </p>
                        <div className='info'>
                            {layout !== 'channel' && (
                                <Link to={`/channel/${video.snippet.channelId}`} className='author'>{video.snippet.channelTitle}</Link>
                            )}
                            <span className='date'>{formatDate(video.snippet.publishedAt)}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default VideoSearchs;