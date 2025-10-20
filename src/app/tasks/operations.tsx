import {Accordion, AccordionItem, Divider, Input} from "@nextui-org/react";
import Description from "./description";
import "./index.scss";
import Analysis from "./analysis";
import Search from "antd/es/transfer/search";
import SearchInput from "./search";
import LayerControl from "./layerControl";
export default function Operations() {

  return (
    <Accordion  className="font-serif font-normal text-xs p-0  bg-bg" defaultExpandedKeys={["2", "1", "3"]} >
      {/* <AccordionItem key="1" aria-label="Description" title="Description" className="font-poppins text-xs p-0">
     <Description></Description>
      </AccordionItem> */}
      
    

      <AccordionItem key="3" aria-label="Search" title="Search" >
        <SearchInput/>

      </AccordionItem>
      <AccordionItem key="4" aria-label="Layers" title="Layers">
        
        <LayerControl/>
      </AccordionItem>
      {/* <AccordionItem key="5" aria-label="Analysis" title="Analysis">
        <Analysis/>
      </AccordionItem> */}

      
    </Accordion>
  );
}