import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editCollection ,collection} from '@/store/action/collection.action';

const EditCollectionDialog = ({ open, onClose, collectionData }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    customerName: Yup.string().required('Name is required'),
    amount: Yup.string().required('Amount is required'),
    date: Yup.string().required('Date is required'),

  });
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
    onSubmit:async (values) => {
      await dispatch(editCollection(collectionData._id,values));
      onClose();
      fetchData()
    },
  });

  useEffect(() => {
    if (collectionData) {
      formik.setValues({ ...collectionData });
    }
  }, [collectionData]);


  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Customer</DialogTitle>
      <DialogContent>
        <TextField
          label="CustomerName"
          name="customerName"
          value={formik.values.customerName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.customerName && Boolean(formik.errors.customerName)}
          helperText={formik.touched.customerName && formik.errors.customerName}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          name="amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          fullWidth
          margin="normal"
        />
       
      </DialogContent>
      <DialogActions>
        <Button onClick={formik.handleSubmit} color="primary" variant="contained">Save</Button>
        <Button onClick={onClose} color="secondary" variant="outlined">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCollectionDialog;
