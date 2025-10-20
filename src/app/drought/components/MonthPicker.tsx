import React, { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setLayer, setVariable, setAnalysis } from '../../../store/features/drought';
import right from "../../../assets/icons/right.svg";
import { Button } from '@nextui-org/react';
import Axios from '../../api/axios';
import SearchInput from './Search';
type MonthPickerProps = {
  onChange?: (value: { month: number; year: number }) => void;
  initialMonth?: number;
  initialYear?: number;
  minYear?: number;
  maxYear?: number;
};

interface Variables {
  name: string;
  info: string;
}
const variables: Variables[] = [
  {
    name: 'MD',
    info: 'Meteorological Drought',
  },
  {
    name: 'HD',
    info: 'Hydrological Drought',
  },
  {
    name: 'AD',
    info: 'Agricultural Drought',
  },
  {
    name: 'ZNDVI',
    info: 'Vegetation Index',
  },

];
const MonthPicker: React.FC<MonthPickerProps> = ({
  onChange,
  initialMonth = new Date().getMonth() + 1,
  initialYear = new Date().getFullYear(),
  minYear = 2010,
  maxYear = new Date().getFullYear() + 5,
}) => {
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);
  const dispatch = useDispatch();
  const variable = useSelector((state: RootState) => state.Drought.variable);


  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const x = String(e.target.value).padStart(2, '0');
    console.log('Selected month:', x);
    const m = parseInt(e.target.value, 10);
    setMonth(m);
    onChange?.({ month: m, year });
  };

  const handleLayerChange = () => {
    const formattedMonth = String(month).padStart(2, '0');
    const layer = `${variable}:${year}${formattedMonth}`;
    dispatch(setLayer(layer));

    Axios.post(`drought/values/`, {
      product: variable,
      date: `${year}${formattedMonth}`
    }).then((response) => {
      console.log('Response:', response.data);
      dispatch(setAnalysis(response.data));
    }
    ).catch((error) => {
      console.error('Error fetching data:', error);
    });
  };
  return (
    <div className=' flex h-[30px] rounded-full  gap-2 text-black w-[80%] max-w-[80%] justify-center items-center'>
      <Select value={month} onChange={handleMonthChange} size='sm' classNames={{ innerWrapper: 'bg-bg', trigger: 'bg-bg' }} className=" w-[34%]  " aria-label='month' radius="full">
        {Array.from({ length: 12 }, (_, i) => (
          <SelectItem key={i + 1} value={i + 1}>
            {new Date(0, i).toLocaleString('default', { month: 'long' })}
          </SelectItem>
        ))}
      </Select>
      <Select
        selectedKeys={[year]}
        onSelectionChange={(keys) => {
          const selectedYear = Array.from(keys)[0];
          setYear(selectedYear);
        }}
        size="sm"
        aria-label="year"
        radius="full"
        classNames={{ innerWrapper: 'bg-bg', trigger: 'bg-bg' }}
        className="w-[20%]"
      >
        {Array.from({ length: maxYear - minYear + 1 }, (_, i) => {
          const y = (minYear + i).toString();
          return (
            <SelectItem key={y}>
              {y}
            </SelectItem>
          );
        })}
      </Select>

      <Select
        className=" w-[50%]  max-w-[50%]"
        defaultSelectedKeys={["MD"]}
        aria-label="Drought Variables"
        placeholder="Select an variable"
        radius="full"
        classNames={{ innerWrapper: 'bg-bg', trigger: 'bg-bg' }}
        size="sm"
        onChange={(e) => { dispatch(setVariable(e.target.value)) }}
      >
        {variables.map((variable) => (
          <SelectItem key={variable.name} value={variable.name}>
            {variable.info}
          </SelectItem>
        ))}

      </Select>
      <Button isIconOnly onClick={handleLayerChange} radius='full' size="sm" className="mt-2 bg-darkgreen"><img src={right} className="w-[50%] " /></Button>
    </div>
  );
};

export default MonthPicker;

