import { useEffect, useState } from "react";

function About() {
  const shoppingCart = [
    {
      id: 1,
      nama: "andi",
      jumlah_belanja: 1,
      harga: 2000,
    },
    {
      id: 2,
      nama: "tono",
      jumlah_belanja: 3,
      harga: 2000,
    },
    {
      id: 3,
      nama: "sarah",
      jumlah_belanja: 3,
      harga: 2000,
    },
  ];

  const [jumlahBelanja, setJumlahBelanja] = useState();
  const [dapatDiskon, setaDapatDiskon] = useState();
  const [jumlahDiskon, setJumlahDiskon] = useState();

  useEffect(() => {
    function diskon() {
      let keterangan =
        "Anda mendapatkan diskon karena berbelanja di atas 10.000";
      let keterangan1 = "Anda belum mendapatkan diskon";
      let total = shoppingCart.reduce((result, item) => {
        return result + item.jumlah_belanja * item.harga;
      }, 0);
      setJumlahBelanja(total);
      let parameter = 10000;
      let nominalDiskon = 100;
      let presentase = 20;
      if (total > parameter) {
        document.querySelector("#diskon").innerHTML = keterangan;
        setJumlahDiskon(parseFloat((total * presentase) / nominalDiskon));
        setaDapatDiskon(parseFloat(total - jumlahDiskon));
      } else {
        document.querySelector("#diskon1").innerHTML = keterangan1;
        setaDapatDiskon(total);
      }
    }
    diskon();
  });
  return (
    <div>
      <h1>Membuat Algoritma Diskon E-Commerce</h1>

      <ol className="list">
        <li>Menampilkan data JSON pada tabel</li>
        <li>Menjumlahkan dengan REDUCE JavaScripy</li>
        <li>Membuat Algoritma Diskon</li>
        <li>Menjumlahkan jumlah belanja jika mendapatkan diskon</li>
        <li>Menampilkan hasil total bayar</li>
      </ol>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Harga Barang</th>
            <th>Jumlah Barang</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.harga}</td>
              <td>{item.jumlah_belanja}</td>
              <td>{item.harga * item.jumlah_belanja}</td>
            </tr>
          ))}
          <tr className="jumlah">
            <th colSpan="4">Jumlah Belanja</th>
            <td>{jumlahBelanja}</td>
          </tr>
        </tbody>
      </table>

      <p id="diskon"></p>
      <p id="diskon1"></p>
      <button className="custom-button-diskon">
        Jumlah diskonnya adalah : {jumlahDiskon}
      </button>
      <br />
      <button className="custom-button">
        Total Bayar : {jumlahBelanja} - {jumlahDiskon} = {dapatDiskon}
      </button>
    </div>
  );
}

export default About;
