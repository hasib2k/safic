'use client'

import { useState } from 'react'

// Note: Client components cannot export metadata directly
// Metadata should be in a separate metadata file or parent layout

export default function ZakatCalculatorPage() {
  const [formData, setFormData] = useState({
    cash: '',
    bankBalance: '',
    gold: '',
    silver: '',
    investments: '',
    businessAssets: '',
    debtsOwed: '',
    personalDebts: ''
  })

  const [result, setResult] = useState<{
    totalAssets: number
    totalDebts: number
    zakatableAmount: number
    zakatDue: number
    nisabMet: boolean
  } | null>(null)

  // Current Nisab values (these should be updated regularly)
  const goldNisab = 87.48 // grams of gold
  const silverNisab = 612.36 // grams of silver
  const goldPricePerGram = 65 // USD per gram (approximate)
  const silverPricePerGram = 0.85 // USD per gram (approximate)
  
  const goldNisabValue = goldNisab * goldPricePerGram
  const silverNisabValue = silverNisab * silverPricePerGram
  const nisabThreshold = Math.min(goldNisabValue, silverNisabValue) // Use lower of the two

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateZakat = () => {
    const cash = parseFloat(formData.cash) || 0
    const bankBalance = parseFloat(formData.bankBalance) || 0
    const gold = parseFloat(formData.gold) || 0
    const silver = parseFloat(formData.silver) || 0
    const investments = parseFloat(formData.investments) || 0
    const businessAssets = parseFloat(formData.businessAssets) || 0
    const debtsOwed = parseFloat(formData.debtsOwed) || 0
    const personalDebts = parseFloat(formData.personalDebts) || 0

    const totalAssets = cash + bankBalance + gold + silver + investments + businessAssets + debtsOwed
    const totalDebts = personalDebts
    const zakatableAmount = totalAssets - totalDebts

    const nisabMet = zakatableAmount >= nisabThreshold
    const zakatDue = nisabMet ? zakatableAmount * 0.025 : 0 // 2.5%

    setResult({
      totalAssets,
      totalDebts,
      zakatableAmount,
      zakatDue,
      nisabMet
    })
  }

  const resetCalculator = () => {
    setFormData({
      cash: '',
      bankBalance: '',
      gold: '',
      silver: '',
      investments: '',
      businessAssets: '',
      debtsOwed: '',
      personalDebts: ''
    })
    setResult(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            <span className="font-arabic text-5xl block mb-2">حاسبة الزكاة</span>
            Zakat Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your annual Zakat obligation according to Islamic principles. 
            Zakat is one of the Five Pillars of Islam and a religious duty for all financially capable Muslims.
          </p>
        </div>

        {/* Nisab Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            <span className="font-arabic text-3xl block mb-1">النصاب</span>
            Current Nisab Threshold
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-600 mb-2">Gold Nisab</div>
              <div className="text-2xl font-bold text-gray-800">${goldNisabValue.toFixed(2)}</div>
              <div className="text-sm text-gray-600">{goldNisab}g of gold</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary-600 mb-2">Silver Nisab</div>
              <div className="text-2xl font-bold text-gray-800">${silverNisabValue.toFixed(2)}</div>
              <div className="text-sm text-gray-600">{silverNisab}g of silver</div>
            </div>
          </div>
          <div className="text-center mt-4 p-4 bg-primary-50 rounded-lg">
            <div className="text-lg font-semibold text-primary-800">Current Nisab Threshold</div>
            <div className="text-2xl font-bold text-primary-600">${nisabThreshold.toFixed(2)}</div>
            <div className="text-sm text-gray-600 mt-1">
              Your wealth must exceed this amount to be liable for Zakat
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              <span className="font-arabic text-3xl block mb-1">أصولك</span>
              Your Assets & Liabilities
            </h2>
            
            <div className="space-y-6">
              {/* Assets Section */}
              <div>
                <h3 className="text-lg font-semibold text-primary-700 mb-4">Assets</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cash in Hand ($)
                    </label>
                    <input
                      type="number"
                      value={formData.cash}
                      onChange={(e) => handleInputChange('cash', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Balance ($)
                    </label>
                    <input
                      type="number"
                      value={formData.bankBalance}
                      onChange={(e) => handleInputChange('bankBalance', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gold Value ($)
                    </label>
                    <input
                      type="number"
                      value={formData.gold}
                      onChange={(e) => handleInputChange('gold', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Silver Value ($)
                    </label>
                    <input
                      type="number"
                      value={formData.silver}
                      onChange={(e) => handleInputChange('silver', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investments/Stocks ($)
                    </label>
                    <input
                      type="number"
                      value={formData.investments}
                      onChange={(e) => handleInputChange('investments', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Assets ($)
                    </label>
                    <input
                      type="number"
                      value={formData.businessAssets}
                      onChange={(e) => handleInputChange('businessAssets', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Money Owed to You ($)
                    </label>
                    <input
                      type="number"
                      value={formData.debtsOwed}
                      onChange={(e) => handleInputChange('debtsOwed', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              {/* Liabilities Section */}
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-4">Liabilities</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Debts ($)
                  </label>
                  <input
                    type="number"
                    value={formData.personalDebts}
                    onChange={(e) => handleInputChange('personalDebts', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={calculateZakat}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Calculate Zakat
                </button>
                <button
                  onClick={resetCalculator}
                  className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {result && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  <span className="font-arabic text-3xl block mb-1">النتيجة</span>
                  Zakat Calculation Result
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Total Assets:</span>
                    <span className="font-bold text-gray-800">${result.totalAssets.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Total Debts:</span>
                    <span className="font-bold text-red-600">-${result.totalDebts.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                    <span className="font-medium text-primary-700">Zakatable Amount:</span>
                    <span className="font-bold text-primary-800">${result.zakatableAmount.toFixed(2)}</span>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg text-white">
                    <div className="text-sm opacity-90 mb-1">Your Zakat Due</div>
                    <div className="text-3xl font-bold">${result.zakatDue.toFixed(2)}</div>
                    <div className="text-sm opacity-90 mt-1">
                      {result.nisabMet ? '(2.5% of zakatable amount)' : 'Below Nisab threshold'}
                    </div>
                  </div>
                  
                  {!result.nisabMet && (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="text-yellow-800 text-sm">
                        <strong>Note:</strong> Your wealth is below the Nisab threshold. 
                        You are not required to pay Zakat this year, but voluntary charity (Sadaqah) is always encouraged.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Information Panel */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                <span className="font-arabic text-2xl block mb-1">معلومات الزكاة</span>
                About Zakat
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Zakat</strong> is the third pillar of Islam and a religious obligation for all financially able Muslims.
                </p>
                <p>
                  <strong>Rate:</strong> 2.5% of eligible wealth held for one lunar year.
                </p>
                <p>
                  <strong>Nisab:</strong> The minimum amount of wealth required before Zakat becomes obligatory.
                </p>
                <p>
                  <strong>Eligible Assets:</strong> Cash, bank savings, gold, silver, investments, business inventory, and debts owed to you.
                </p>
                <p>
                  <strong>Deductions:</strong> Personal debts and liabilities can be deducted from your total wealth.
                </p>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-xs">
                    <strong>Disclaimer:</strong> This calculator provides an estimate. 
                    For precise calculations and religious guidance, please consult with a qualified Islamic scholar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
