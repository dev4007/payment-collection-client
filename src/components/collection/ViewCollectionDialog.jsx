import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

const ViewCollectionDialog = ({ open, onClose, collection }) => {
 console.log("🚀 ~ ViewCollectionDialog ~ collection:", collection)
 return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>View Collection</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6"><strong>Customer Name:</strong> {collection?.customerName || 'N/A'}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1"><strong>Amount:</strong> {collection?.amount || 'N/A'}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1"><strong>Date:</strong> {collection?.date || 'N/A'}</Typography>
        </Box>
       
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewCollectionDialog;
