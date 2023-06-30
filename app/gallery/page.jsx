import WSPGallery from "@/components/WSPGallery";

function App() {

  const galleryImages = [
    {
      img: '/images/img6.jpg'
    },
    {
      img: "/images/bg2.jpg"
    },
    {
      img: "/images/bg3.jpg"
    },
    {
      img: "/images/img3.jpg"
    },
    {
      img: "/images/img2.jpg"
    },
    {
      img: "/images/img4.jpg"
    },
    {
      img: "/images/img5.jpg"
    },
    {
      img: "/images/img7.jpg"
    },
    {
      img: "/images/img8.jpeg"
    },
    
    
    
  ]

  return (
    <div className="App">
      <br />
      <div className="text-center font-bold text-5xl text-primary">
       Gallery
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      
    </div>
  );
}

export default App;