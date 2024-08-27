import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const EditSalespersonDialog = ({ open, onClose, salesperson, onEditSalesperson }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (salesperson) {
      setName(salesperson.name);
      setEmail(salesperson.email);
      setMobile(salesperson.mobile);
      setDate(salesperson.date);
    }
  }, [salesperson]);

  const handleSubmit = () => {
    const updatedSalesperson = { id: salesperson.id, name, email, mobile, date };
    onEditSalesperson(updatedSalesperson);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Salesperson</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mobile"
          fullWidth
          margin="normal"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditSalespersonDialog;
