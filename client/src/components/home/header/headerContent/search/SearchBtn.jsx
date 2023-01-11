import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function SearchBtn({ searchParams, setErrors }) {
  let navigate = useNavigate();

  const onSubmit = () => {
    const start = Date.now();
    if (Object.values(searchParams).every((key) => key)) {
      try {
        navigate({
          pathname: "search",
          search: `?${createSearchParams({
            from: searchParams.from.id,
            destination: searchParams.destination.id,
            departDate: searchParams.departDate.toDateString(),
            returnDate: searchParams.returnDate.toDateString(),
            tripClass: searchParams.tripClass,
          })}`,
        });
      } catch (error) {
        console.log(error);
        setErrors(error.response.data.errors);
      }
    } else {
      setErrors([{ message: "Incomplete data" }]);
    }
    console.log(Date.now() - start);
  };

  return (
    <Button
      color="main"
      sx={{ m: 1, color: "white" }}
      variant="contained"
      onClick={onSubmit}
    >
      Search
    </Button>
  );
}
