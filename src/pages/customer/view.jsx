import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import AddCustomerDialog from '@/components/customer/AddCustomerDialog';
import EditCustomerDialog from '@/components/customer/EditCustomerDialog';
import ViewCustomerDialog from '@/components/customer/ViewCustomerDialog';
import DeleteCustomerDialog from '@/components/customer/DeleteCustomerDialog';

export const customersData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      mobile: "+1 (555) 123-4567",
      date: "01 Jan 2023",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      mobile: "+1 (555) 765-4321",
      date: "15 Feb 2023",
    },
    // Add more customer entries as needed
  ];

const PAGE_SIZE = 5;

const View = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const totalPages = Math.ceil(customersData.length / PAGE_SIZE);

  const currentData = customersData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOpenAddDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseAddDialog = () => {
    setDialogOpen(false);
  };

  const handleOpenEditDialog = (id) => {
    setSelectedCustomerId(id);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleOpenViewDialog = (id) => {
    setSelectedCustomerId(id);
    setViewDialogOpen(true);
  };

  const handleCloseViewDialog = () => {
    setViewDialogOpen(false);
  };

  const handleOpenDeleteDialog = (id) => {
    setSelectedCustomerId(id);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleAddCustomer = (newCustomer) => {
    // Logic to add the new customer
    console.log('New Customer:', newCustomer);
    handleCloseAddDialog();
  };

  const handleEditCustomer = (updatedCustomer) => {
    // Logic to update the customer by ID
    console.log('Updated Customer:', updatedCustomer);
    // handleCloseEditDialog();
  };

  const handleDeleteCustomer = () => {
    // Logic to delete the customer by ID
    console.log('Deleted Customer ID:', selectedCustomerId);
    handleCloseDeleteDialog();
  };

  const getCustomerById = (id) => {
    return customersData.find(customer => customer.id === id);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
          <Typography variant="h6" color="white">
            Customer List
          </Typography>
          <Button
            color="light-blue"
            size="sm"
            className="ml-auto"
            onClick={handleOpenAddDialog}
          >
            Add Customer
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Name", "Email", "Mobile", "Date", "Actions"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((customer, key) => {
                const { id, name, email, mobile, date } = customer;
                const className = `py-3 px-5 ${
                  key === currentData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={id}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {email}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {mobile}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {date}
                      </Typography>
                    </td>
                    <td className={className}>
                      <div className="flex gap-2">
                        <Button
                          color="light-blue"
                          size="sm"
                          onClick={() => handleOpenViewDialog(id)}
                        >
                          View
                        </Button>
                        <Button
                          color="light-blue"
                          size="sm"
                          onClick={() => handleOpenEditDialog(id)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleOpenDeleteDialog(id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                color={currentPage === i + 1 ? "light-blue" : "gray"}
                size="sm"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Typography className="text-xs font-normal text-blue-gray-500">
            Page {currentPage} of {totalPages}
          </Typography>
        </div>
      </Card>

      <AddCustomerDialog
        open={dialogOpen}
        onClose={handleCloseAddDialog}
        onAddCustomer={handleAddCustomer}
      />

      <EditCustomerDialog
        open={editDialogOpen}
        onClose={handleCloseEditDialog}
        customer={getCustomerById(selectedCustomerId)}
        onEditCustomer={handleEditCustomer}
      />

      <ViewCustomerDialog
        open={viewDialogOpen}
        onClose={handleCloseViewDialog}
        customer={getCustomerById(selectedCustomerId)}
      />

      <DeleteCustomerDialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onDeleteCustomer={handleDeleteCustomer}
      />
    </div>
  );
};

export default View;
