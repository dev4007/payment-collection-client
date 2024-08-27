

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import AddSalespersonDialog from '@/components/salesperson/AddSalespersonDialog ';
import EditSalespersonDialog from '@/components/salesperson/EditSalespersonDialog';
import ViewSalespersonDialog from '@/components/salesperson/ViewSalespersonDialog';
import DeleteSalespersonDialog from '@/components/salesperson/DeleteSalespersonDialog ';


export const salespersonsData = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      mobile: "+1 (555) 987-6543",
      date: "20 Mar 2023",
    },
    {
      id: 2,
      name: "Bob Brown",
      email: "bobbrown@example.com",
      mobile: "+1 (555) 456-7890",
      date: "25 Apr 2023",
    },
    // Add more salesperson entries as needed
  ];

const PAGE_SIZE = 5;

const ViewSalesman = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSalespersonId, setSelectedSalespersonId] = useState(null);

  const totalPages = Math.ceil(salespersonsData.length / PAGE_SIZE);

  const currentData = salespersonsData.slice(
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
    setSelectedSalespersonId(id);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleOpenViewDialog = (id) => {
    setSelectedSalespersonId(id);
    setViewDialogOpen(true);
  };

  const handleCloseViewDialog = () => {
    setViewDialogOpen(false);
  };

  const handleOpenDeleteDialog = (id) => {
    setSelectedSalespersonId(id);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleAddSalesperson = (newSalesperson) => {
    // Logic to add the new salesperson
    console.log('New Salesperson:', newSalesperson);
    handleCloseAddDialog();
  };

  const handleEditSalesperson = (updatedSalesperson) => {
    // Logic to update the salesperson by ID
    console.log('Updated Salesperson:', updatedSalesperson);
    // handleCloseEditDialog();
  };

  const handleDeleteSalesperson = () => {
    // Logic to delete the salesperson by ID
    console.log('Deleted Salesperson ID:', selectedSalespersonId);
    handleCloseDeleteDialog();
  };

  const getSalespersonById = (id) => {
    return salespersonsData.find(salesperson => salesperson.id === id);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
          <Typography variant="h6" color="white">
            Salesperson List
          </Typography>
          <Button
            color="light-blue"
            size="sm"
            className="ml-auto"
            onClick={handleOpenAddDialog}
          >
            Add Salesperson
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
              {currentData.map((salesperson, key) => {
                const { id, name, email, mobile, date } = salesperson;
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

      <AddSalespersonDialog
        open={dialogOpen}
        onClose={handleCloseAddDialog}
        onAddSalesperson={handleAddSalesperson}
      />

      <EditSalespersonDialog
        open={editDialogOpen}
        onClose={handleCloseEditDialog}
        salesperson={getSalespersonById(selectedSalespersonId)}
        onEditSalesperson={handleEditSalesperson}
      />

      <ViewSalespersonDialog
        open={viewDialogOpen}
        onClose={handleCloseViewDialog}
        salesperson={getSalespersonById(selectedSalespersonId)}
      />

      <DeleteSalespersonDialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onDeleteSalesperson={handleDeleteSalesperson}
      />
    </div>
  );
};

export default ViewSalesman;
