import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import "./Services.css";
import ServiceCard from "../Layout/ServiceCard";
import { servicesList } from "../../utils/serviceList";
import HomeContact from "../Layout/HomeContact";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      <PageTop title={"Services"} />
      <div className="serviceswrapper">
        <span className="subhead">our services</span>
        <span className="mainhead">what we offer</span>
        <span className="desc">
          Discover a wide range of services designed to meet your needs
        </span>
      </div>
      <div className="serviceLists">
        {servicesList.map((list, index) => (
          <Link to={"/services/" + list.ServiceName} key={index}>
            <ServiceCard serviceName={list.ServiceName} image={list.Image} />
          </Link>
        ))}
      </div>
      <HomeContact />
    </Layout>
  );
};

export default Services;
