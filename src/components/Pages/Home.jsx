import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeContact from "../Layout/HomeContact";
import HomeWork from "../Layout/HomeWork";
import HomeServices from "../Layout/HomeServices";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeServices/>
      <HomeWork />
      <HomeContact />
    </Layout>
  );
};

export default Home;
