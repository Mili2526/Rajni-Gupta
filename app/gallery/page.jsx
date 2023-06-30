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
    <div className="App mb-28">
     <div className="cover_image  w-full h-48 flex justify-center items-center text-5xl text-white font-bold">
        Gallery
      </div>
      <br />
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      
    </div>
  );
}

export default App;