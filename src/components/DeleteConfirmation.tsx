import React from "react";
import { toast } from "react-hot-toast";

type DeleteConfirmationProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onConfirm,
  onCancel,
}) => {
  const handleConfirm = () => {
    onConfirm();
    toast.dismiss();
  };

  const handleCancel = () => {
    onCancel();
    toast.dismiss();
  };

  return (
    <div className="toast-popup">
      <h3>Are you sure you want to delete these files?</h3>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default DeleteConfirmation;
