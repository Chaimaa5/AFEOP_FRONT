import React from 'react';
import { Button } from '@mui/material'; // Optional: Using MUI for styled button
import left from '../../assets/icons/left.svg'

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button
      onClick={onClick}
      className='flex justify-center mr-20 p-4 absolute left-4 z-10'
      style={{
        position: 'absolute',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <img src={left} className='w-[60%]'/>

    </Button>
  );
};

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button
      onClick={onClick}
      className='flex justify-center ml-20 absolute right-4 z-10'
      style={{
        position:'absolute',
        color: 'white',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <img src={left}  className='rotate-180 w-[60%]'/>
    </Button>
  );
};

export { CustomLeftArrow, CustomRightArrow };
