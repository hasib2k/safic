import { useState } from 'react'
import { Calculator, DollarSign, Info } from 'lucide-react'

interface ZakatCalculation {
  totalWealth: number
  zakatDue: number
  nisabThreshold: number
  eligibleForZakat: boolean
}

const ZakatCalculator = () => {
  const [cash, setCash] = useState('')
  const [savings, setSavings] = useState('')
  const [investments, setInvestments] = useState('')
  const [gold, setGold] = useState('')
  const [silver, setSilver] = useState('')
  const [business, setBusiness] = useState('')
  const [debts, setDebts] = useState('')
  const [result, setResult] = useState<ZakatCalculation | null>(null)

  // Current approximate nisab values (these should be updated regularly)
  const NISAB_GOLD = 5500 // USD equivalent of 87.48 grams of gold
  const NISAB_SILVER = 385 // USD equivalent of 612.36 grams of silver
  const ZAKAT_RATE = 0.025 // 2.5%

  const calculateZakat = () => {
    const totalAssets = 
      parseFloat(cash || '0') +
      parseFloat(savings || '0') +
      parseFloat(investments || '0') +
      parseFloat(gold || '0') +
      parseFloat(silver || '0') +
      parseFloat(business || '0')

    const totalDebts = parseFloat(debts || '0')
    const netWealth = totalAssets - totalDebts

    // Use the lower of the two nisab values
    const nisabThreshold = Math.min(NISAB_GOLD, NISAB_SILVER)
    const eligibleForZakat = netWealth >= nisabThreshold
    const zakatDue = eligibleForZakat ? netWealth * ZAKAT_RATE : 0

    setResult({
      totalWealth: netWealth,
      zakatDue,
      nisabThreshold,
      eligibleForZakat
    })
  }

  const resetCalculator = () => {
    setCash('')
    setSavings('')
    setInvestments('')
    setGold('')
    setSilver('')
    setBusiness('')
    setDebts('')
    setResult(null)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Zakat Calculator</h2>
        <p className="text-slate-600">Calculate your Zakat obligation with precision and ease</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="bg-emerald-50 p-4 rounded-lg">
            <div className="flex items-center text-emerald-800 mb-2">
              <Info className="w-5 h-5 mr-2" />
              <span className="font-semibold">Important Note</span>
            </div>
            <p className="text-sm text-emerald-700">
              Enter all amounts in USD. Zakat is calculated at 2.5% of wealth above the nisab threshold.
              Current nisab: ${Math.min(NISAB_GOLD, NISAB_SILVER).toLocaleString()}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Assets</h3>
            
            <div>
              <label htmlFor="cash-input" className="block text-sm font-medium text-slate-700 mb-1">
                Cash in Hand & Bank Accounts
              </label>
              <input
                id="cash-input"
                type="number"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-describedby="cash-help"
                className="mobile-input w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div id="cash-help" className="sr-only">Enter the amount of cash you have in hand and bank accounts</div>
            </div>

            <div>
              <label htmlFor="savings-input" className="block text-sm font-medium text-slate-700 mb-1">
                Savings & Fixed Deposits
              </label>
              <input
                id="savings-input"
                type="number"
                value={savings}
                onChange={(e) => setSavings(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-describedby="savings-help"
                className="mobile-input w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div id="savings-help" className="sr-only">Enter your savings and fixed deposit amounts</div>
            </div>

            <div>
              <label htmlFor="investments-input" className="block text-sm font-medium text-slate-700 mb-1">
                Stocks & Investments
              </label>
              <input
                id="investments-input"
                type="number"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-describedby="investments-help"
                className="mobile-input w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div id="investments-help" className="sr-only">Enter the value of your stocks and investments</div>
            </div>

            <div>
              <label htmlFor="gold-input" className="block text-sm font-medium text-slate-700 mb-1">
                Gold Value (USD)
              </label>
              <input
                id="gold-input"
                type="number"
                value={gold}
                onChange={(e) => setGold(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-describedby="gold-help"
                className="mobile-input w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div id="gold-help" className="sr-only">Enter the current USD value of your gold</div>
            </div>

            <div>
              <label htmlFor="silver-input" className="block text-sm font-medium text-slate-700 mb-1">
                Silver Value (USD)
              </label>
              <input
                id="silver-input"
                type="number"
                value={silver}
                onChange={(e) => setSilver(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-describedby="silver-help"
                className="mobile-input w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div id="silver-help" className="sr-only">Enter the current USD value of your silver</div>
            </div>

            <div>
              <label htmlFor="business-input" className="block text-sm font-medium text-slate-700 mb-1">
                Business Assets
              </label>
              <input
                id="business-input"
                type="number"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-describedby="business-help"
                className="mobile-input w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div id="business-help" className="sr-only">Enter the value of your business assets</div>
            </div>

            <div>
              <label htmlFor="debts-input" className="block text-sm font-medium text-slate-700 mb-1">
                Outstanding Debts
              </label>
              <input
                id="debts-input"
                type="number"
                value={debts}
                onChange={(e) => setDebts(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-describedby="debts-help"
                className="mobile-input w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div id="debts-help" className="sr-only">Enter the amount of your outstanding debts</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={calculateZakat}
              className="mobile-button flex-1 bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 transition-colors font-semibold"
              aria-describedby="calculate-help"
            >
              Calculate Zakat
            </button>
            <div id="calculate-help" className="sr-only">Click to calculate your Zakat obligation based on entered values</div>
            <button
              onClick={resetCalculator}
              className="mobile-button px-4 py-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
              aria-label="Reset all input fields"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Calculation Results</h3>
              
              <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Total Wealth:</span>
                  <span className="font-semibold">${result.totalWealth.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Nisab Threshold:</span>
                  <span className="font-semibold">${result.nisabThreshold.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Eligible for Zakat:</span>
                  <span className={`font-semibold ${result.eligibleForZakat ? 'text-emerald-600' : 'text-slate-500'}`}>
                    {result.eligibleForZakat ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>

              <div className={`p-6 rounded-lg text-center ${result.eligibleForZakat ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50'}`}>
                <DollarSign className={`w-12 h-12 mx-auto mb-3 ${result.eligibleForZakat ? 'text-emerald-600' : 'text-slate-400'}`} />
                <div className="text-2xl font-bold mb-2">
                  {result.eligibleForZakat ? (
                    <span className="text-emerald-600">${result.zakatDue.toLocaleString()}</span>
                  ) : (
                    <span className="text-slate-500">$0</span>
                  )}
                </div>
                <p className="text-sm text-slate-600">
                  {result.eligibleForZakat ? 'Zakat Due' : 'No Zakat Due'}
                </p>
              </div>

              {result.eligibleForZakat && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Payment Options</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Pay your Zakat through our secure donation system or contact the masjid directly.
                  </p>
                  <button 
                    className="mobile-button w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    onClick={() => window.open('/donations', '_blank')}
                    aria-label="Open donation page to pay Zakat"
                  >
                    Pay Zakat Now
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calculator className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">Enter your assets to calculate Zakat</p>
            </div>
          )}

          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 mb-2">Disclaimer</h4>
            <p className="text-sm text-amber-700">
              This calculator provides an estimate based on standard Zakat calculations. 
              For complex financial situations, please consult with a qualified Islamic scholar 
              or the masjid's Imam for guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZakatCalculator
