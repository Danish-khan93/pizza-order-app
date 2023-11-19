
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { useNavigation } from "react-router-dom";
import LoadingComp from "./LoadingComp";
const AppLayout = () => {

    const navigation = useNavigation()
    console.log(navigation);

    const isLoading = navigation.state ==="loading"
  return (
    <>
    {
        isLoading && <LoadingComp/>
    }
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </>
  );
};

export default AppLayout;
