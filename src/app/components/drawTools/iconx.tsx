import polygonIcon from "./../../../assets/icons/polygon.svg";
import pinIcon from "./../../../assets/icons/pin.svg";
import docIcon from "./../../../assets/icons/document.svg";
import trashIcn from "./../../../assets/icons/trash.svg";
import editIcn from "./../../../assets/icons/edit.svg";

interface DrawTool {
    icon: string;
    info: string;
  }
const drawTools: DrawTool[] = [
    {
      icon: polygonIcon,
      info: 'Draw Polygon',
    },
    {
      icon: docIcon,
      info: 'Upload File',
    },
    {
      icon: pinIcon,
      info: 'Pin Marker',
    },
    {
      icon: editIcn,
      info: 'Add Coordinates',
    },
    {
      icon: trashIcn,
      info: 'Delete layer',
    },
  ];

export default drawTools;