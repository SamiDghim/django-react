import { PlusCircle } from "lucide-react";

/* eslint-disable no-unused-vars */
interface AddTransactionModalProps {
  text: string;
  amount: number | "";
  setText: (value: string) => void;
  setAmount: (value: number | "") => void;
  loading: boolean;
  onAdd: () => void;
}

export default function AddTransactionModal({ text, amount, setText, setAmount, loading, onAdd }: AddTransactionModalProps) {
  return (
    <dialog id="my_modal_3" className="modal backdrop-blur">
      <div className="modal-box border-2 border-warning/10 border-dashed">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Ajouter une transaction</h3>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <label className="label">Texte</label>
            <input
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Entrez le texte..."
              className="input w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">Montant (négatif - dépense, positif - revenu)</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="Entrez le montant..."
              className="input w-full"
            />
          </div>
          <button
            className="w-full btn btn-warning"
            onClick={onAdd}
            disabled={loading}
          >
            <PlusCircle className="w-4 h-4" />
            Ajouter
          </button>
        </div>
      </div>
    </dialog>
  );
}
