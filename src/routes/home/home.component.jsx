import { Outlet } from "react-router-dom";

import CategoryMenu from "../../components/category-menu/category-menu.component";

function Home() {
  const categories = [
    {
      id: 1,
      title: "grub",
      imageUrl: "https://i.imgur.com/kNfKmSN.png",
    },
    {
      id: 2,
      title: "nibbles",
      imageUrl: "https://i.imgur.com/pAn4ybw.png",
    },
    {
      id: 3,
      title: "supplies",
      imageUrl: "https://i.imgur.com/9Cut1Pn.png",
    },
    {
      id: 4,
      title: "playthings",
      imageUrl: "https://i.imgur.com/xxNN7Gd.png",
    },
    {
      id: 5,
      title: "threads",
      imageUrl: "https://i.imgur.com/J2sPwmP.png",
    },
  ];

  return (
    <div>
      <Outlet />
      <CategoryMenu categories={categories} />
    </div>
  );
}

export default Home;
