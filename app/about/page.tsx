import NavBar from "../components/navbar/navbar";

export default function About() {
  return (
    <div>
      <NavBar />
    <div className='p-8 pt-40 lg:pt-60 lg:px-40 mb-32'>
      <h1 className="uppercase text-[2rem] w-full flex justify-start lg:justify-center text-[#AE2D29] butovo" style={{ fontWeight: 300 }}>About me</h1>
      <p className="font-light">Born in Vicenza (Italy) on the 29th of December 2002 with Serbian origins, currently living
        in-between Milan and Vicenza.
        Visual artist preferentially painter. Currently a third year student at the Academy of Fine
        Arts of Brera (MI), BA in Painting.
      </p>
      <h1 className="text-[#AE2D29] text-[1.8rem] py-4 butovo"  style={{ fontWeight: 300 }}>EXHIBITS AND INTERVIEWS</h1>
      <p style={{ fontWeight: 700}}>26 Novembar-3 December 2023 (Locate di Triulzi, Mi)</p>
      <p className="font-light">Collective ”Com’eri vestita?”, work pres. “ROTTURA”</p>
      <p className="pb-2 font-normal">11 December 2023</p>
      <p style={{ fontWeight: 700}}>Interview with VenticentoArtMagazine (2023)</p>
      <p className="pb-2 font-normal">(link of the interview)</p>
      <p style={{ fontWeight: 700}}>January -May 2024 (Silk Road International Art Center in Langfang, China)</p>
      <p className="font-light">Collective “Sunday Fun” with Lulumeanstudio, work pres.</p>
      <p className="font-light">Artists book “Well-put together</p>
      <p className="pb-2 font-normal">on my bathroom floor” and Artists book “I fell between my bed and my drawer”</p>
    </div>
    </div>
  );
}