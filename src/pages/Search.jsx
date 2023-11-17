import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import VideoSearchs from '../components/video/VideoSearchs';
import { fetchFromAPI } from '../utils/api';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items])
                console.log(data)
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            })
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }
    return (
        <section id='searchPage'>
            <h2>🎸 {searchId} 🎵</h2>

            <div className='video__inner'>
                <VideoSearchs videos={videos} />
            </div>
            <div className="video__more">
                <button onClick={handleLoadMore}>더 보기</button>
            </div>

        </section>
    )
}

export default Search