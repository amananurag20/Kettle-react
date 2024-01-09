import React, { useEffect, useState } from 'react';
import ItemCard from "./ItemCard";
import Shimmer from './Shimmer';
import Footer from './Footer';



const BestSellers = () => {
      
    const [bestSellers, setBestSellers]= useState([]);
    const [filteredSellers, setFilteredSellers]= useState([])
    const [searchText, setSearchText]= useState("")

    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData= async()=>{
        const data= await fetch("https://fakestoreapi.com/products");
        const json= await data.json();

        setBestSellers(json);
        setFilteredSellers(json);
    }


  return bestSellers.length === 0 ? (<Shimmer/>):(        
       <div>
        <div className='flex'>
            <div className='m-4 p-3'>
                <input type='text' className='border border-solid border-black' value={searchText}
                onChange={(e)=> {
                    setSearchText(e.target.value)
                }}></input>

                <button className='px-2 ml-2 py-1 bg-yellow-600 rounded-lg' onClick={()=>{

                    const filterSeller= bestSellers.filter((item)=>
                        item.title.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredSellers(filterSeller);
                }}>Search</button>
            </div>

            <div className='m-4 p-3 '>
                <button className='px-4 py-2 bg-yellow-500 rounded-lg' onClick={()=>{
                    const filterItem= bestSellers.filter(item=>(item.rating.rate > 4))
                    setFilteredSellers(filterItem);
                }}>Top rated item</button>
            </div>
        </div>
       
    <div className='flex flex-wrap justify-around bg-pink-200'>

        {filteredSellers.map(item =>(                         
            <ItemCard itemData={item} key={item.id}/> )
        ) }      
    </div>
    <Footer/>
    </div>
    
  )
}

export default BestSellers