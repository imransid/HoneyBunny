import axios from "axios";

export const _add_Categories = (props) => {
  var _re = props.persist();
  console.log("props _re", _re);
};

export const onSubmit = (image, status, description, name) => {
  var formData = new FormData();
  formData.append("myImage", image);
  formData.append("status", status);
  formData.append("description", description);
  formData.append("categoryname", name);

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

export function onClick(event) {
  const eventType = event.type; // => "click"
  const _target = event.target.files[0];

  return _target;
}
