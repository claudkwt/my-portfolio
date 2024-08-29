import { Button } from '@/app/ui/button';
import { SquareX } from 'lucide-react';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 h-screen w-screen">
      <div className="relative max-h-full max-w-full">
        <Button
          onClick={onClose} 
          variant={"default"}
          className="absolute top-0 right-0 m-4 p-2 bg-white bg-opacity-50 rounded-xl"
        >
          <SquareX />
        </Button>
        <img src={imageUrl} alt="Full Screen" className="max-h-screen max-w-screen" />
      </div>
    </div>
  );
};

export default Modal;
