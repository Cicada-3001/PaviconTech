import axios from "axios";

const customerUrl = "https://pavicon-tech.vercel.app/api/customer";
//const customerUrl = `${process.env.BASE_URL}/api/customer`

export const createCustomer = async (data) => {
  return await axios.post(customerUrl, data);
};

export const updateCustomer = async (data) => {
  return await axios.put(customerUrl, data);
};

export const getCustomers = async () => {
  return await axios.get(customerUrl);
};


export const deleteCustomer = async (id) => {
  return await axios.delete(customerUrl, { data: { id } });
};
