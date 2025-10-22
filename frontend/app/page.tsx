"use client"

import { useEffect, useState } from "react";
import api from "./api";
import toast from "react-hot-toast";
import BalanceSummary from "./components/BalanceSummary";
import RatioProgress from "./components/RatioProgress";
import TransactionTable from "./components/TransactionTable";
import AddTransactionModal from "./components/AddTransactionModal";
import AddTransactionButton from "./components/AddTransactionButton";
import { Transaction } from "./types";


export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [loading, setLoading] = useState(false)

  const getTransactions = async () => {
    try {
      const response = await api.get<Transaction[]>("transactions/")
      setTransactions(response.data)
    } catch (error) {
      console.error("Erreur chargement transactions", error);
      toast.error("Erreur chargement transactions")
    }
  }

  useEffect(() => {
    getTransactions()
  }, []);


  const deleteTransaction = async (id: string) => {
    try {
      await api.delete(`transactions/${id}/`)
      getTransactions()
      toast.success("Transaction supprimée avec succès")
    } catch (error) {
      console.error("Erreur suppression transaction", error);
      toast.error("Erreur suppression transaction")
    }
  }


  const addTransaction = async () => {
    if (!text || amount == "" || isNaN(Number(amount))) {
      toast.error("Merci de remplir texte et montant valides")
      return
    }
    setLoading(true)

    try {
      await api.post<Transaction>(`transactions/`, {
        text,
        amount: Number(amount)
      })
      getTransactions()
      const modal = document.getElementById('my_modal_3') as HTMLDialogElement
      if (modal) {
        modal.close()
      }

      toast.success("Transaction ajoutée avec succès")
      setText("")
      setAmount("")
    } catch (error) {
      console.error("Erreur ajout transaction", error);
      toast.error("Erreur ajout transaction")
    } finally {
      setLoading(false)
    }
  }

  const amounts = transactions.map((t) => Number(t.amount) || 0)
  const balance = amounts.reduce((acc, item) => acc + item, 0) || 0
  const income =
    amounts.filter((a) => a > 0).reduce((acc, item) => acc + item, 0) || 0
  const expense =
    amounts.filter((a) => a < 0).reduce((acc, item) => acc + item, 0) || 0

  const ratio = income > 0 ? Math.min((Math.abs(expense) / income) * 100, 100) : 0

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };


  return (
    <div className="w-2/3 flex flex-col gap-4">
      <BalanceSummary balance={balance} income={income} expense={expense} />
      <RatioProgress ratio={ratio} />
      <AddTransactionButton />
      <TransactionTable
        transactions={transactions}
        onDelete={deleteTransaction}
        formatDate={formatDate}
      />
      <AddTransactionModal
        text={text}
        amount={amount}
        setText={setText}
        setAmount={setAmount}
        loading={loading}
        onAdd={addTransaction}
      />
    </div>
  );
}