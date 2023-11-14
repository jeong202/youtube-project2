import React from 'react'
import { todayText } from '../../data/today'

const Today = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb">
                </div>
                <div className="today__text">
                    <span className='today'>오늘의 영상!</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>
                        {todayText[0].desc}
                    </p>
                    <div className="info">
                        <div className="author">
                            {todayText[0].author}
                        </div>
                        <div className="date">
                            {todayText[0].date}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today