const Gallery = () => {
  const galleryData = [
    {
      name: " Developer ",
      picture: "https://m.media-amazon.com/images/I/81YEGvaF3gL._SL1500_.jpg",
    },
    {
      name: " Developer ",
      picture: "https://m.media-amazon.com/images/I/81YEGvaF3gL._SL1500_.jpg",
    },
    {
      name: " Developer ",
      picture: "https://m.media-amazon.com/images/I/81YEGvaF3gL._SL1500_.jpg",
    },
    {
      name: " Developer ",
      picture: "https://m.media-amazon.com/images/I/81YEGvaF3gL._SL1500_.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5">
      {galleryData.map((gallery) => (
        <div>
          <a href="#" class="group relative block bg-black">
            <img
              alt="Developer"
              src={gallery.picture}
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                {gallery.name}
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
