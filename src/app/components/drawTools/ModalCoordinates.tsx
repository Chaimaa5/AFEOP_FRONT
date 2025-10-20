import { Button, Modal, ModalContent, ModalFooter, ModalBody, Textarea } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { updateCoorInput, updateShape } from "../../../store/features/drawSlice";
import { RootState } from "../../../store/store";

const ModalCoordinatesInput = ({ isOpen, onClose }: any) => {
  const dispatch = useDispatch();
  const coordinatesInput = useSelector((state: RootState) => state.draw.coordinatesInput);

  const handleAddShape = () => {
    try {
      const parsedInput = JSON.parse(coordinatesInput);
      if (Array.isArray(parsedInput)) {
        dispatch(updateShape({ type: "polygon", coordinates: parsedInput, search: false }));
      } else {
        alert("Invalid format.");
      }
      onClose();
    } catch (error) {
      alert("Invalid input. Ensure valid JSON.");
    }
  };

  return (
    <Modal size="xs" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <Textarea
                value={coordinatesInput}
                onChange={(e) => dispatch(updateCoorInput(e.target.value))}
                label="Enter coordinates"
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleAddShape}>
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalCoordinatesInput;
