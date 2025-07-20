import Link from 'next/link';

export default function DonationCancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-yellow-700 mb-4">Payment Cancelled</h1>
        <p className="text-yellow-600 mb-6">You have cancelled the donation process. No payment was made.</p>
        <Link href="/donations" className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-700 transition">Back to Donations</Link>
      </div>
    </div>
  );
}
