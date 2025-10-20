import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css'
import { CustomLeftArrow, CustomRightArrow } from './arrows';
import { Image } from 'antd';
import { ConsoleSqlOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {Button, Slider, Spinner, Tooltip} from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import { updateAddRaster, updateRasterUrl, updateSideBar } from '../../store/features/rasterSlice';
import { addLayer, addOrUpdateLayer } from '../../store/features/layers';
import Axios from '../api/axios';
import { alertInterval, setAlertMessage } from '../../store/features/alert';
import { updateAnalysisData } from '../../store/features/analysisSlice';
import { ReactSVG } from 'react-svg';
import actions from './actions';
const CarouselComponent = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rangeData = useSelector((state: RootState) => state.form.rangeData);
  const rangeUrl = useSelector((state: RootState) => state.form.rangeUrl);
  const [activeTooltip, setActiveTooltip] = useState("");

  // const rangeUrl = useSelector((state: RootState) => state.raster.rasterUrl);
  const dispatch = useDispatch();
  const handlePreview = (index: number, url: string) => {
    setCurrentImageIndex(index);
    setPreviewVisible(true);

  };

  const formData =new FormData();
  const shape = useSelector((state: RootState) => state.draw.shape);
  const geojson = useSelector((state: RootState) => state.layer.geojsonLayers);
  const selectedOption = useSelector( (state: RootState) => state.form.selectedOption );


  const handleProjection = (index: number, url: string) => {
    if (shape.type === 'polygon') {
      formData.append("polygon", JSON.stringify(shape.coordinates));

    } else {
      formData.append("geojson", JSON.stringify(geojson));
    }
    formData.append("layer", rangeUrl[index]);
    formData.append("product", selectedOption);
    Axios.post(`rasters/${shape.type}/`, formData, {
      headers: {
          "Content-Type": "multipart/form-data",
      },
  }).then((response) => {
    console.log("response", response)
      if (response.status === 200) {
        // const data = JSON.parse(response.data);
        dispatch(
          addOrUpdateLayer({
            name: 'Raster',
            settings: {
              opacity: 1,      
              colorRamp: 'yellow',
              view: true 
            },
          }))
          dispatch(updateRasterUrl(response.data.url));
          dispatch(updateAnalysisData({
            min: response.data.min.toFixed(2),
            max: response.data.max.toFixed(2),
            std: response.data.std.toFixed(2),
            mean: response.data.mean.toFixed(2),
        }));
          dispatch(updateAddRaster(true));
          dispatch(updateSideBar(true));

      }
  }).catch((error) => {   
      dispatch(alertInterval(true))
      dispatch(setAlertMessage("No data available for the selected date"))
  });
    
    // const layerMatch = url.match(/layers=([^&]*)/);
    // const layerValue  = layerMatch ? layerMatch[1] : null;
    // if (layerValue !== null)
  };

   const handleSave = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.png';
    link.click();
  };

  useEffect(() => {
   
    const loadImages = async () => {
      const loadPromises = rangeData.map((url) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        console.log("url", url) 
          img.src = url;
          img.onload = () => resolve();
        })
      );

      await Promise.all(loadPromises);
      setLoading(false);
    };

    loadImages();
  }, [rangeData]);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

 

  return (
    <div className="flex flex-col items-center justify-center self-start  w-[100%]  bg-bg  h-[180px] p-2  rounded-3xl  parent  ">
     {
      rangeData.lenght === 0 && (
        <p>
          no data
        </p>)
        
     }
      {loading ? (
             <Spinner color="default"/>

      ) : (
      <Image.PreviewGroup

        preview={{
          visible: previewVisible,
          onVisibleChange: (visible) => setPreviewVisible(visible),
          current: currentImageIndex, 
        }}
      >
        <Carousel
          customTransition="transform .5s ease-in-out"
          transitionDuration={500}
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          className='flex flex-col justify-between  items-start w-[88%] h-[100%]'
        >
      {rangeData.map((url, index) => (
        <div className="image-container"  key={index}>
            <Image
              width={100}
              src={url}

            className='styled-image bg-no-repeat bg-cover bg-center rounded-3xl  border-solid border-1.5'
            />
            <div className="icon-overlay w-[100%]">
            {actions.map((item) => (

                         <Tooltip
                         key={item.info}
                         showArrow
                         content={item.info}
                         placement="bottom-start"
                         className="m-0 "
                         onFocus={() => setActiveTooltip(item.info)} 
                         onBlur={() => setActiveTooltip(null)}   
                     >
                     
                         <Button
                             isIconOnly
                             key={item.info}
                             className="bg-transparent  hover:bg-gray-200 transition"

                            onClick={() => {
                              setActiveTooltip(item.info);
                
                              switch (item.info) {
                                case 'View PNG':
                                    handlePreview(index, url);
                                    break;
                                case 'View COG':
                                  handleProjection(index, url);
                                    break;
                                case 'Download':
                                  handleSave(url)
                                  break;
                                default:
                                  break;
                              }
                            }}                             
                         >
              <img src={item.icon} className="lg:w-[50%] sm:w-[40%] md:w-[45%] w-[40%] " />

                             {/* <ReactSVG  src={item.icon} className={`  w-[10px] h-[10px] fill-blue`}/> */}
                         </Button>
                     </Tooltip>
                    ))}
           
            </div>
          </div>
      )
        
        )}

        </Carousel>
      </Image.PreviewGroup>
       )}  
    </div>
  );
};

export default CarouselComponent;