import { menu } from "../data/data.js";
function HomePage() {
  return (
    <div>
      {/* ini adalah hero */}
      <div className="grid grid-cols-2 gap-2 mx-10 mt-20 items-center">
        <div className="px-20">
          <h1 className="text-4xl font-bold">
            Selamat Datang di Kantin Unperba
          </h1>
          <p className="mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            dicta suscipit neque laboriosam maxime nihil consequuntur culpa
            laborum dolorum aliquid?
          </p>
        </div>
        <div>
          <img
            src="https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      {/* ini adalah hero */}
      {/* ini menu produk */}
      <h1 className="text-3xl font-bold text-center mt-20 mb-10">
        Produk Terlaris
      </h1>

      <div className="grid grid-cols-3 gap-2 mx-20">
        {menu.map((menu) => {
          return (
            <div key={menu.id} className="mx-2">
              <img
                src={menu.gambar}
                alt=""
                className="w-full h-64 text-center"
              />
              <h1 className="text-xl font-bold mt-5">{menu.nama}</h1>
              <p className="mt-3">{menu.deskripsi}</p>
              <p className="bg-green-400 hover:bg-green-500 mt-10">
                {menu.harga}
              </p>
            </div>
          );
        })}
      </div>
      {/* ini menu produk */}
    </div>
  );
}

export default HomePage;
