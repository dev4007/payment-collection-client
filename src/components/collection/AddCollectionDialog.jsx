// components/AddCustomerDialog.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addCollection, collection } from '@/store/action/collection.action';

// Validation schema using Yup
const validationSchema = Yup.object({
  customerName: Yup.string().required('Name is required'),
  amount: Yup.string().required('Amount is required'),
  date: Yup.string().required('Date is required'),
});

const AddCollectionDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await dispatch(collection());
  };

  const formik = useFormik({
    initialValues: {
      customerName: '',
      amount: '',
      date: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const success = await dispatch(addCollection({ ...values }));
      if (success) {
        resetForm(); // Clear the form on success
        onClose(); // Close dialog if customer was added successfully
        fetchData();
      }
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Collection</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} className="space-y-4 mt-3">
          <TextField
            label="CustomerName"
            name="customerName"
            value={formik.values.customerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            required
            error={formik.touched.customerName && Boolean(formik.errors.customerName)}
            helperText={formik.touched.customerName && formik.errors.customerName}
          />
          <TextField
            label="Amount"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            required
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
       
          <TextField
            label="Date"
            name="date"
            type="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}  style={{
          backgroundColor: 'green', // Adjust as needed
          color:"#fff"
        }}
      >
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={formik.handleSubmit}
          color="primary"
          variant="contained"
          disabled={formik.isSubmitting}
          style={{
            backgroundColor: formik.isSubmitting ? '#1976d2' : '#1976d2', // Adjust as needed
          }}
        >
          {formik.isSubmitting ? (
            <CircularProgress size={24} style={{ color: '#fff' }} />
          ) : (
            'Add'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCollectionDialog;
