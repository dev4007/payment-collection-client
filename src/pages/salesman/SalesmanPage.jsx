import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Typography, Select, Option } from "@material-tailwind/react";
import { collection, userData } from '@/store/action/collection.action';
import { useDispatch, useSelector } from 'react-redux';

export function SalesmanPage() {
  const [collectedAmount, setCollectedAmount] = useState('');
  const [date, setDate] = useState('');
  const [customerId, setCustomerId] = useState(''); // Change state to store customer ID

  const customers = useSelector(state => state.collectionReducer.userList); // Adjust path based on your store structure

  const navigate = useNavigate();
  const dispatch = useDispatch();

 const handleReset = () =>{
    setCollectedAmount('')
    setDate('')
    setCustomerId('')
 } 

  // Fetch customer data when the component mounts
  useEffect(() => {
    const fetchCustomers = async () => {
      await dispatch(userData());
    };

    fetchCustomers();
  }, [dispatch]);

  const handleLogout = () => {
   localStorage.clear()
    navigate('/sign-in');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(collection(collectedAmount, date, customerId)); // Pass ID to backend
    if(res){
        handleReset()
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <div className="text-center mb-6">
          <Typography variant="h2" className="font-bold mb-2">Dashboard</Typography>
          <Typography variant="small" color="blue-gray" className="font-medium">Welcome, Salesman</Typography>
        </div>

        <Button onClick={handleLogout} className="mb-6" fullWidth>
          Logout
        </Button>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Typography variant="small" color="blue-gray" className="font-medium">Customer Name</Typography>
              <Select
                size="lg"
                value={customerId}
                onChange={(value) => setCustomerId(value)} // Store customer ID
                placeholder="Select customer"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              >
                {customers.map((customer) => (
                  <Option key={customer._id} value={customer._id}> {/* Use ID as value */}
                    {customer.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="small" color="blue-gray" className="font-medium">Collected Amount</Typography>
              <Input
                size="lg"
                type="number"
                value={collectedAmount}
                onChange={(e) => setCollectedAmount(e.target.value)}
                placeholder="Enter amount"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="small" color="blue-gray" className="font-medium">Date</Typography>
              <Input
                size="lg"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SalesmanPage;
