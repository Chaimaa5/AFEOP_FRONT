import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { useEffect, useState } from "react";
import Axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import Titiler from "../api/titiler";
import { updateVaribleData } from "../../store/features/analysisSlice";
// import {AddNoteIcon} from "./AddNoteIcon.jsx";
// import {CopyDocumentIcon} from "./CopyDocumentIcon.jsx";
// import {EditDocumentIcon} from "./EditDocumentIcon.jsx";
// import {DeleteDocumentIcon} from "./DeleteDocumentIcon.jsx";

export default function Description() {
  const rasterUrl = useSelector((state: any) => state.raster.rasterUrl);
  const variableData = useSelector((state: any) => state.analysis.variableData);
  const dispatch = useDispatch();
  let url = '';
  const selectedOption = useSelector((state: any) => state.form.selectedOption);

  let   match= ''
  useEffect(() => {
    if(rasterUrl){

       match = rasterUrl.match(/SM:(\d{8})/);
  
      if (match && match[1]) {
        url = `${match[1]}.tif`;
      }
    }


    const fetchInfo = async () => {
      const formData = new FormData();
      formData.append("product", selectedOption);

      await Axios.post("products/variable/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        if (response.status === 200) {
          dispatch(updateVaribleData(response.data))


        }

      }).catch((error) => {
      });

    };
    fetchInfo();


  }
    , [rasterUrl]);
  return (
    <>
      {
        variableData &&
        <ListboxWrapper >

          <Listbox aria-label="Listbox menu with descriptions" className="p-0">
            <ListboxItem
              key="delete"
              className="text-primary"
              color="primary"
              // showDivider

              description={variableData.Abbreviation}

            >
              Product variable
            </ListboxItem>
            <ListboxItem
              key="new"

              description={variableData.ResolutionSpace}
            >
              Resolution
            </ListboxItem>

            <ListboxItem
              key="copy"
              description={variableData.Satellite}
            >
              Satellite
            </ListboxItem>
            <ListboxItem
              key="edit"
              description={variableData.Source}
            >
              Source
            </ListboxItem>


          </Listbox>
        </ListboxWrapper>
      }
    </>


  );
}

