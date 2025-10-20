import {DatePicker, RadioGroup, Radio, ButtonGroup, Button, cn} from "@nextui-org/react";
import {startOfWeek, startOfMonth, getLocalTimeZone, today} from "@internationalized/date";
import {useLocale, useDateFormatter} from "@react-aria/i18n";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnalysis, setLayer } from "../../../store/features/fusedSM";
import Axios from "../../api/axios";

export default function AppDatePicker() {
  let defaultDate = today(getLocalTimeZone());
  const dispatch = useDispatch();
  const [value, setDateValue] = useState(defaultDate);
  const setValue = (date) => {
    setDateValue(date);
    // const year = date.year.toString();
    const month = date.month.toString().padStart(2, '0'); 
    const day = date.day.toString().padStart(2, '0');   

    dispatch(setLayer(`FusedSM:soil_moisture_${date.year}_${month}_${day}`));

    Axios.post(`soil/values/`, {
      date: `soil_moisture_${date.year}_${month}_${day}`
    }).then((response) => {
      console.log('Data fetched successfully:', response.data);
      dispatch(setAnalysis(response.data));
    }
    ).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  let {locale} = useLocale();
  let formatter = useDateFormatter({dateStyle: "full"});

  let now = today(getLocalTimeZone());
  let nextWeek = startOfWeek(now.add({weeks: 1}), locale);
  let nextMonth = startOfMonth(now.add({months: 1}));


  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <DatePicker
     
        CalendarTopContent={
          <ButtonGroup
            fullWidth
            className="px-3 pb-2 pt-3 [&>button]:text-default-500 [&>button]:border-default-200/60 bg-content1"
            radius="full"
            size="sm"
            // classNames={{innerWrapper: 'bg-bg', trigger: 'bg-bg'}} 
            variant="bordered"
          >
            <Button onPress={() => setValue(now)}>Today</Button>
            <Button onPress={() => setValue(nextWeek)}>Next week</Button>
            <Button onPress={() => setValue(nextMonth)}>Next month</Button>
          </ButtonGroup>
        }
       radius="full"
        calendarProps={{
          focusedValue: value,
          onFocusChange: setValue,
          nextButtonProps: {
            variant: "bordered",
          },
          prevButtonProps: {
            variant: "bordered",
          },
        }}
        label=""
        value={value}
        onChange={setValue}
        classNames={{ innerWrapper: 'bg-bg ', calendar: 'bg-bg' , selectorButton: 'bg-bg', input: 'bg-bg', trigger: 'bg-bg' }} 
      />
      <p className=" text-xs text-white">
        Selected date: {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
      </p>
    </div>
  );
}

