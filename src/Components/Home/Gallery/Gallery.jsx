const Gallery = () => {
  const galleryData = [
    {
      name: " Police Car ",
      picture:
        "https://m.media-amazon.com/images/I/71dZ0il0V+L._AC_SL1500_.jpg",
    },
    {
      name: " Audi ",
      picture:
        "https://images-cdn.ubuy.co.in/63c9c29b021a5430cf4f8c13-rastar-audi-rc-car-1-14-audi-r8.jpg",
    },
    {
      name: " R15 ",
      picture:
        "https://www.toyexpress.in/Admin/ItemImages/ae105976542945f7807b0a474ad56c58.jpg",
    },
    {
      name: " Jaguar ",
      picture:
        "https://i5.walmartimages.ca/images/Large/570/452/6000198570452.jpg",
    },
  ];

  return (
    <div className="px-40  my-20">
      <h1 className="text-center font-bold text-5xl">Gallery </h1>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] text-center font-bold text-5xl my-7 pb-7">
        Wellcome to Our ToY Store
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {galleryData.map((gallery) => (
          <div>
            <a href="#" class="group relative block bg-black">
              <img
                alt="Developer"
                src={gallery.picture}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-white">
                  {gallery.name}
                </p>
                <div class="mt-20 sm:mt-48 lg:mt-60">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
