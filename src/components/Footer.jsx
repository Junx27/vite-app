function Footer() {
  return (
    <div className="mt-20 mx-20 mb-20">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h1 className="font-bold text-xl">Kantin</h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl">Navigasi</h1>
          <ul className="mt-5">
            <li>Home</li>
            <li>Makanan</li>
            <li>Minuman</li>
            <li>Promo</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl">Media Sosial</h1>
          <ul className="mt-5">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Whatsapp</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl">Subscribe</h1>
          <div className="flex juxtify-between">
            <input
              type="text"
              placeholder="text here..."
              className="border px-10 mt-5"
            />
            <button className="bg-green-400 px-2 mt-3 rounded-lg mx-2 hover:bg-green-500">
              kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
