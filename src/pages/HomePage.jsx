function HomePage() {
  return (
    <div>
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
    </div>
  );
}

export default HomePage;
