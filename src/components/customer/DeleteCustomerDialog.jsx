import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from  '@mui/material';

const DeleteCustomerDialog = ({ open, onClose, onDeleteCustomer }) => {
  const handleDelete = () => {
    onDeleteCustomer();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Customer</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this customer?</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="red" onClick={handleDelete}>Delete</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCustomerDialog;
