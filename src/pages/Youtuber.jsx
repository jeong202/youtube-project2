import React from 'react'
import { Link } from 'react-router-dom'
import { youtuberText } from '../data/youtuber'

const youtuber = () => {
    return (
        <section id='youtuberPage'>
            <h2>유튜버 모음</h2>
            <div className="youtuber__inner">

                {youtuberText.map((youtuber, key) => (
                    <div className="youtuber play__icon" key={key}>
                        <div className="youtuber__img">
                            <Link to={`/channel/${youtuber.channelId}`}>
                                <img src={youtuber.img} alt={youtuber.author} />
                            </Link>
                        </div>
                        <div className="youtuber__info">
                            {youtuber.author}
                        </div>
                    </div>
                ))}

                {/* <div className="youtuber">
                        <div className="youtuber__img">
                            <img src="https://yt3.googleusercontent.com/ytc/APkrFKbhOfG4WlFyaLytJO46ClElbSyxg1dQPkd-OdobzA=s176-c-k-c0x00ffffff-no-rj" alt="" />
                        </div>
                        <div className="youtuber__info">
                            Emotional Guitarist AZ
                        </div>
                    </div> */}
            </div>
        </section>
    )
}

export default youtuber