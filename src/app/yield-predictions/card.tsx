import { Button, Card, CardBody, Select, SelectItem, Slider } from "@nextui-org/react";
import React from "react";
import yieldImg from "../../assets/images/YieldBg.png"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateForecastDate } from "../../store/features/forecastSlice";




export default function YieldCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card
      isBlurred
      className="border-none  dark:bg-default-100/50 w-[100%] h-[100%] bg-[#3bf6790f] "
      shadow="sm"
    >
      <CardBody className="h-full  p-0">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
         

          <div className="flex flex-col col-span-6 md:col-span-6 ">
            <div className="flex justify-between items-start px-40">
              <div className="flex flex-col gap-0">
                {/* <h3 className="font-semibold text-foreground/90">Daily Mix</h3> */}
                <h1 className="text-4xl font-bold mt-2 ">Explore Yield Predictions Across Morocco</h1>
                <p className="text-medium text-foreground/80">Please provide the following details to get a personalized yield prediction visualization.</p>
               
              </div>
              
            </div>

            <div className="flex  mt-6 gap-2  px-40">
            <Select
                    label=""
                    radius="full"
                    placeholder="Select Year"
                    labelPlacement="outside"
                    className=" w-[88%] font-poppins "
                    classNames={{innerWrapper:"bg-white", trigger:"bg-white"}}
                    disableSelectorIconRotation
                    aria-label="Select layer"
                    // variant="bordered"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value) {
                          dispatch(updateForecastDate(value)); 
                        }
                      }}
                >
                   <SelectItem key="1" value="2021">
                            2021
                        </SelectItem>
                        <SelectItem key="2" value="2022">
                            2022
                        </SelectItem>
                        <SelectItem key="3" value="2023" >
                            2023
                        </SelectItem>
                     
                </Select>
        <Button    size="sm" className="mt-2 bg-darkblue text-white w-[20%] rounded-full" onClick={() => {navigate('/forecast')}}>Proceed</Button>

             
            
            </div>

          </div>
          <div className="relative col-span-6 md:col-span-6 w-[100%]">
            <img
            className="w-[100%] object-cover"
              src={yieldImg}
             
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

