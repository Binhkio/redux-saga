import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button } from '@mui/material';
import { Modal } from 'antd';
import { useState } from 'react';

const UserModal = ({ name = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        color='secondary'
        variant='text'
        onClick={showModal}
        startIcon={<InfoOutlinedIcon/>}
      >
        {name.length > 8 ? name.slice(0, 6).concat('..'): name}
      </Button>
      <Modal zIndex={2000} title="User infomation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default UserModal;
