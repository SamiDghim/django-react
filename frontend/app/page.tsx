"use client"

import { useEffect, useState } from "react";
import api from "./api";
import toast from "react-hot-toast";

type Transaction = {
  id: number;
  text: string;
  amount: number;
  created_at: string;
};


export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const getTransactions = async () => {
    try {
      const response = await api.get<Transaction[]>('transactions/');
      setTransactions(response.data);
      toast.success("Transactions fetched successfully!");
    } catch (error) {
      console.error("Error fetching transactions:", error);
      toast.error("Failed to fetch transactions.");
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const amounts = transactions.map(t => Number(t.amount) || 0);
  const balance = amounts.reduce((acc, item) => acc + item, 0) || 0;
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0) || 0;
  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item, 0) || 0;
  const ratio = income !== 0 ? ((expense / income) * 100).toFixed(2) : "0.00";
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
      // // <button className="btn btn-sm" onClick={getTransactions}>
      // <button className="btn btn-sm">
      //   Get Transactions
      //   {transactions.map((transaction) => (
      //     <div key={transaction.id}>
      //       <p>{transaction.text}</p>
      //       <p>{transaction.amount}</p>
      //       <p>{transaction.created_at}</p>
      //     </div>
      //   ))}
      // </button>
      <div className="">
        <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-medium">{transaction.text}</p>
                <p className="text-sm text-gray-500">
                  {formatDate(transaction.created_at)}
                </p>
              </div>
              <p className={`font-medium ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                {transaction.amount}
              </p>
            </li>
          ))}
        </ul>
      </div>
  );
}
