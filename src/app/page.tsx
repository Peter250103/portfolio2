import React from "react";
import ParticlesComponent from "./components/Effect";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

const Home: React.FC = () => {
  return (
    <>
      
      <div className="h-screen flex items-center justify-center">
        <ParticlesComponent />
        <Button />
      </div>
    </>
  );
}

export default Home;
