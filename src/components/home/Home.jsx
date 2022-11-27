import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { useEffect } from "react";
import MidSection from "./MidSection";
//import {products } from "../../constants/data";
import { getProducts as listProducts } from "../../redux/actions/productAction.js";
import {useDispatch, useSelector } from "react-redux"
import { Box, makeStyles } from "@material-ui/core";
import MidSlide from "./MidSlide";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightwrapper: {
    background: "white",
    padding: 5,
    margin: "12px 0 0 10px ",
    width: "17%",
  },
});
const Home = () => {
  const classes = useStyle();
  

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    console.log(products );
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])
    

  return (
    <>
      <Navbar />
      <Box className={classes.component}>
        
        <Banner />  
        
         <MidSlide products={products} />

        <MidSection />

        <Slide timer={false} title="recommended"  data={products} />
        <Slide timer={false} title="best seller "  data={products} />
        <Slide timer={false} title="yours favourite "  data={products} />
        
      </Box>
    </>
  );
};
export default Home;
