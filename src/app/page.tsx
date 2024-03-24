
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {


  const allCars = await fetchCars();
  const isdataEmpty = !Array.isArray(allCars)||allCars.length<1||!allCars;
  return (
    <main className="overflow-hidden">
<Hero/>
<div className="mt-12 padding-x padding-y max-width" id="discover">
  <div className="home__text-container">
    <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
    <p>Explore The cars you want to book</p>
  </div>

  <div className="home__filters">
<SearchBar/>
<div className="home__filter-container">
  <CustomFilter title="Type"/>
  <CustomFilter title="Seats"/>
</div>
  </div>

{!isdataEmpty?(
  <section>
<div className="home__cars-wrapper">
{
  allCars.map((car)=>(
    <CarCard car = {car}/>
  ))
}
</div>
  </section>
):(
  <div className="home__error-container">
<h2 className="text-black text-xl font-bold">Some Error Occured</h2>
<p className="">{allCars.message}</p>
  </div>
)
}
</div>
    </main>
  );
}
