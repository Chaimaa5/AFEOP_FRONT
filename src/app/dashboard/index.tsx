import React, { useState } from 'react';
import { Card, Button, CardBody } from '@nextui-org/react';
import yieldimg from "../../assets/images/YieldBg.png"
import drought from "../../assets/images/drought.jpg"
import soft from "../../assets/images/cereal/1.png"
import evaporation from "../../assets/images/evaporation.png"
import SM from "../../assets/images/SM.jpg"
import { useLocation, useNavigate } from 'react-router-dom';
import "./index.css"
// import YieldCard from './card';
// import YieldChart from './charts';
import { useDispatch } from 'react-redux';
import { updateForecastProduct } from '../../store/features/forecastSlice';
import { motion } from 'framer-motion';
interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const products: Product[] = [
  { id: 1, name: 'Yield Prediction', description: 'Utilizing Advanced Data Analytics And Remote Sensing Technology To Forecast Agricultural Output ', imageUrl: soft, link: '/yield' },
  { id: 2, name: 'Drought Cascade', description: 'Ensuring Water Security, And Preserving Ecological Balance', imageUrl: drought, link: '/drought' },
  { id: 3, name: 'Evaporation', description: 'Monitoring Evaporation Rates Assists In Effective Water Resource Management And Environmental Conservation.', imageUrl: evaporation, link: '/evaporation' },
  { id: 4, name: 'Fused Soil Moisture', description: 'Derived from satellite-based data and modeled observations.', imageUrl: SM , link: '/soilmoisture' },
];

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};
const Dashboard: React.FC = () => {
  const { pathname } = useLocation();
  const [isHalf, setIsHalf] = useState(false);
  const [product, setProduct] = useState<Product | null>(products[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleSize = (link) => {
    navigate(link);
  };

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleCardClick = (id: number) => {
    dispatch(updateForecastProduct(id));
  setSelectedProductId(id);


    setProduct(products.find(product => product.id === id) || null);
    navigate(products[id - 1].link)
  }
  return (
    <motion.div
  initial="initial"
  animate="in"
  exit="out"
  variants={pageVariants}
  transition={pageTransition}
  style={{ minHeight: '100vh' , background: '#f1fff1'}} // 🟢 important
>
    <div className={`transition-width duration-500 ease-in-out w-[100%] bg-greenlight`} style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

      {(pathname === '/') && (
    <div className={`transition-width duration-500 ease-in-out ${isHalf ? 'w-[50%]' : 'w-[100%]'}`} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className='p-20'>
          <h1 className="text-3xl font-bold mt-2">Uncover AFEOP Scientific Applications</h1>
          <p className="text-lg font-normal mt-2 pb-20"> Empowering resilience through geospatial intelligence </p>
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
          {/* <div className='flex self-end mt-10'>
            <Button className='bg-[#204E51] text-white' onClick={toggleSize()}>
              {isHalf ? 'Back' : 'Next'}
            </Button>
          </div> */}
        </div>
    </div>
      )}
    
    </div>
    </motion.div>
  );
};

export default Dashboard;
