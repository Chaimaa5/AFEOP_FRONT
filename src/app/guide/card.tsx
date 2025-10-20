import { Button, Card, CardBody, Progress, Select, SelectItem, Slider } from "@nextui-org/react";
import { useState } from "react";
import map from "../../assets/svg/map.svg"
import { Divider, Steps } from "antd";
import guideVD from "../../assets/video/guide.mov"
import { useNavigate } from "react-router-dom";







export default function GuideCard() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const onChange = (value: number) => {
    setCurrent(value);
  };
  const description = '';

  return (
    <Card
    isBlurred
    className="border-none dark:bg-default-100/50 w-full h-screen p-0" // Ensuring it takes the full height
    shadow="sm"
    >
      <CardBody className="h-full  p-0">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center h-full " >


          <div className="flex flex-col col-span-6 md:col-span-6 p-20">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-0">
                {/* <h3 className="font-semibold text-foreground/90">Daily Mix</h3> */}
                <h1 className="text-large font-medium mt-2">Welcome to  AFEOP</h1>
                <p className="text-small text-foreground/80">Your advanced tool for dynamic geospatial data visualization. Get ready to explore comprehensive datasets through intuitive map-based interfaces.</p>

              </div>

            </div>
            <div className="flex  flex-col mt-6 gap-2  ">
              <Steps
                current={current}
                onChange={onChange}
                items={[
                  {
                    title: 'Define Your Area of Interest',
                    description,
                  },
                  {
                    title: 'Select Data Variables',
                    description,
                  },
                  {
                    title: 'Specify the Time Period',
                    description,
                  },
                  {
                    title: 'Visualize Geospatial Data',
                    description,
                  },
                ]}
              />

              <Divider />

              <Steps
                current={current}
                onChange={onChange}
                direction="vertical"
                items={[
                  {
                    title: 'Define Your Area of Interest',
                    description: 'Begin by selecting a predefined region on the map or use our drawing tool to customize your own area. This region will be the focus for your data analysis and visualization.',
                  },
                  {
                    title: 'Select Data Variables',
                    description: 'Choose the variables you wish to analyze, such as temperature, precipitation, or land use. Our portal offers a diverse range of geospatial data sets tailored to your specific needs.',
                  },
                  {
                    title: 'Specify the Time Period',
                    description: 'Determine the time frame for your data analysis. You can select specific dates for historical data review or set a range for ongoing projects.',
                  },
                  {
                    title: 'Visualize Geospatial Data',
                    description: 'View your selected data as high-resolution rasters or detailed time series. Utilize our visualization tools to gain insights and make informed decisions based on real-time geospatial analysis.',
                  },
                ]}
              />

              <Button onClick={() => navigate('/app')} size="sm" className="bg-darkblue text-white rounded-full  w-[7rem]">Proceed</Button>



            </div>

          </div>
          <div className="relative col-span-6 md:col-span-6 p-0 h-full w-[100%]">
  <video
    className="w-full h-full object-cover"
    src={guideVD}
    autoPlay
    loop
    muted
  />
</div>
        </div>
      </CardBody>
    </Card>
  );
}

