import Link from 'next/link';

export default function DonationFail() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-red-700 mb-4">Payment Failed</h1>
        <p className="text-red-600 mb-6">Unfortunately, your donation could not be processed. Please try again or contact support.</p>
        <Link href="/donations" className="inline-block bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition">Back to Donations</Link>
      </div>
    </div>
  );
}
