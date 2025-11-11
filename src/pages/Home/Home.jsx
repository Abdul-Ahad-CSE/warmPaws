import React from "react";
import HeroSlider from "../../component/HeroSlider";
import Card from "../card/card";
import { useLoaderData } from "react-router";
import CarePet from "../carePet/CarePet";
import Expert from "../expert/Expert";
import HappyPets from "../story/Story";
import Story from "../story/Story";

export default function Home() {
  const data = useLoaderData();
  //console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <HeroSlider></HeroSlider>

      <h2 id="services-section" className="text-5xl font-bold text-center text-blue-700 mb-8 mt-10">
          Our Services
        </h2>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((data) => (
          <Card key={data.serviceId} data={data}></Card>
        ))}
      </div>
      <CarePet></CarePet>
      <Expert></Expert>
      <Story></Story>
    </div>
  );
}
