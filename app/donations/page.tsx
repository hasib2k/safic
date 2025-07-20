'use client'

import { useState } from 'react'
import Link from 'next/link'
import PaymentIcon from '@/components/PaymentIcon'

interface DonationCategory {
  id: string
  name: string
  description: string
  target: number
  raised: number
  urgency: 'high' | 'medium' | 'low'
}

const donationCategories: DonationCategory[] = [
  {
    id: 'building',
    name: 'Building Expansion',
    description: 'Join us in expanding our sacred space to welcome more worshippers and serve our rapidly growing Muslim community. Your donation will help construct additional prayer halls, modern facilities, and accessible spaces for elderly and disabled community members.',
    target: 200000,
    raised: 75000,
    urgency: 'high'
  }
]

const getProgressPercentage = (raised: number, target: number) => {
  return Math.min((raised / target) * 100, 100)
}

const getUrgencyColor = (urgency: string) => {
  const colors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-green-600 bg-green-50'
  }
  return colors[urgency as keyof typeof colors] || 'text-gray-600 bg-gray-50'
}

export default function DonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showAmountSelection, setShowAmountSelection] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  // Only SSLCommerz as payment method
  const paymentMethods = [
    { id: 'sslcommerz', name: 'SSLCommerz (Card, Mobile, Bank)', icon: '', color: 'bg-blue-600', account: 'Secure Gateway' }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const handleDonateNow = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setShowAmountSelection(true)
  }

  const handleAmountConfirm = () => {
    if (getCurrentAmount() > 0) {
      setShowAmountSelection(false)
      setShowPaymentModal(true)
    } else {
      alert('Please select or enter an amount')
    }
  }

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0
  }

  const handlePaymentSubmit = () => {
    const amount = getCurrentAmount()
    if (amount > 0 && paymentMethod && donorInfo.name && donorInfo.email) {
      // Here you would integrate with actual payment gateway
      alert(`Payment initiated for $${amount} via ${paymentMethods.find(p => p.id === paymentMethod)?.name}`)
      setShowPaymentModal(false)
      setShowAmountSelection(false)
      // Reset form
      setSelectedAmount(null)
      setCustomAmount('')
      setSelectedCategory('')
      setPaymentMethod('')
      setDonorInfo({ name: '', email: '', phone: '', address: '' })
    } else {
      alert('Please fill in all required fields')
    }
  }

  // Store info for reassurance
  const storeInfo = {
    name: 'testsultavwyb',
    contactName: 'Hasib Ahmed',
    address: 'Sultanpur, Mithapukur, Rangpur, Bangladesh',
    email: 'hasib22258@gmail.com',
    mobile: '+8801706776711',
    homepage: 'https://safic.vercel.app'
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 safe-area-inset-bottom">
      <div className="container-mobile py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12 mobile-padding">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Support Our Community
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your generous donations help us serve the community, maintain our facilities, and spread Islamic knowledge.
          </p>
          <div className="mt-4 md:mt-6">
            <span className="text-sm text-gray-500">
              &quot;The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes&quot; - Quran 2:261
            </span>
          </div>
          {/* Store Info Card */}
          <div className="mt-8 mx-auto max-w-lg">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-left shadow-sm">
              <div className="font-bold text-primary-700 text-lg mb-2">Official Donation Portal</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Masjid/Org:</span> {storeInfo.name}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Contact:</span> {storeInfo.contactName}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Address:</span> {storeInfo.address}</div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> <a href={`mailto:${storeInfo.email}`} className="text-primary-600 underline">{storeInfo.email}</a></div>
              <div className="text-gray-700 mb-1"><span className="font-semibold">Mobile:</span> <a href={`tel:${storeInfo.mobile}`} className="text-primary-600 underline">{storeInfo.mobile}</a></div>
              <div className="text-gray-700"><span className="font-semibold">Website:</span> <a href={storeInfo.homepage} target="_blank" rel="noopener" className="text-primary-600 underline">{storeInfo.homepage}</a></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8 md:mb-12">
          {/* Removed Building Expansion section as requested */}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-mobile bg-white mb-8 p-4 md:p-8 rounded-lg shadow-lg flex flex-col items-center w-full">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">Quick Donation</h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`btn-mobile p-4 border-2 rounded-lg text-center font-bold transition-colors haptic-light w-full ${
                    selectedAmount === amount
                      ? 'border-primary-500 bg-primary-50 text-primary-700 scale-105 shadow-md'
                      : 'border-gray-200 hover:border-primary-500 hover:bg-primary-50'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="number"
                min="1"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className={`input-mobile flex-1 min-w-0 ${customAmount ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}`}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-mobile flex-1 min-w-0 border-gray-300 focus:border-primary-500"
              >
                <option value="">Select Category</option>
                {donationCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => {
                  setShowAmountSelection(true);
                }}
                className={`btn-mobile w-full text-lg haptic-light bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 rounded-lg font-semibold py-3 shadow-md ${getCurrentAmount() > 0 ? '' : 'opacity-60 cursor-not-allowed'}`}
                disabled={getCurrentAmount() <= 0}
              >
                Proceed to Payment - ${getCurrentAmount() > 0 ? getCurrentAmount() : '0'}
              </button>
              <div className="mt-4 text-center text-sm text-gray-500 w-full">
                <span className="inline-flex items-center gap-2">
                  <span role="img" aria-label="lock">🔒</span>
                  Secure payment processing • Tax-deductible receipts provided
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Amount Selection Modal */}
        {showAmountSelection && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="modal-mobile bg-white w-full max-w-md">
              <div className="mobile-padding border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    <span className="font-arabic text-2xl md:text-3xl block mb-1 text-primary-600">مقدار التبرع</span>
                    Select Donation Amount
                  </h3>
                  <button 
                    onClick={() => setShowAmountSelection(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl touch-target haptic-light"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mt-2">
                  Category: <span className="font-medium text-primary-600">
                    {donationCategories.find(c => c.id === selectedCategory)?.name}
                  </span>
                </p>
              </div>

              <div className="mobile-padding">
                {/* Quick Amount Selection */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Selection</h4>
                  <div className="amount-grid-mobile">
                    {[25, 50, 100, 250, 500, 1000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`btn-mobile p-4 border-2 rounded-lg text-center transition-colors haptic-light ${
                          selectedAmount === amount
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-500 hover:bg-primary-50'
                        }`}
                      >
                        <div className="text-lg font-bold">${amount}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Custom Amount</h4>
                  <input
                    type="number"
                    placeholder="Enter your donation amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className={`input-mobile w-full ${
                      customAmount ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
                    }`}
                  />
                </div>

                {/* Selected Amount Display */}
                {getCurrentAmount() > 0 && (
                  <div className="mb-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-primary-600 mb-1">Your Donation Amount</p>
                      <p className="text-2xl md:text-3xl font-bold text-primary-700">${getCurrentAmount()}</p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => setShowAmountSelection(false)}
                    className="btn-mobile flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 haptic-light"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAmountConfirm}
                    disabled={getCurrentAmount() <= 0}
                    className={`btn-mobile flex-1 haptic-light ${
                      getCurrentAmount() > 0
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="modal-mobile bg-white w-full max-w-2xl">
              <div className="mobile-padding border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    <span className="font-arabic text-2xl md:text-3xl block mb-1 text-primary-600">تبرع</span>
                    Complete Your Donation
                  </h3>
                  <button 
                    onClick={() => {
                      setShowPaymentModal(false)
                      setShowAmountSelection(false)
                    }}
                    className="text-gray-400 hover:text-gray-600 text-2xl touch-target haptic-light"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mt-2">
                  Amount: <span className="font-bold text-primary-600">${getCurrentAmount()}</span>
                  {selectedCategory && (
                    <span className="ml-2">
                      | Category: <span className="font-medium">{donationCategories.find(c => c.id === selectedCategory)?.name}</span>
                    </span>
                  )}
                </p>
              </div>

              <div className="mobile-padding">
                {/* Donor Information */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Donor Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                      className="input-mobile"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                      className="input-mobile"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                      className="input-mobile"
                    />
                    <input
                      type="text"
                      placeholder="Address (Optional)"
                      value={donorInfo.address}
                      onChange={(e) => setDonorInfo({...donorInfo, address: e.target.value})}
                      className="input-mobile"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  <span className="font-arabic text-xl block mb-1">طريقة الدفع</span>
                  Payment Method
                </h4>
                <div className="payment-method-mobile selected border-primary-500 bg-primary-50 flex items-center space-x-3 mb-4">
                  <PaymentIcon method="sslcommerz" className="w-12 h-12" />
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">SSLCommerz (Card, Mobile, Bank)</div>
                    <div className="text-sm text-gray-600">Secure Gateway</div>
                  </div>
                </div>
                </div>

                {/* Payment Instructions */}
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="font-bold text-blue-800 mb-2">Secure Payment Gateway:</h5>
                  <p className="text-sm text-blue-700">
                    You will be redirected to SSLCommerz to complete your donation securely with card, mobile wallet, or bank transfer.
                  </p>
                  {/* Store Info for reassurance */}
                  <div className="mt-4 text-blue-900 text-sm">
                    <div className="font-semibold mb-1">Donation processed for:</div>
                    <div className="mb-1"><span className="font-semibold">Masjid/Org:</span> {storeInfo.name}</div>
                    <div className="mb-1"><span className="font-semibold">Contact:</span> {storeInfo.contactName}</div>
                    <div className="mb-1"><span className="font-semibold">Email:</span> <a href={`mailto:${storeInfo.email}`} className="text-blue-700 underline">{storeInfo.email}</a></div>
                    <div className="mb-1"><span className="font-semibold">Mobile:</span> <a href={`tel:${storeInfo.mobile}`} className="text-blue-700 underline">{storeInfo.mobile}</a></div>
                    <div><span className="font-semibold">Website:</span> <a href={storeInfo.homepage} target="_blank" rel="noopener" className="text-blue-700 underline">{storeInfo.homepage}</a></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => {
                      setShowPaymentModal(false)
                      setShowAmountSelection(false)
                    }}
                    className="btn-mobile flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 haptic-light"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={async () => {
                      // Validate donor info
                      if (!donorInfo.name.trim() || !donorInfo.email.trim()) {
                        alert('Please enter your name and email.');
                        return;
                      }
                      // Validate amount
                      const amount = getCurrentAmount();
                      if (amount <= 0) {
                        alert('Please enter a valid donation amount.');
                        return;
                      }
                      // Responsive loading state
                      const btn = document.activeElement as HTMLButtonElement | null;
                      if (btn) {
                        btn.setAttribute('disabled', 'true');
                        btn.textContent = 'Redirecting...';
                      }
                      try {
                        const res = await fetch('/api/sslcommerz-initiate', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            amount,
                            donor_name: donorInfo.name.trim(),
                            donor_email: donorInfo.email.trim(),
                            donor_phone: donorInfo.phone.trim(),
                            donor_address: donorInfo.address.trim(),
                            category: selectedCategory && selectedCategory !== '' ? selectedCategory : 'General',
                          })
                        });
                        const data = await res.json();
                        if (data.url) {
                          // Reset form before redirect
                          setSelectedAmount(null);
                          setCustomAmount('');
                          setSelectedCategory('');
                          setPaymentMethod('');
                          setDonorInfo({ name: '', email: '', phone: '', address: '' });
                          setShowPaymentModal(false);
                          setShowAmountSelection(false);
                          window.location.href = data.url;
                        } else {
                          alert('Payment initiation failed.\n' + (data.error ? data.error : '') + '\n' + (data.details ? JSON.stringify(data.details) : ''));
                        }
                      } catch (err) {
                        alert('Network error. Please try again.');
                      } finally {
                        if (btn) {
                          btn.removeAttribute('disabled');
                          btn.textContent = 'Proceed to Payment Gateway';
                        }
                      }
                    }}
                    className={`btn-mobile flex-1 haptic-light ${
                      donorInfo.name && donorInfo.email
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Proceed to Payment Gateway
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
