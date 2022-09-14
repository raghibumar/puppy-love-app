import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Puppy = () => {
    const nav = useNavigate()
  const [breedImages, setBreedImages] = useState([]);
  console.log(breedImages);

  const { itemName } = useParams();
  // console.log(itemName)

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${itemName}/images`)
      .then((res) => setBreedImages(res.data.message))
      .catch((error) => {
        alert("Breed Not Found");
        nav("/search");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="breedNameDiv">{itemName}</div>
      <div className="breedImgDiv">
        {breedImages.map((e) => {
          return (
            <div>
              <img src={e} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Puppy;
