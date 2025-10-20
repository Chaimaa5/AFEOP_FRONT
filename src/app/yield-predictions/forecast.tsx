import React, { useState } from 'react';
import { Card, Button, CardBody } from '@nextui-org/react';
import yieldimg from "../../assets/images/yield.png"
import durum from "../../assets/images/cereal/5.png"
import soft from "../../assets/images/cereal/1.png"
import barley from "../../assets/images/cereal/4.png"
import total from "../../assets/images/cereal/2.png"
import { useLocation } from 'react-router-dom';
import "./index.css"
import YieldCard from './card';
import YieldChart from './charts';
import { useDispatch } from 'react-redux';
import { updateForecastProduct } from '../../store/features/forecastSlice';
import TopBar from '../components/topbar';
import { motion } from 'framer-motion';
interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: 'Soft wheat', description: 'Gain insights into soft wheat yields based on current climate and soil data. ', imageUrl: soft },
  { id: 2, name: 'Durum wheat', description: 'Optimize your crop management strategies and market timing.', imageUrl: durum },
  { id: 3, name: 'Barley', description: 'Explore detailed yield forecasts for barley, helping you to plan for processing and distribution needs effectively.', imageUrl: barley },
  { id: 4, name: 'View All', description: 'Aggregate yield predictions across 3 crops for comprehensive planning and strategy development.', imageUrl: total },
];



const Forecast: React.FC = () => {
  const { pathname } = useLocation();
  const [isHalf, setIsHalf] = useState(false);
  const [product, setProduct] = useState<Product | null>(products[0]);
  const dispatch = useDispatch();
  const toggleSize = () => {
    setIsHalf(!isHalf);
  };

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleCardClick = (id: number) => {
    dispatch(updateForecastProduct(id));
  setSelectedProductId(id);


    setProduct(products.find(product => product.id === id) || null);
  }
  return (
   
    <div className={`transition-width duration-500 ease-in-out w-[100%] bg-[#CAD591]`} style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
  <div className="flex absolute top-0 left-0 h-[50%]  z-40 pl-4 ">
            <TopBar></TopBar>
          </div>
      {(pathname === '/forecast') && (
    <div className={`transition-width duration-500 ease-in-out ${isHalf ? 'w-[60%]' : 'w-[100%]'}`} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className='p-32'>
          <h1 className="text-3xl font-bold mt-2 text-green2">Explore Yield Predictions for Key Crops</h1>
          <p className="text-md font-normal mt-2 pb-2"> Accurate insights into future crop performance. </p>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isHalf ? 2 : 4}, minmax(0, 1fr))`, gap: '20px', justifyContent: 'center' }} >
            {products.map(product => (
              <Card isHoverable key={product.id} className={`max-w-[330px]`}              onClick={() => handleCardClick(product.id)}
              >
              <img
                  src={product.imageUrl}
                  className={`${isHalf ? 'h-[180px]' :' h-[340px]'} object-cover w-[100%] `}
                  alt={product.name}
                />
                <CardBody onClick={() => handleCardClick(product.id)} className={`${selectedProductId === product.id ? 'bg-[#204E51]' : 'bg-white'}`} >
                  <h1 className={`text-2xl font-bold mt-2  ${selectedProductId === product.id ? 'text-white' : 'text-[#204E51]'}` }>{product.name}</h1>
                  <p className={`${selectedProductId === product.id ? 'text-white' : 'text-black'}` }> {product.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className='flex self-end mt-10'>
            <Button className='bg-[#204E51] text-white' onClick={toggleSize}>
              {isHalf ? 'Back' : 'Next'}
            </Button>
          </div>
        </div>
    </div>
      )}
      {isHalf && 
    <div className='transition-width duration-500 ease-in-out w-[50%] '  style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <YieldChart product={product} />
    </div>
    }
    </div>
  );
};

export default Forecast;
