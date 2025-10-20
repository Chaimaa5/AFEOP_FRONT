import React from "react";
import { Button, Img, List, Text } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { ApplcationTexts } from "../../particles/DataLists";
import ScientificCard from "../../components/ScientificCard";
// import  { ApplicationTexts }from "../../particles/ApplicationTexts";
const ApplicationsPage: React.FC = () => {
  
    return (
        <div className="bg-gray-100 flex flex-col justify-between">
            <Header />
            <Hero Heading="Scientific Applications" />

            <div className=" bg-white flex flex-col font-cabin mt-8  relative w-[100%]">
                <div className=" flex flex-col gap-[7.47px]  items-center justify-end max-w-[1000px] mx-auto md:px-10 sm:px-5 px-5 py-16 w-full">
                    <div className="flex flex-col gap-[25px] items-center justify-start md:w-full w-[80%]">
                        <div className="flex flex-col items-start justify-start  w-full   ">
                            <Text
                                className="sm:text-[29.61px] md:text-[31.61px] text-[33.61px] text-gray-900 w-auto"
                                size="txtCabinBold3361"
                            >
                                Scientific Applications
                            </Text>
                            <Text
                                className="text-[11.95px] text-gray-700_01 w-auto"
                                size="txtLatoRegular1195"
                            >
                                Four main scientific applications of the selected EO data.
                            </Text>
                        </div>
                        <List
                            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1891px] w-[100%]"
                            orientation="horizontal"
                        >
                            <ScientificCard Publication={ApplcationTexts.One}/>
                          
                            <div className="bg-white border border-gray-200 border-solid flex flex-col items-start justify-start px-[17.18px] py-[26.89px] rounded-[14px] w-[100%]">
                                <div className="flex flex-col gap-[11.2px] items-start justify-start w-auto">
                                    <div className="flex flex-col gap-[16.43px] items-start justify-start w-auto">
                                        <Button
                                            className="flex h-[39px] items-center justify-center w-[39px]"
                                            shape="round"
                                        >
                                            <Img src="images/img_icon.svg" alt="icon" />
                                        </Button>
                                        <Text
                                            className="text-[14.94px] text-gray-900 w-auto"
                                            size="txtCabinSemiBold1494"
                                        >
                                            Drainage/Evaporation
                                        </Text>
                                    </div>
                                    <div className="flex flex-col font-lato items-start justify-start w-auto">
                                        <Text
                                            className="leading-[147.50%] max-w-[100%] md:max-w-full text-[11.95px] text-gray-700_01"
                                            size="txtLatoRegular1195"
                                        >
                                            <li className="flex flex-col gap-[11.95px] items-start justify-start w-[100%]">Corrected satellite precipitation products.</li>
                                            <li className="flex flex-col gap-[11.95px] items-start justify-start w-[100%]"> Observed discharge for majorMoroccan basins</li>
                                            <li className="flex flex-col gap-[11.95px] items-start justify-start w-[100%]">Daily satellite-based soil moisture
                                                time series</li>


                                        </Text>
                                    </div>
                                </div>
                                <div className=" flex mt-auto font-lato gap-[7.47px] items-center justify-start w-[100%]">
                                    <a
                                        href="map"
                                        className="text-[13.44px] text-gray-900 w-auto justify-start items-start"
                                    >
                                        <Text size="txtLatoSemiBold1344">Visualize</Text>
                                    </a>                                            <Img
                                        className="h-[7px] w-[9px]"
                                        src="images/img_arrowright.svg"
                                        alt="arrowright"
                                    />
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 border-solid flex flex-col items-start justify-start px-[17.18px] py-[26.89px] rounded-[14px] w-[100%]">
                                <div className="flex flex-col gap-[11.95px] items-start justify-start w-[100%]">
                                    <div className="flex flex-col gap-[16.43px] items-start justify-start w-auto">
                                        <Button
                                            className="flex h-[39px] items-center justify-center w-[39px]"
                                            shape="round"
                                        >
                                            <Img
                                                className="h-6"
                                                src="images/img_globe.svg"
                                                alt="globe"
                                            />
                                        </Button>
                                        <Text
                                            className="text-[14.94px] text-gray-900 w-auto"
                                            size="txtCabinSemiBold1494"
                                        >
                                            Drought
                                        </Text>
                                    </div>
                                    <div className="flex flex-col font-lato items-start justify-start w-auto">
                                        <Text
                                            className="leading-[147.50%] max-w-[100%] md:max-w-full text-[11.95px] text-gray-700_01"
                                            size="txtLatoRegular1195"
                                        >
                                            <li className="flex flex-col gap-[11.95px] items-start justify-start w-[100%]"> Drought indices over Africa.</li>
                                            <li className="flex flex-col gap-[11.95px] items-start justify-start w-[100%]" > Drought cascade over other basins
                                                in the African continent.</li>
                                        </Text>
                                    </div>

                                </div>
                                <div className=" flex mt-auto font-lato gap-[7.47px] items-center justify-start w-[100%]">
                                    <a
                                        href="map"
                                        className="text-[13.44px] text-gray-900 w-auto justify-start items-start"
                                    >
                                        <Text size="txtLatoSemiBold1344">Visualize</Text>
                                    </a>                                            <Img
                                        className="h-[7px] w-[9px]"
                                        src="images/img_arrowright.svg"
                                        alt="arrowright"
                                    />
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 border-solid flex flex-col items-start justify-start px-[17.18px] py-[26.89px] rounded-[14px] w-auto">
                                <div className="flex flex-col gap-[11.2px] items-start justify-start w-[168px]">
                                    <div className="flex flex-col gap-[16.43px] items-start justify-start w-auto">
                                        <Button
                                            className="flex h-[39px] items-center justify-center w-[39px]"
                                            shape="round"
                                        >
                                            <Img src="images/img_settings.svg" alt="search" />
                                        </Button>
                                        <Text
                                            className="text-[14.94px] text-gray-900 w-auto"
                                            size="txtCabinSemiBold1494"
                                        >
                                            Yield
                                        </Text>
                                    </div>
                                    <div className="flex flex-col font-lato items-start justify-start w-[100%]">
                                        <Text
                                            className="leading-[147.50%] max-w-[100%] md:max-w-full text-[11.95px] text-gray-700_01"
                                            size="txtLatoRegular1195"
                                        >
                                            <li className="flex flex-col gap-[11.95px] items-start justify-start w-[100%]">Map of Yield estimate based on soil moisture status and VOD</li>


                                        </Text>
                                    </div>
                                </div>
                                <div className=" flex mt-auto font-lato gap-[7.47px] items-center justify-start w-[100%]">
                                    <a
                                        href="map"
                                        className="text-[13.44px] text-gray-900 w-auto justify-start items-start"
                                    >
                                        <Text size="txtLatoSemiBold1344">Visualize</Text>
                                    </a>                                            <Img
                                        className="h-[7px] w-[9px]"
                                        src="images/img_arrowright.svg"
                                        alt="arrowright"
                                    />
                                </div>
                            </div>
                        </List>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ApplicationsPage;
