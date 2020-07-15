// List Of Categories
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { init_category } from "../../actions/Category";
const moment = require("moment");

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

const Modal = (props) => {
  let date =
    props.categorie.length !== 0 && props.content !== -1
      ? moment(props.categorie[props.content].date)
          .utc()
          .format("YYYY-MM-DD hh:mm A")
      : "";

  let name =
    props.categorie.length !== 0 && props.content !== -1
      ? props.categorie[props.content].categoryname
      : "";
  let description =
    props.categorie.length !== 0 && props.content !== -1
      ? props.categorie[props.content].description
      : "";
  let image =
    props.categorie.length !== 0 && props.content !== -1
      ? props.categorie[props.content].picture
      : "";
  let status =
    props.categorie.length !== 0 && props.content !== -1
      ? props.categorie[props.content].status
      : "";
  let subcategory =
    props.categorie.length !== 0 && props.content !== -1
      ? props.categorie[props.content].subcategory
      : "";
  return (
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title">{props.status}</h4>
          </div>
          <div class="modal-body">
            <label>Name : </label>
            <p>{name}</p>
            <label>Categories Description : </label>
            <p>{description}</p>
            <label>Created Date : </label>
            <p>{date}</p>
            <label>Image : </label>
            <p>{image}</p>
            <label>Status : </label>
            <p>{status == 1 ? "Active" : "Deactive"}</p>
            <label>Sub Category : </label>
            <p>{subcategory == 1 ? "Active" : "Deactive"}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListOfCategories = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.CATEGORY.categorie);
  const loader = useSelector((state) => state.CATEGORY.loading);

  const [SLnumber, SetSLnumber] = useState(-1);
  const [ShowBox, SetShowBox] = useState(false);
  const [ModalStatus, SetModalStatus] = useState("");

  console.log("categories", categories);

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

      <Modal status={ModalStatus} categorie={categories} content={SLnumber} />

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
