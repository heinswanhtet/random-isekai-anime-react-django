import React from 'react'

const Result = (props) => {
    const { title, url, image_url, synopsis } = props

    return (
        <>
            <img src={image_url} alt={title} className='result-image' />
            <h2 className='title'><a href={url}>{title.toUpperCase()}</a></h2>
            {/* <p>{synopsis}</p> */}
            <div className="color-box2"></div>
        </>
    )
}

export default Result