import { SlFire } from 'react-icons/sl'
import { SlLike } from 'react-icons/sl'
import { SiGithub } from 'react-icons/si'
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiSpotify } from "react-icons/si";
import { BiHome } from "react-icons/bi";


export const menuText = [
    {
        title: "홈",
        icon: <BiHome />,
        src: "/"
    },
    {
        title: "오늘의 추천 영상",
        icon: <SlFire />,
        src: "/today"
    },
    {
        title: "유명 유튜버",
        icon: <SlLike />,
        src: "/youtuber"
    }
]

export const keywordText = [
    {
        title: "기타리스트노경환TV",
        src: "/search/기타리스트노경환TV"
    },
    {
        title: "박창곤 - GONI TV",
        src: "/search/박창곤 - GONI TV"
    },
    {
        title: "cho pilsung Awesome Show TV",
        src: "/search/cho pilsung Awesome Show TV"
    },
    {
        title: "Emotional Guitarist AZ",
        src: "/search/Emotional Guitarist AZ"
    },
    {
        title: "임선호",
        src: "/search/임선호"
    },
    {
        title: "HaeChan Park",
        src: "/search/HaeChan Park"
    }
]
export const snsText = [
    {
        title: "github",
        src: "https://github.com/",
        icon: <SiGithub />
    },
    {
        title: "youtube",
        src: "https://github.com/",
        icon: <SiYoutube />
    },
    {
        title: "github",
        src: "https://github.com/",
        icon: <SiInstagram />
    },
    {
        title: "github",
        src: "https://github.com/",
        icon: <SiSpotify />
    }
]