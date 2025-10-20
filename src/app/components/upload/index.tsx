import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,  } from "@nextui-org/react";
import FileUpload from "./fileUpload";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import FileUploader from "./upload";
import { updateUpModal } from "../../../store/features/uploadSlice";

export default function UploadFile(){

    const upModal = useSelector((state: RootState) => state.upload.upModal);
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(updateUpModal(false));
    }
    return (
    <Modal
    size="md"
    isOpen={upModal}
    onOpenChange={onClose}
    // onClose={upModal}
  >

    <ModalContent className="flex justify-center items-center">
      {/* {(onClose) => ( */}
        <>
          <ModalBody className="flex h-[100%] p-10">
<FileUpload/>
          </ModalBody>
         
        </>
      {/* )} */}
    </ModalContent>
  </Modal>
    );
}