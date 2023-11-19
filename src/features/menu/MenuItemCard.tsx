import { Typography, Box } from "@mui/material";

type DATA = {
  id: number;
  title: string;
  image: string;
  ingredient: string[];
  price: number;
};

const MenuItemCard = ({ values }: { values: DATA }) => {
  return (
    <Box>
      <Typography
        className="w-[300px] h-[300px]"
        component={"img"}
        src={values.image}
      ></Typography>
      <Typography>{values.title}</Typography>
      <Box className="flex gap-3">
        {values.ingredient.map((value: string) => {
          return <Typography key={value}>{value}</Typography>;
        })}
      </Box>
      <Typography>
        ${values.price}
      </Typography>
    </Box>
  );
};

export default MenuItemCard;
