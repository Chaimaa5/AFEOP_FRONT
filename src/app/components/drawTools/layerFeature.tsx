import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Tooltip } from "@nextui-org/react";
import { ReactSVG } from "react-svg";
import play from "../../../assets/icons/play.svg";
import minusIcn from "../../../assets/icons/minus.svg";
import pause from "../../../assets/icons/pause.svg";
import compare from "../../../assets/icons/compare.svg";
import { useMap } from "react-leaflet";
import './index.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addOrUpdateLayer, updatePlayer } from "../../../store/features/layers";
import { updateCompareState } from "../../../store/features/mapSlice";

interface Featuretems {
  icon: string;
  icon2: string;
  info: string;
}

export default function LayerFeature() {
  const dispatch = useDispatch();
  const addRaster = useSelector((state: RootState) => state.raster.addRaster);
  const player = useSelector((state: RootState) => state.layer.player);
  

  const handleNextLayer = () => {
    dispatch(updatePlayer(!player));
    if (player) {
      dispatch(
        addOrUpdateLayer({
          name: 'Raster',
          settings: {
            opacity: 0.5,
            colorRamp: 'SM_Viridis',
            view: false
          },
        }))
    }
    else{
      dispatch(
        addOrUpdateLayer({
          name: 'Polygon',
          settings: {
            opacity: 0.5,
            colorRamp: 'yellow',
            view: false
          },
        }))
    }
  };


  const featureItems: Featuretems[] = [
    {
      icon: play,
      icon2: pause,
      info: 'Play',
    },
    {
      icon: compare,
      icon2: compare,
      info: 'Compare',
    },
  ];

  return (
    <>
      {featureItems.map((item) => (
        <Tooltip
          key={item.info}
          showArrow
          content={item.info}
          placement="left-start"
          className={`  ${addRaster ? "right-[30rem] bg-bg" : "right-4  "}  `}
        >
          <Button
            isIconOnly
            className="bg-transparent "
            onClick={() => {
              switch (item.info) {
                case 'Play':
                  handleNextLayer();
                  break;
                case 'Compare':
                  dispatch(updateCompareState(true))
                  break;
                default:
                  break;
              }
            }}
          >
            {player ? <ReactSVG src={item.icon2} /> : <ReactSVG src={item.icon} />}
          </Button>
        </Tooltip>
      ))}
    </>
  );
}
