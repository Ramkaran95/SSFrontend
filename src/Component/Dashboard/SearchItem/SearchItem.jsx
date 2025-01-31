// import './SearchItem.css'
// import React from 'react'
// const SearchItem=({ProviderData , UserData})=>{
//     return(
//         <div className='searchItem'>
//         {/* <p>{UserData.userId+JSON.stringify(ProviderData, null, 2)}</p> */}
    
//        <img src={"public/"+ProviderData.profilePhoto} alt="" className="siImg" />
//        <div className="siDesc">
//         <h1 className='siTitle'>{ProviderData.professionType}</h1>
//         <span className='siDistance'>Highly Rated</span>
//         <span className='siFree'>Free consultation for custom woodwork</span>
//         <span className='siSubtitle'>
//             Crafting custom woodwork for your home 
//         </span>
//         <span className='siFeatures'>
//             Custom Furniture * Wooden Structures * Home Renovations
//         </span>
//         <span className='siCancelOp'>Free Cancellation</span>
//         <span className='siCancelOpSubtitle'>You can cancel later,so lock in this great price</span>
//        </div>
//        <div className="siDetails">
//         <div className='siRating'>
//             <span>Excellent</span>
//             <button>8.9</button>

//         </div>
//         <div className='siDetailTexts'>
//             <span className="siPrice">$23</span>
//             <span className="siaxUP">Includes taxes and reviews</span>
//             <button className='siCheckButton'>See Availability </button>
//         </div>
//        </div>
//         </div>
//     )
// }
// export default SearchItem

import { useNavigate } from 'react-router-dom'
import './SearchItem.css'
import React from 'react'
const SearchItem=({ProviderData , UserData})=>{
    const navigate = useNavigate();
    const providerPage=()=>{
        const path="/userDashboard/providerPage"
        localStorage.setItem("ProviderData", JSON.stringify(ProviderData));
    localStorage.setItem("UserId", UserData.userId);
        navigate(path,{state:{UserId:UserData.userId,ProviderDetails:ProviderData}});


    }
    return(
        <div className='searchItem'>
        <p>{UserData.userId+JSON.stringify(ProviderData, null, 2)}</p>
    
       <img src={"/"+ProviderData.profilePhoto} alt="" className="siImg" />
       <div className="siDesc">
        <h1 className='siTitle'>{ProviderData.professionType}</h1>
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
            <button className='siCheckButton' onClick={providerPage} >See Availability </button>
        </div>
       </div>
        </div>
    )
}
export default SearchItem