import './SearchItem.css'
import React from 'react'
const SearchItem=()=>{
    return(
        <div className='searchItem'>
       <img src="./carpenter.png" alt="" className="siImg" />
       <div className="siDesc">
        <h1 className='siTitle'>Carpenter</h1>
        <span className='siDistance'>Highly Rated</span>
        <span className='siFree'>Free consultation for custom woodwork</span>
        <span className='siSubtitle'>
            Crafting custom woodwork for your home 
        </span>
        <span className='siFeatures'>
            Custom Furniture * Wooden Structures * Home Renovations
        </span>
        <span className='siCancelOp'>Free Cancellation</span>
        <span className='siCancelOpSubtitle'>You can cancel later,so lock in this great price</span>
       </div>
       <div className="siDetails">
        <div className='siRating'>
            <span>Excellent</span>
            <button>8.9</button>

        </div>
        <div className='siDetailTexts'>
            <span className="siPrice">$23</span>
            <span className="siaxUP">Includes taxes and reviews</span>
            <button className='siCheckButton'>See Availability </button>
        </div>
       </div>
        </div>
    )
}
export default SearchItem