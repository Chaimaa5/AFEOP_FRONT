import { Text } from "../index";

const Hero: React.FC<{ Heading: string }> = ({ Heading }) => {
    return (
        <div className="flex items-center justify-center bg-gray-100 lg:h-[400px] h-[525px] md:h-[749px] md:px-5  relative w-full ">
         
        <div
          className=" flex flex-col h-full inset-[0] items-center justify-center m-auto md:pl-10 sm:pl-5  w-full"
        >
            <div className="flex flex-col gap-[13px] items-center justify-center">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtLatoBold48"
              >
                {Heading}
              </Text>
              <Text
                className="capitalize text-base text-black-900"
                size="txtMontserratRegular16"
              >Home/
               {Heading}
              </Text>
            </div>

        </div>
      
      </div>
        )
}

export default Hero;