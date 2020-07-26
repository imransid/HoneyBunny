// List Of Categories
import React, { useState, useEffect } from "react";
import CusTomModal from "./CustomModal";
import { useSelector, useDispatch } from "react-redux";
import { init_category } from "../../actions/Category";
const moment = require("moment");

// import Modal from "./CustomModal";

const CustomButton = (props) => {
  return (
    <button
      type="button"
      class={
        props.name == "Info"
          ? "btn btn-success"
          : props.name == "Edit"
          ? "btn btn-primary"
          : "btn btn-danger"
      }
      data-toggle="modal"
      data-target="#myModal"
      style={{ marginRight: 10 }}
      onClick={() => props.setter()}
    >
      {props.name}
    </button>
  );
};

const ListOfCategories = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.CATEGORY.categorie);
  const loader = useSelector((state) => state.CATEGORY.loading);

  const [SLnumber, SetSLnumber] = useState(-1);
  const [ShowBox, SetShowBox] = useState(false);
  const [ModalStatus, SetModalStatus] = useState("");

  useEffect(() => {
    dispatch(init_category());
  }, [loader]);

  const _onclick = (i) => {
    SetShowBox(!ShowBox);
    SetSLnumber(i);
  };

  return (
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-body">List Of All Categories</div>
      </div>

      <CusTomModal
        status={ModalStatus}
        categorie={categories}
        content={SLnumber}
        ModalStatus={ModalStatus}
      />

      <ul class="list-group">
        {loader == false
          ? categories.length !== 0
            ? categories.map((e, i) => (
                <div key={i}>
                  <a
                    role="button"
                    className="list-group-item"
                    onClick={(e) => _onclick(i)}
                  >
                    {e.categoryname}
                  </a>
                  {SLnumber == i && ShowBox == true ? (
                    <li className="list-group-item" style={{ padding: 10 }}>
                      <CustomButton
                        name={"Info"}
                        setter={() => SetModalStatus("Info")}
                      />
                      <CustomButton
                        name={"Edit"}
                        setter={() => SetModalStatus("Edit")}
                      />
                      <CustomButton
                        name={"Delete"}
                        setter={() => SetModalStatus("Delete")}
                      />
                    </li>
                  ) : null}
                </div>
              ))
            : null
          : null}
      </ul>
    </div>
  );
};

export default ListOfCategories;
