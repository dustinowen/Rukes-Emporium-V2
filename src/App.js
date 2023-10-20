import CategoryItem from "./components/category-item/category-item.component";
import './categories-styles.scss'

function App() {
  const categories = [
    {
      id: 1,
      title: "Grub",
      imageUrl: "https://i.imgur.com/kNfKmSN.png",
    },
    {
      id: 2,
      title: "Nibbles",
      imageUrl: "https://i.imgur.com/4dv4XI2.png",
    },
    {
      id: 3,
      title: "Supplies",
      imageUrl: "https://i.imgur.com/wOhv2E0.png",
    },
    {
      id: 4,
      title: "Playthings",
      imageUrl: "https://i.imgur.com/pR9ijCc.png",
    },
    {
      id: 5,
      title: "Threads",
      imageUrl: "https://i.imgur.com/J2sPwmP.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
