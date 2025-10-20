import './index.css'
import download from '../../assets/icons/download.svg'
import { Button } from '@nextui-org/react';
export default function SingleRaster() {

    return (
        <div className="flex  items-center justify-between self-end  w-[360px]  bg-white  h-[100px] p-4  rounded-3xl    ">
            <div >

                <div className='font-popins font-semibold'>
                    Raster name
                </div>
                <div className='font-popins font-light text-[#A8A6AC]'>
                    07/01/2022
                </div>
            </div>

            <div className='flex justify-center items-center  '>
                <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                   <img src={download}/>
                </button>
                <Button size="sm" className='bg-darkblue text-white rounded-3xl'>Save</Button>
              
            </div>
        </div>
    );
}


