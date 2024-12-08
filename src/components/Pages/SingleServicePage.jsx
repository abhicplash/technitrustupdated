import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import { useParams } from "react-router-dom";
import { allServices } from "../../utils/AllServiceDetails";
import "./SingleServicePage.css";
import HomeContact from "../Layout/HomeContact";

const SingleServicePage = () => {
  const { ServiceName } = useParams();
  return (
    <Layout>
      <PageTop title={ServiceName} />
      <div className="SingleServicePageContainer">
        <h1 className="technitrust">Techni Trust</h1>
        {allServices
          .filter((item) => item.serviceName === ServiceName)
          .map((service) => (
            <div key={service.id}>
              <h1>{service.serviceName}</h1>
              <div className="ServicesCollectionWrapper">
                {service.items.map((list) => (
                  <div
                    className="HomeserviceCard-container"
                    key={list.serviceId}
                  >
                    <img className="servicecardImg" src={list.image} alt="" />
                    <div className="ServiceCardInfowrapper">
                      <span className="serviceCardName">{list.services}</span>
                      <br />
                      <span className="serviceCardPara">{list.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <HomeContact />
    </Layout>
  );
};

export default SingleServicePage;
