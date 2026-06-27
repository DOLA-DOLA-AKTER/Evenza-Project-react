import React from 'react'
import playButton from '../assets/play-button.png'
import evenza from '../assets/evenza.mp4'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IoIosClose } from "react-icons/io";



const Video = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
    height: '600px',
    border: 'none',
    outline: 'none',
    boxShadow: "none",
  };


  return (
    <div className='bg-[url(./Components/assets/bg-img-2.png)] bg-no-repeat bg-center bg-cover w-full lg:h-200 h-100 flex items-center justify-center'>

      <div onClick={handleOpen} className='bg-primary rounded-full flex items-center justify-center md:w-25 w-20 md:h-25 h-20 animate-pulse cursor-pointer'>
        <div>
          <img src={playButton} alt="playButton" />
        </div>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='relative w-250 block mx-auto'>
          <video className='w-full object-cover' src={evenza} controls autoPlay ></video>
          <div className='absolute top-0 right-0'>
            <button
              onClick={handleClose}
              className='hover:bg-red-500 bg-gray text-3xl font-bold p-2.5 cursor-pointer duration-300'>
              <IoIosClose />
            </button>
          </div>
        </Box>
      </Modal>

    </div>
  )
}

export default Video
