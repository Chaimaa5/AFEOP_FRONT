import download from "../../assets/icons/download.svg";
import view from "../../assets/icons/view.svg";
import projection from "../../assets/icons/projection.svg";

interface Actions {
    id: string;
    icon: string;
    info: string;
    var: string;
  }
const actions: Actions[] = [
    {
      id: '1',
      icon: view,
      info: 'View PNG',
      var: '2'
    },
    {
        id: '2',
      icon: projection,
      info: 'View COG',
      var: 'WS'
    },
    {
        id: '3',
      icon: download,
      info: 'Download',
      var: '1'
    },


  ];

export default actions;