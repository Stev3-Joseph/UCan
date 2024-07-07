import React from "react";
import { useEffect } from "react";

const CollegeGrid = () => {
  useEffect(() => {
    fetch(
      "https://api.collegeai.com/v1/api/user/colleges?api_key=MY_API_KEY&query=MIT"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>hi</div>;
};

export default CollegeGrid;
