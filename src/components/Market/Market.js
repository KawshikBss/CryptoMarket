import React from 'react'
import './market.css'

const Market = ({items}) => {
  return (
    <div className='market-container'>
        <div className='market-header'>
            <h4 className='section-heading'>Trending Bids</h4>
            <span className='section-filters'>
                <span className='filter'>All</span>
                <span className='filter'>Artwork</span>
                <span className='filter'>Book</span>
            </span>
        </div>
    </div>
  )
}

export default Market