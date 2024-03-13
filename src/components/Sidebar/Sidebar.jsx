import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section>
        <Link to={"/admin/add-product"} style={{ textDecoration: "none" }}>
          <div className="sidebar-item">
            <IoCartOutline size={30} />
            <p>Add Product</p>
          </div>
        </Link>
      </section>

      <section>
        <Link to={"/admin/list-product"} style={{ textDecoration: "none" }}>
          <div className="sidebar-item">
            <CiBoxList size={30} />
            <p>Product List</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
