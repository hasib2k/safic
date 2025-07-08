import React from 'react'

interface PaymentIconProps {
  method: string
  className?: string
}

export const PaymentIcon: React.FC<PaymentIconProps> = ({ method, className = "w-8 h-8" }) => {
  const getIcon = (methodId: string) => {
    switch (methodId) {
      case 'bkash':
        return (
          <div className={`${className} flex items-center justify-center bg-pink-600 text-white rounded-lg font-bold text-sm`}>
            bK
          </div>
        )
      case 'nagad':
        return (
          <div className={`${className} flex items-center justify-center bg-orange-600 text-white rounded-lg font-bold text-sm`}>
            Ng
          </div>
        )
      case 'rocket':
        return (
          <div className={`${className} flex items-center justify-center bg-purple-600 text-white rounded-lg font-bold text-sm`}>
            Rc
          </div>
        )
      case 'upay':
        return (
          <div className={`${className} flex items-center justify-center bg-blue-600 text-white rounded-lg font-bold text-sm`}>
            Up
          </div>
        )
      case 'bank':
        return (
          <div className={`${className} flex items-center justify-center bg-green-600 text-white rounded-lg`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm16 10H6V9h12v8zm-8-2h2v-2h2V9h-6v6h2v-2z"/>
            </svg>
          </div>
        )
      case 'card':
        return (
          <div className={`${className} flex items-center justify-center bg-gray-600 text-white rounded-lg`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
        )
      default:
        return (
          <div className={`${className} flex items-center justify-center bg-gray-400 text-white rounded-lg`}>
            ?
          </div>
        )
    }
  }

  return getIcon(method)
}

export default PaymentIcon
