
import React, { useEffect, useState } from 'react';
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

import { salesman } from '@/store/action/salesman.action';
import { useDispatch, useSelector } from 'react-redux';



const PAGE_SIZE = 5;

const ViewSalesman = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSalesmanId, setSelectedSalesmanId] = useState(null);

  const dispatch = useDispatch()

  const salesmanData = useSelector((state) => state.salesmanReducer.salesman);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(salesman());
    };
  
    fetchData();
  }, []); // Empty dependency array ensures it runs only once when the component mounts.
  
  const totalPages = Math.ceil(salesmanData?.length / PAGE_SIZE);

  const currentData = salesmanData?.slice(
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
    setSelectedSalesmanId(id);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };

  const handleOpenViewDialog = (id) => {
    setSelectedSalesmanId(id);
    setViewDialogOpen(true);
  };

  const handleCloseViewDialog = () => {
    setViewDialogOpen(false);
  };

  const handleOpenDeleteDialog = (id) => {
    setSelectedSalesmanId(id);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleAddSalesman= (newSalesman) => {
    // Logic to add the new Salesman
    console.log('New Salesman:', newSalesman);
    handleCloseAddDialog();
  };

  const handleEditSalesman= (updatedSalesman) => {
    // Logic to update the Salesmanby ID
    console.log('Updated Salesman:', updatedSalesman);
    // handleCloseEditDialog();
  };

  const handleDeleteSalesman= () => {
    handleCloseDeleteDialog();
  };

  const getSalesmanById = (id) => {
    return salesmanData?.find(salesman => salesman._id === id);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
          <Typography variant="h6" color="white">
            Salesman List
          </Typography>
          <Button
            color="light-blue"
            size="sm"
            className="ml-auto"
            onClick={handleOpenAddDialog}
          >
            Add Salesman
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Name", "Email", "Mobile", "Actions"].map((el) => (
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
              {currentData?.map((salesman, key) => {
                const { _id, name, email, mobile } = salesman;
                const className = `py-3 px-5 ${
                  key === currentData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={_id}>
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
                      <div className="flex gap-2">
                        <Button
                          color="light-blue"
                          size="sm"
                          onClick={() => handleOpenViewDialog(_id)}
                        >
                          View
                        </Button>
                        <Button
                          color="light-blue"
                          size="sm"
                          onClick={() => handleOpenEditDialog(_id)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleOpenDeleteDialog(_id)}
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
       />

      <EditSalespersonDialog
        open={editDialogOpen}
        onClose={handleCloseEditDialog}
        salesmanData={getSalesmanById(selectedSalesmanId)}
    
      />

      <ViewSalespersonDialog
        open={viewDialogOpen}
        onClose={handleCloseViewDialog}
        salesman={getSalesmanById(selectedSalesmanId)}
      />

      <DeleteSalespersonDialog 
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onDeleteSalesman={selectedSalesmanId}
      />
    </div>
  );
};

export default ViewSalesman;

