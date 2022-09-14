import { Box, Grid, Paper } from "@mui/material";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const RandomImages = () => {
  const [randomImages, setRandomImages] = useState([]);
  console.log(randomImages);
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random/50")
      .then((res) => setRandomImages(res.data.message));
  }, []);
  return (
    <>
      <Navbar />
      {/* <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs=4</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper>xs=8</Paper>
        </Grid>
      </Grid> */}
      {/* <Grid container spacing={4}>
        <Grid item xs={4}>
          {randomImages.map((e) => {
            return (
              <Paper>
                <img src={e} alt="" />
              </Paper>
            );
          })}
        </Grid>
      </Grid> */}
      {/* <Grid
        item
        xs={4}
        sx={{
          display: "grid",
            gridAutoFlow: "row",
          gridTemplateColumns: "repeat(4, 10fr)",
          gap: 3,
        }}
      >
        {randomImages.map((e) => {
          return (
            <Paper>
              <img width={"100%"} src={e} alt="" />
            </Paper>
          );
        })}
      </Grid> */}
      <div className="randomContainer">
        {randomImages.map((e) => {
          return (
            <>
              <img src={e} alt="" />
            </>
          );
        })}
      </div>
    </>
  );
};

export default RandomImages;
