import React, { useRef, useState, useEffect } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

  const [scrollValue, setScrollValue] = useState(0);
  const [scroll, setScroll] = useState("left");

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full mt-96 md:my-5">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-700 transition-all ease-in-out duration-100">
            {" "}
            Our Fresh & Healthy Fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 flex cursor-pointer  hover:shadow-lg items-center justify-center "
              onClick={() => {
                setScroll("left");
                setScrollValue(scrollValue - 320);
                if (scrollValue < 0) {
                  setScrollValue(0);
                }
              }}
            >
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg flex bg-orange-400 hover:bg-orange-500 items-center justify-center cursor-pointer hover:shadow-lg"
              onClick={() => {
                setScroll("right");
                setScrollValue(scrollValue + 320);
                if (scrollValue > 100) {
                  setScrollValue(100);
                }
              }}
            >
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer
          scroll={scroll}
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        ></RowContainer>
      </section>
      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
