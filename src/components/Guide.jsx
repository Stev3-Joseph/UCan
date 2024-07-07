import React from "react";
import Guidecard from "../subcomponents/Guidecard";
import CardListOfObjects from "../assets/data/CardList";

const Guide = () => {
  return (
    <div className="flex items-center justify-center bg-[#1a1b1e] h-screen w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-6 ">
          {CardListOfObjects.map((card, index) => {
            return (
              <div key={index}>
                <Guidecard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Guide;
