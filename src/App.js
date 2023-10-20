import './category.styles.scss'

function App() {

  const categories = [
    {
      id: 1,
      title: 'Grub',
      imageUrl: 'https://i.imgur.com/kNfKmSN.png'
    },
    {
      id: 2,
      title: 'Nibbles',
      imageUrl: 'https://i.imgur.com/4dv4XI2.png'
    },
    {
      id: 3,
      title: 'Supplies',
      imageUrl: 'https://i.imgur.com/wOhv2E0.png'
    },
    {
      id: 4,
      title: 'Playthings',
      imageUrl: 'https://i.imgur.com/pR9ijCc.png'
    },
    {
      id: 5,
      title: 'Threads',
      imageUrl: 'https://i.imgur.com/J2sPwmP.png'
    },
  ]

  return (
    <div className='categories-container'>

      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className='category-container'>
          <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
  ))}

    </div>
  );
}

export default App;
