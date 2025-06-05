import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import styles from "./layout.module.css";
import '../../App.css';
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";


const Layout = () => {


  const buttons = [
    {type:"nav", label: "Oferta", link: "/offer"},
    {type:"nav", label: "Blog", link: "/blog"},
    {type:"nav", label: "Własny deser", link: "/ownDesert"},
    {type:"nav", label: "O nas", link: "/aboutUs"},
  ];

  return (
        <div className={styles.container}>
            <div className={styles.layoutContainer}>
            <div className={styles.layoutContentContainer}>
                <Link to="/home">
                    <img src="../assets/logo/logo.png" className={styles.logo}/>
                </Link>
                <nav className={styles.buttonsContainer}>
                
                    {buttons.map((button) => (
                    <Button 
                        type={button.type}
                        label={button.label}
                        routePath={button.link}
                    />
                    ))}
                </nav>
                </div>
            </div>
            <div className={styles.content}>
                <Outlet />
          </div>

          <div>
            <Footer/>
          </div>
      
        </div>
  );
};

export default Layout;