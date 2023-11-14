import { promo } from "../data/data.js";
function PromoPage() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mx-20">
        {promo.map((menu) => {
          return (
            <div key={menu.id} className="mx-2 mt-10">
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
    </div>
  );
}

export default PromoPage;
