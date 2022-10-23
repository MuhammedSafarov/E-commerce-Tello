import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {commerce} from '../../../Commerce'

const NavigationMenu = () => {

  const [categories,setCategories] = useState([])


  const getAllCategories=async()=>{
    try {
      const response=await commerce.categories.list({
        sortBy:"created",
        sortDirection:"asc"
      })
      setCategories(response.data)
    } catch (error) {
      return error.message
    }
  }

  useEffect(()=>{
    getAllCategories()
  },[])

  return (
    <>
      <div className="nav-container">
      <div className="navigation">
        <ul className="navigation-sections">
          {categories?.map((el)=>{
            return <Link key={el.id} to={`/products/${el.slug}`} className='link' id={el.name}>
           { el.name}
          </Link>
          })}
        </ul>
      </div>
      </div>
    </>
  );
};

export default NavigationMenu;
