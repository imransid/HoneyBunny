import axios from "axios";

export const _add_Categories = (
  image,
  status,
  description,
  name,
  subcategory
) => {
  var formData = new FormData();
  formData.append("myImage", image);
  formData.append("status", status);
  formData.append("description", description);
  formData.append("categoryname", name);
  formData.append("subcategory", subcategory);

  // Display the key/value pairs
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  const config = {
    "Content-Type": "multipart/form-data",
    mode: "cors",
  };

  axios
    .post("http://localhost:8080/api/from/create_category", formData, config)
    .then((res) => {
      // then print response status
      console.log(res.statusText);
    })
    .catch((err) => console.log(err));
};

export const onSubmit = (image, status, description, name, subcategory) => {
  const validateChker = validation(
    image,
    status,
    description,
    name,
    subcategory
  );

  validateChker == true
    ? _add_Categories(image, status, description, name, subcategory)
    : alert("You can't save blank field!");
};

export function onClick(event) {
  const eventType = event.type; // => "click"
  const _target = event.target.files[0];

  return _target;
}

const validation = (image, status, description, name, subcategory) => {
  let checker;
  if (
    image == "" ||
    status == "" ||
    description == "" ||
    name == "" ||
    subcategory == ""
  ) {
    checker = false;
  } else {
    checker = true;
  }

  return checker;
};
