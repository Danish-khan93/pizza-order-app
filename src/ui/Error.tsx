import { useRouteError,useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Error = () => {
  const navigate =useNavigate()
  const error: any = useRouteError();
  return (
    <div>
      <p>{error.data || error.message}</p>
      <Button onClick={()=>navigate(-1)}>
        GO BACK
      </Button>
    </div>
  );
};

export default Error;
