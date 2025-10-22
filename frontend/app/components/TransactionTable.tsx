
import { TransactionTableProps } from "../types";
import { TrendingUp, TrendingDown, Trash } from "lucide-react";

export default function TransactionTable({ transactions, onDelete, formatDate }: TransactionTableProps) {
  const handleDelete = (id: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette transaction ?")) {
      onDelete(id);
    }
  };
  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 ">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Montant</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={t.id}>
              <th>{index + 1}</th>
              <td>{t.text}</td>
              <td className=" font-semibold flex items-center gap-2">
                {t.amount > 0 ? (
                  <TrendingUp className="text-success w-6 h-6" />
                ) : (
                  <TrendingDown className="text-error w-6 h-6" />
                )}
                {t.amount > 0 ? `+${t.amount}` : `${t.amount}`}
              </td>
              <td>{formatDate(t.created_at)}</td>
              <td>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="btn btn-sm btn-error btn-soft"
                  title="Supprimer"
                >
                  <Trash className=" w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
