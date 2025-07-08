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

  const paymentMethods = [
    { id: 'bkash', name: 'Bkash', icon: '', color: 'bg-pink-600', account: '+8801706776711' },
    { id: 'nagad', name: 'Nagad', icon: '', color: 'bg-orange-600', account: '+8801706776711' },
    { id: 'rocket', name: 'Rocket', icon: '', color: 'bg-purple-600', account: '+8801706776711' },
    { id: 'upay', name: 'Upay', icon: '', color: 'bg-blue-600', account: '+8801706776711' },
    { id: 'bank', name: 'Bank Transfer', icon: '', color: 'bg-green-600', account: 'ACC: 1234567890' },
    { id: 'card', name: 'Credit/Debit Card', icon: '', color: 'bg-gray-600', account: 'Auto Payment' }
  ]

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
        </div>

        <div className="flex justify-center mb-8 md:mb-12">
          {donationCategories.map((category) => (
            <div
              key={category.id}
              className="card-mobile bg-white max-w-lg w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(category.urgency)}`}>
                  {category.urgency.toUpperCase()} PRIORITY
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Progress</span>
                  <span className="text-sm font-medium text-gray-700">
                    ${category.raised.toLocaleString()} / ${category.target.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage(category.raised, category.target)}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-primary-600 font-medium">
                    {getProgressPercentage(category.raised, category.target).toFixed(1)}% Complete
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button 
                  onClick={() => handleDonateNow(category.id)}
                  className="flex-1 btn-mobile bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors haptic-light"
                >
                  Donate Now
                </button>
                <Link 
                  href="/building-expansion"
                  className="btn-mobile px-4 py-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors text-center haptic-light"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-mobile bg-white mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
              Quick Donation
            </h2>
            
            <div className="amount-grid-mobile mb-6">
              {[25, 50, 100, 250].map((amount) => (
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
            
            <div className="flex flex-col space-y-4 mb-6">
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className={`input-mobile flex-1 ${
                  customAmount ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
                }`}
              />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-mobile border-gray-300 focus:border-primary-500"
              >
                <option value="">Select Category</option>
                {donationCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={() => setShowPaymentModal(true)}
              disabled={getCurrentAmount() <= 0}
              className={`btn-mobile w-full text-lg haptic-light ${
                getCurrentAmount() > 0
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Proceed to Payment - ${getCurrentAmount() > 0 ? getCurrentAmount() : '0'}
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              🔒 Secure payment processing • Tax-deductible receipts provided
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`payment-method-mobile haptic-light ${
                          paymentMethod === method.id
                            ? 'selected border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <PaymentIcon method={method.id} className="w-12 h-12" />
                          <div className="flex-1">
                            <div className="font-bold text-gray-800">{method.name}</div>
                            <div className="text-sm text-gray-600">{method.account}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Instructions */}
                {paymentMethod && paymentMethod !== 'card' && (
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h5 className="font-bold text-yellow-800 mb-2">Manual Payment Instructions:</h5>
                    <ol className="text-sm text-yellow-700 space-y-1">
                      <li>1. Send <strong>${getCurrentAmount()}</strong> to the {paymentMethods.find(p => p.id === paymentMethod)?.name} account above</li>
                      <li>2. Use reference: <strong>DONATION-{Date.now()}</strong></li>
                      <li>3. Screenshot the transaction</li>
                      <li>4. Click "Confirm Payment" below</li>
                      <li>5. We will verify and send you a receipt within 24 hours</li>
                    </ol>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">Auto Payment:</h5>
                    <p className="text-sm text-blue-700">
                      You will be redirected to our secure payment gateway to complete your donation with credit/debit card.
                    </p>
                  </div>
                )}

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
                    onClick={handlePaymentSubmit}
                    disabled={!paymentMethod || !donorInfo.name || !donorInfo.email}
                    className={`btn-mobile flex-1 haptic-light ${
                      paymentMethod && donorInfo.name && donorInfo.email
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {paymentMethod === 'card' ? 'Proceed to Payment Gateway' : 'Confirm Payment'}
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
