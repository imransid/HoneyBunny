// Custo, Modals For Edit Info Categorys
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { init_category } from "../../actions/Category";
import { _add_Categories, onSubmit, onClick } from "./Methods";
const moment = require("moment");

// For Info
const Info = (props) => {
  return (
    <div class="modal-body">
      <label>Name : </label>
      <p>{props.name}</p>
      <label>Categories Description : </label>
      <p>{props.description}</p>
      <label>Created Date : </label>
      <p>{props.date}</p>
      <label>Image : </label>
      <p>
        <img
          src={"http://localhost:8080/images/" + props.image}
          class="img-rounded img-responsive"
          alt="Responsive image"
        />
      </p>
      <label>Status : </label>
      <p>{props.status == 1 ? "Active" : "Deactive"}</p>
      <label>Sub Category : </label>
      <p>{props.subcategory == 1 ? "Active" : "Deactive"}</p>
    </div>
  );
};

// For Edit
const Edit = (props) => {
  const [name, SetName] = useState(props.name);
  const [description, SetDescription] = useState(props.description);
  const [status, SetStatus] = useState(props.status);
  const [image, SetiMage] = useState(props.image);
  const [subcategory, SetSubcategory] = useState(props.subcategory);

  return (
    <div className="modal-body">
      <form encType="multipart/form-data">
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Category Name </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            value={name}
            placeholder="Category Name"
            onChange={(e) => SetName(e.target.value)}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <textarea
            class="form-control"
            rows="3"
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputFile">Category Picture</label>
          <input
            type="file"
            id="exampleInputFile"
            name="avatar"
            onChange={(e) => SetiMage(onClick(e))}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputFile">Status</label>
          <div className="radio">
            <label class="radio-inline">
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                checked={status == 1 ? true : false}
                onChange={(e) => SetStatus(true)}
                required
              />
              Active
            </label>
            <label class="radio-inline">
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                checked={status == 1 ? false : true}
                onChange={(e) => SetStatus(false)}
                required
              />
              Disable
            </label>
          </div>
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputFile">Sub Category</label>
          <div className="radio">
            <label class="checkbox-inline">
              <input
                checked={subcategory == 1 ? true : false}
                type="checkbox"
                id="inlineCheckbox1"
                onChange={() => SetSubcategory(!subcategory)}
              />{" "}
              Sub Category
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={
            () => console.log("okokokokokok")
            //onSubmit(iMage, status, description, name, subcategory)
          }
          class="btn btn-default"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const CustomModal = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [subcategory, setSubcategory] = useState("");

  useEffect(() => {
    try {
      if (props.categorie.length !== 0 && props.content !== -1) {
        setName(props.categorie[props.content].categoryname);
        setDescription(props.categorie[props.content].description);
        setStatus(props.categorie[props.content].status);
        setImage(props.categorie[props.content].picture);
        setSubcategory(props.categorie[props.content].subcategory);
      }
    } catch (err) {
      console.log("Custom Modal useEffect Error", err);
    }
  });

  let date =
    props.categorie.length !== 0 && props.content !== -1
      ? moment(props.categorie[props.content].date)
          .utc()
          .format("YYYY-MM-DD hh:mm A")
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
          {props.ModalStatus == "Edit" ? (
            <Edit
              name={name}
              description={description}
              image={image}
              subcategory={subcategory}
              date={date}
              status={status}
            />
          ) : (
            <Info
              name={name}
              description={description}
              image={image}
              subcategory={subcategory}
              date={date}
              status={status}
            />
          )}

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

export default CustomModal;
