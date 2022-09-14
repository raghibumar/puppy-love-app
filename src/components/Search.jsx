import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Search = () => {
  const nav = useNavigate();
  const [dis, setDis] = useState(false);

  const [searchItem, setSearchItem] = useState("");
  // console.log(searchItem)

  // const { breedName } = useParams();
  // console.log(breedName)

  // useEffect(()=>{
  //     axios.get(`https:dog.ceo/api/breed/{breedname}/`)
  // },[])

  const handleSearch = () => {
    // if (searchItem.length <= 1) {
    //   setDis(true);
    // } else {
    //   setDis(false);
    //   nav(`/puppy/${searchItem}`);
    // }
    nav(`/puppy/${searchItem}`);
  };

  return (
    <>
      <Navbar />
      <div className="search">
        <input
          type="text"
          placeholder="Enter breed to search"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button onClick={handleSearch} disabled={dis}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
