// import React, { useState } from "react";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

// export default function CoordinatesInput() {

//   const [coordinatesInput, setCoordinatesInput] = useState('');
//   const [shape, setShape] = useState(null);
//   const handleAddShape = () => {
//     try {
//       const parsedInput = JSON.parse(coordinatesInput);
//       if (Array.isArray(parsedInput) && parsedInput.length === 2 && typeof parsedInput[0] === 'number' && typeof parsedInput[1] === 'number') {
//         setShape({ type: 'marker', coordinates: parsedInput });
//       }
//       else {
//         alert("Invalid coordinates format. Please provide a point [lat, lon].");
//       }
//       // onClose();
//     } catch (error) {
//       alert("Invalid input. Ensure the input is a valid JSON format: [lat, lon] for points or [[lat1, lon1].");
//     }
//   };

//   return (
//     <>
     
//      <Input
//                labelPlacement="inside"
//               value={coordinatesInput}
//               onChange={(e) => setCoordinatesInput(e.target.value)}
//               type="text"
//               label=" Enter coordinates (e.g., [51.505, -0.09] or [[51.5, -0.1], [51.5, -0.12], ...])"
//               size="lg"
           
//             />

// <Button isIconOnly color="danger" aria-label="Like" onClick={handleAddShape}>
//         {/* <HeartIcon /> */}
//       </Button>  

//     </>
//   );
// }
