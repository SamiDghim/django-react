import { Wallet, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

interface BalanceSummaryProps {
  balance: number;
  income: number;
  expense: number;
}

export default function BalanceSummary({ balance, income, expense }: BalanceSummaryProps) {
  return (
    <div className="flex justify-between rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5">
      <div className="flex flex-col gap-1">
        <div className=" badge badge-soft">
          <Wallet className="w-4 h4" />
          Votre solde
        </div>
        <div className="stat-value">
          {balance.toFixed(2)} €
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className=" badge badge-soft badge-success">
          <ArrowUpCircle className="w-4 h4" />
          Revenus
        </div>
        <div className="stat-value">
          {income.toFixed(2)} €
        </div>
      </div>
      <div className="flex flex-col gap-1 ">
        <div className=" badge badge-soft badge-error">
          <ArrowDownCircle className="w-4 h4" />
          Dépenses
        </div>
        <div className="stat-value">
          {expense.toFixed(2)} €
        </div>
      </div>
    </div>
  );
}
