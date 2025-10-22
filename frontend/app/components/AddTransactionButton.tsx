import { PlusCircle } from "lucide-react";  // icon library

export default function AddTransactionButton() {
  return (
    <button
      className="btn btn-warning"
      onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}
    >
      <PlusCircle className="w-4 h-4" />
      Ajouter une transaction
    </button>
  );
}
