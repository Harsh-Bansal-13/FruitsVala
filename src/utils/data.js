import F1 from "../images/f1.png";
import F2 from "../images/f2.png";
import F9 from "../images/f9.png";
import F6 from "../images/f6.png";
import F13 from "../images/f13.png";
import F19 from "../images/f19.png";

export const heroData=[
  {id:1,name:'StrawBerries',imageSrc:F1,price:'2.5'},
  {id:2,name:'Pineapple',imageSrc:F2,price:'1.75'},
  {id:3,name:'Banana',imageSrc:F9,price:'2'},
  {id:4,name:'Pomegranate',imageSrc:F6,price:'3'},
]


export const categories = [
  {
    id: 1,
    name: "Fruits",
    urlParamName: "fruits",
    class:"group-hover:text-textColor text-lg fi fi-ss-strawberry",
  },
  {
    id: 2,
    name: "Shakes",
    urlParamName: "shakes",
    class:"group-hover:text-textColor text-lg fi fi-rr-beer",
  },
  {
    id: 3,
    name: "Juices",
    urlParamName: "juices",
    class:"group-hover:text-textColor text-lg fi fi-rr-drink-alt",
  },
  {
    id: 4,
    name: "Icecream",
    urlParamName: "icecream",
    class:"group-hover:text-textColor text-lg fi fi-sr-ice-cream",
  },
  {
    id: 5,
    name: "Soft Drinks",
    urlParamName: "drinks",
    class:"group-hover:text-textColor text-lg fi fi-ss-drink-alt",
  }
];