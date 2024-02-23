import './ElementsHomePage.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { Image, Text } from '@chakra-ui/react';
export default function ElementsHomePage () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ToKnowTheCityImages = [
        "https://cdn-imgix.headout.com/microbrands-content-image/image/f9f98c000d2b02dd4c5cc8837389b8f1-AdobeStock_164147478.jpeg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces",
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Museu_Calouste_Gulbenkian_%28Main_Entrance%29.jpg",
        "https://convida.pt/images/POIs/CasteloSaoJorge_01.jpg",
        "https://static.wixstatic.com/media/33ef3f_cd12727c4c5d4b97af3ea68d4893f066~mv2.jpg/v1/fill/w_640,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/33ef3f_cd12727c4c5d4b97af3ea68d4893f066~mv2.jpg",
        "https://lisbonlisboaportugal.com/images/og-images/lisbon-og-tram.jpg",
    ];
    const toHaveFunImages = [
        "https://convida.pt/images/POIs/LuxFragil_01.jpg",
        "https://goop-img.com/wp-content/uploads/2017/04/ParkBar4.jpg",
        "https://www.viajenaviagem.com/wp-content/uploads/2018/08/lisboa-mercado-ribeira-1.jpg",
        "https://offloadmedia.feverup.com/lisboasecreta.co/wp-content/uploads/2020/08/19150200/%40lostin.lisbon-3.jpg",
        "https://goop-img.com/wp-content/uploads/2017/05/Decadante1.jpg"
    ];
    const toMoveYourBodyImages = [
        "https://hare-media-cdn.tripadvisor.com/media/photo-m/1280/22/1c/d1/71/rock-climbing-in-cascais.jpg",
        "https://visitmadeira.com/media/cymljwla/ribeira-da-camisa-po%C3%A7o-das-pulgas-luis-freitas.jpg?cc=0.3577146931291987,0,0.3258790568708014,0&width=1080&height=1920&rnd=133277523841030000",
        "https://images.squarespace-cdn.com/content/v1/5d31ed671abe780001b2964d/1629246128458-UOWBI7EKRAQ7ZMDOHI79/DW_TheBreathSequence-4.jpg",
        "https://cdn.onefc.com/wp-content/uploads/2017/01/Bruno-Pucci-AO1U9575.jpg",
        "https://origympersonaltrainercourses.co.uk/files/img_cache/31854/1920_1662117740_fungroupfitnessideas.jpeg?1662117927"
    ]
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % ToKnowTheCityImages.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [ToKnowTheCityImages.length]);
    return (
        <div className="ElementsHomePage">
            <div className='ToKnowTheCity'>
                <Link to={"/places-to-know"}><Text fontSize="30px" mb="30px">To Know the City</Text></Link>
                <Image h="300px"maxW="400px" borderRadius="40px" src={ToKnowTheCityImages[currentIndex]} alt={`Image ${currentIndex}`} />
            </div>
            <div className='ToHaveFun'>
                <Link to={"/places-to-have"}><Text fontSize="30px" mb="30px">To Have Fun</Text></Link>
                <Image h="300px"maxW="400px" borderRadius="40px" src={toHaveFunImages[currentIndex]} alt={`Image ${currentIndex}`} />
            </div>
            <div className='ToMoveYourBody'>
                <Link to={"/places-to-move"}><Text fontSize="30px" mb="30px">To Move Your Body</Text></Link>
                <Image h="300px"maxW="400px" borderRadius="40px" src={toMoveYourBodyImages[currentIndex]} alt={`Image ${currentIndex}`} />
            </div>
        </div>
    )
}