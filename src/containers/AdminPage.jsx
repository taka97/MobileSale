import React from "react";
import SliderBar from "../components/AdminPage/SliderBar";
import TablePersonnel from "../components/AdminPage/TableDetail";
import Detail from "../components/AdminPage/Detail";

const AdminPage = () => {
  return (
    <div>
      <div className="sliderbar-box">
        <SliderBar></SliderBar>
      </div>
      <div className="table-detail-box">
        <TablePersonnel></TablePersonnel>
      </div>
      <div className="table-detail-box">
        <Detail></Detail>
      </div>
    </div>
  );
};

export default AdminPage;
