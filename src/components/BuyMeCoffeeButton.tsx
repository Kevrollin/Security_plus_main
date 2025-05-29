import { useState } from "react";

export function BuyMeCoffeeButton({ articleId }: { articleId: string }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      // Call your backend API to initiate Mpesa payment
      const res = await fetch("/api/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, articleId }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Check your phone to complete the payment.");
      } else {
        setMessage(data.error || "Payment failed.");
      }
    } catch (err) {
      setMessage("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-8">
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        onClick={() => setOpen(true)}
      >
        Buy Me Coffee ☕
      </button>
      {open && (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <input
            type="number"
            min="1"
            required
            placeholder="Enter amount (KES)"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay with Mpesa"}
          </button>
          {message && <div className="text-sm mt-2">{message}</div>}
        </form>
      )}
    </div>
  );
}