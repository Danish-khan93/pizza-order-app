import Search from "../features/order/Search"
import { Typography , Grid } from "@mui/material"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <Grid>
        <Link to={"/"}>
        <Typography variant="h4" className="text-yellow-500">PIZZA ORDERING WEB</Typography>
        </Link>
        <Search/>
    </Grid>

  )
}

export default Header