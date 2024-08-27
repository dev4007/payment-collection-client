import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@mui/material';

const DeleteSalespersonDialog = ({ open, onClose, onDeleteSalesperson }) => {
  const handleDelete = () => {
    onDeleteSalesperson();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Salesperson</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this salesperson?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleDelete} color="secondary">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteSalespersonDialog;
