import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [qurey, setQurey] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!qurey) return;
    navigate(`/order/${qurey}`);
    setQurey("");
  };

  const handleChange = (e: any) => {
    setQurey(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="find order with order number"
          size="small"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Search;
