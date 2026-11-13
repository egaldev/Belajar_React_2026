// contoh props.children
import React from "react";

const TopCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      {props.children}
    </div>
  );
};

const BottomCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {props.children}
    </div>
  );
};

const Parent = () => {
  return (
    <>
      <div>
        <h2>Halo</h2>

        <TopCard>
          <h2>Name tag</h2>
          <h2>Nama: Egal Assegaf</h2>
          <h2>Umur: 20</h2>
          <h2>Alamat: Jakarta</h2>
        </TopCard>

        <BottomCard>
            <h2>Semoga saya menjadi seorang Fullstack Developer</h2>
        </BottomCard>
      </div>
    </>
  );
};


export default Parent;