import React, { useState } from "react";

const CoursesPages = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Courses</h3>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input type="submit" value="save" />
    </form>
  );
};
export default CoursesPages;
