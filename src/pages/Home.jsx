import React from 'react'

const Home = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb">

                </div>
                <div className="today__text">
                    <span className='today'>오늘의 영상!</span>
                    <h3 className='title'>Nella Fantasia (Gabriel's Oboe) / Singing Guitar by AZ</h3>
                    <p className='desc'>
                        Emotional Guitarist AZ는 기타리스트입니다.
                        일본 기타리스트 팀 G.O.D. 멤버입니다.
                    </p>
                    <div className="info">
                        <div className="author">
                            Emotional Guitarist AZ
                        </div>
                        <div className="date">
                            2022.12.25
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Home