// components/AddCustomerDialog.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';

const AddCustomerDialog = ({ open, onClose, onAddCustomer }) => {
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    mobile: '',
    online: false,
    date: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCustomer(newCustomer);
    setNewCustomer({
      name: '',
      email: '',
      mobile: '',
      online: false,
      date: ''
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Customer</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Name"
            name="name"
            value={newCustomer.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={newCustomer.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Mobile"
            name="mobile"
            value={newCustomer.mobile}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={newCustomer.date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
       
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="gray">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="light-blue">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCustomerDialog;
