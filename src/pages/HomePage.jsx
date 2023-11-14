import { promo, menu, harga } from "../data/data.js";
function HomePage() {
  return (
    <div>
      <div>
        Menu
        {menu.map((data) => {
          return (
            <div key={data.id}>
              <h1>{data.nama}</h1>
              <p>{data.harga}</p>
            </div>
          );
        })}
      </div>
      harga
      {harga.map((data) => {
        return (
          <div key={data.id}>
            <p className="text-red-400">{data.harga}</p>
          </div>
        );
      })}
      Menu promo <br />
      {promo.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.nama}</h1>
            <p>{data.harga}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
