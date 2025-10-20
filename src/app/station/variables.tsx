import snow from "../../assets/icons/snow.svg";
import wind from "../../assets/icons/wind.svg";
import sun from "../../assets/icons/sun.svg";
import drop from "../../assets/icons/drop.svg";

interface Variables {
    id: string;
    icon: string;
    info: string;
    var: string;
  }
const variables: Variables[] = [
    {
      id: '1',
      icon: sun,
      info: 'Temperature',
      var: '2'
    },
    {
        id: '2',
      icon: snow,
      info: 'Snow',
      var: '3'
    },
    {
        id: '3',
      icon: wind,
      info: 'Wind Speed',
      var: '5'
    },
    {
        id: '4',
      icon: drop,
      info: 'Prepitation',
      var: '4'
    },

  ];

export default variables;