import { Button, Card, CardBody, Select, SelectItem, Slider, Image, CardHeader } from "@nextui-org/react";
import React from "react";
import map from "../../assets/svg/map.svg"
import drought from "../../assets/images/drought.jpg"



const SustainableCard: React.FC = () => {
  return (
    <div className="flex   h-[20%]  w-[25%] bg-[#3e4444] bg-opacity-70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105">
      <div className="p-5 w-[50%]">
        <h2 className="text-2xl font-semibold mb-2 text-white">Sustainable Designs</h2>
        <p className=" mb-4 text-white">Our solar panels deliver maximum efficiency and sustainability.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          Let's start
        </button>
      </div>
      <img src={drought} alt="Solar Panels" className="w-[50%] p-4" />
    </div>
  );
};


export default function HomeCard() {
  const [liked, setLiked] = React.useState(false);

  return (
   
    
        <Card className="col-span-12 sm:col-span-4 h-full w-full" >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">Understanding Drought: Work Packages</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover "
          src={drought}
        />
          <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
<CardBody className="absolute z-10 bottom-1">
  <div className="flex justify-between p-10">

<SustainableCard />
<SustainableCard />

<SustainableCard />
  </div>

          <p className="text-white/60 text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button
            auto
            className="mt-2"
            color="primary"
            onClick={() => setLiked(!liked)}
          >
            {liked ? "Liked" : "Like"}
          </Button>
        </CardBody>
      </Card>
     
 
  );
}

