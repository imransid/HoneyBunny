import React, { useState } from "react";
import { _add_Categories, onSubmit, onClick } from "./Methods";

const CategoryMenu = (props) => {
  return (
    <li className="active">
      <a
        className="active"
        href="#"
        onClick={() => props.chgCategory(props.name)}
      >
        {props.name}
      </a>
    </li>
  );
};

// List Of Categories

const ListOfCategories = (props) => {
  return (
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-body">List Of All Categories</div>
      </div>

      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <a href="#" class="list-group-item">
          Vestibulum at eros
        </a>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
};

// Add Categories

const AddCategories = (props) => {
  const [status, SetStatus] = useState("");
  const [iMage, SetiMage] = useState("");
  const [description, SetDescription] = useState("");
  const [name, SetName] = useState("");
  return (
    <div class="col-md-12">
      <div class="panel panel-default ">
        <div class="panel-heading">Add New Categories</div>
      </div>

      <form encType="multipart/form-data">
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Category Name </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
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
        <div class="sform-group">
          <label htmlFor="exampleInputFile">Status</label>
          <div className="radio">
            <label class="radio-inline">
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
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
                onChange={(e) => SetStatus(false)}
                required
              />
              Disable
            </label>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onSubmit(iMage, status, description, name)}
          class="btn btn-default"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Categories = (props) => {
  const [activeCategory, SetActiveCategory] = useState("Category List");
  return (
    <div>
      <div>
        <ol class="breadcrumb">
          <CategoryMenu
            name="Category List"
            status={activeCategory}
            chgCategory={(e) => SetActiveCategory(e)}
          />
          <CategoryMenu
            name="Add Category"
            status={activeCategory}
            chgCategory={(e) => SetActiveCategory(e)}
          />
          <CategoryMenu
            name="Delete Category"
            status={activeCategory}
            chgCategory={(e) => SetActiveCategory(e)}
          />
          <CategoryMenu
            name="Edit Category"
            status={activeCategory}
            chgCategory={(e) => SetActiveCategory(e)}
          />
        </ol>
      </div>
      <div class="row">
        {activeCategory == "Category List" ? (
          <ListOfCategories />
        ) : activeCategory == "Add Category" ? (
          <AddCategories />
        ) : activeCategory == "Delete Category" ? (
          <div class="col-md-12">.col-md-15</div>
        ) : (
          <div class="col-md-12">.col-md-16</div>
        )}
      </div>
    </div>
  );
};

export default Categories;
