import Link from 'next/link';

export default function DonationSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h1>
        <p className="text-green-600 mb-6">Your donation was successful. May Allah reward you for your generosity.</p>
        <Link href="/donations" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">Back to Donations</Link>
      </div>
    </div>
  );
}
