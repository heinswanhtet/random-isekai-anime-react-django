import Result from './Result';
import { useState } from 'react';

import arrowIcon from '../assets/arrow.png'
import catGirlImg from '../assets/cat.png'
import slimeImg from '../assets/slime.png'


const api_url = 'http://127.0.0.1:8000/'

const IsekaiRandom = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isekai, setIsekai] = useState(null)

    const generateIsekaiRandom = () => {
        setIsLoading(true)
        fetchIsekai()
    }

    const fetchIsekai = async () => {
        try {
            const response = await fetch(api_url)
            const data = await response.json()

            // console.log(data)

            setIsekai(data)
        }
        catch (error) {
            setIsError(true)
            console.log(error);
        }
        setIsLoading(false)
    }

    return <div className="row">
        <div className="col-1">
            <h2><span style={{ color: 'rgb(53, 212, 212)' }}>Isekai</span><br />Random</h2>
            <h3>Can't decide which isekai anime to watch?</h3>
            <p>Then this website can help you by generating a random isekai anime!</p>
            {!isLoading ?
                <button type="button" onClick={generateIsekaiRandom}>Generate<img src={arrowIcon} alt="" /></button>
                :
                <button type="button" disabled='true' className='button-disabled'>Generate</button>
            }
        </div>

        <div className="col-2">
            {!isLoading && !isError && !isekai &&
                <>
                    <img src={catGirlImg} alt="" className="catgirl" />
                    <div className="color-box"></div>
                </>}
            {isLoading &&
                <div className='loader-container'>
                    {/* <div className="loader"></div> */}
                    <img src={slimeImg} alt="logo" className='logo2 gelatine2' />
                </div>
            }
            {isError && !isLoading &&
                <div className='loader-container'>
                    <h1>Something went wrong!</h1>
                </div>
            }
            {isekai && !isLoading && <Result {...isekai} />}

        </div>
    </div >

    // return <>
    //     {isekai.map(page => page.map(anime => {
    //         return <Result {...anime} key={anime.id} />
    //     }))}
    // </>
};
export default IsekaiRandom;
