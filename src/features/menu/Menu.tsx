import { getMenu } from "../../services/apiRestureant";
import { useLoaderData } from "react-router-dom";
import MenuItemCard from "./MenuItemCard"

type DATA = {
  id: number;
  title: string;
  image: string;
  ingredient: string[];
  price: number;
};


const Menu = () => {


  
  const menu:any = useLoaderData();
 
 const  listMenu = menu.map((value:DATA)=>{
  return <MenuItemCard key={value.id} values={value} />
})
  return <>
  {listMenu}
  </>
};

export default Menu;

export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
};

