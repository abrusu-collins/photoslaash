import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How many images will you compress?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="modal-content">
              <img src="/images/Shrug-bro.svg" alt="" />

              <div className="modal-buttons">
                <Link href="/single">Single Image</Link>
                <Link href="/multiple">Multiple Images</Link>
              </div>
            </div>
          </ModalBody>

          <ModalFooter background={"white"} borderRadius={"10px"}>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="hero">
        <img src="/images/star.png" className="star" alt="" />
        <img src="/images/avatar.png" className="avatar" alt="" />

        <p className="hero-title">PhotoSlaash</p>
        <p className="hero-text">
          Photoslaash is an image compression app, the perfect solution to
          optimize your images without compromising quality. Effortlessly reduce
          file sizes while preserving the visual integrity of your photos,
          making them easier to store, share, and upload.
        </p>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            onOpen();
          }}
        >
          Upload an Image
        </a>
        <div className="image-grid">
          <div>
            <img src="/images/girl.jpg" alt="girls" />
            <p>3.28MB</p>
          </div>
          <BsArrowRight size={100} />
          <div>
            <img src="/images/girl4.jpg" alt="girl" />
            <p>229KB</p>
          </div>
        </div>
        {/* <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            onOpen();
          }}
        >
          Upload an Image
        </a> */}
      </div>
    </>
  );
}

export default Hero;
