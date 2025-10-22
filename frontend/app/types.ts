// Shared types for the app
/* eslint-disable no-unused-vars */

export type Transaction = {
  id: string;
  text: string;
  amount: number;
  created_at: string;
};

export interface TransactionTableProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  formatDate: (dateString: string) => string;
}
