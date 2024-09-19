import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 3,
    title: "Join The Team",
    newTab: false,
    path: "/jointeam"
  },  
  {
    id: 4,
    title: "Opportunities",
    newTab: false,
    path: "/partner"
  },
  

  
  {
    id: 5,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Our Story",
        newTab: false,
        path: "/about",
      },
     
      {
        id: 52,
        title: "Blog",
        newTab: false,
        path: "https://blog.agentdao.com",
      },
   
      {
        id: 54,
        title: "Contact Us",
        newTab: false,
        path: "https://domaindirectory.com/servicepage/?domain=agentdao.com",
      },
      {
        id: 55,
        title: "Partner with Us",
        newTab: false,
        path: "/partner",
      },      
    ],
  },     
];

export default menuData;
