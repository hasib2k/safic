'use client'

import { useState, useEffect } from 'react'

interface TasbeehSession {
  dhikr: string
  count: number
  target: number
  arabic: string
}

export default function DigitalTasbeeh() {
  const [sessions, setSessions] = useState<TasbeehSession[]>([
    { dhikr: 'SubhanAllah', count: 0, target: 33, arabic: 'سُبْحَانَ اللّهِ' },
    { dhikr: 'Alhamdulillah', count: 0, target: 33, arabic: 'الْحَمْدُ لِلَّهِ' },
    { dhikr: 'Allahu Akbar', count: 0, target: 34, arabic: 'اللَّهُ أَكْبَرُ' },
  ])
  
  const [activeSession, setActiveSession] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [lastReset, setLastReset] = useState<Date | null>(null)

  // Load saved data on component mount
  useEffect(() => {
    const saved = localStorage.getItem('tasbeeh-data')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setSessions(data.sessions || [
          { dhikr: 'SubhanAllah', count: 0, target: 33, arabic: 'سُبْحَانَ اللّهِ' },
          { dhikr: 'Alhamdulillah', count: 0, target: 33, arabic: 'الْحَمْدُ لِلَّهِ' },
          { dhikr: 'Allahu Akbar', count: 0, target: 34, arabic: 'اللَّهُ أَكْبَرُ' },
        ])
        setTotalCount(data.totalCount || 0)
        setLastReset(data.lastReset ? new Date(data.lastReset) : null)
      } catch (error) {
        console.error('Failed to load tasbeeh data:', error)
      }
    }
  }, [])

  // Save data whenever sessions or totalCount changes
  useEffect(() => {
    const data = {
      sessions,
      totalCount,
      lastReset: lastReset?.toISOString()
    }
    localStorage.setItem('tasbeeh-data', JSON.stringify(data))
  }, [sessions, totalCount, lastReset])

  const incrementCount = () => {
    setSessions(prev => 
      prev.map((session, index) => 
        index === activeSession 
          ? { ...session, count: session.count + 1 }
          : session
      )
    )
    setTotalCount(prev => prev + 1)
  }

  const resetSession = (sessionIndex: number) => {
    setSessions(prev => 
      prev.map((session, index) => 
        index === sessionIndex 
          ? { ...session, count: 0 }
          : session
      )
    )
  }

  const resetAll = () => {
    setSessions(prev => prev.map(session => ({ ...session, count: 0 })))
    setTotalCount(0)
    setLastReset(new Date())
  }

  const currentSession = sessions[activeSession]
  const isCompleted = currentSession.count >= currentSession.target
  const progress = Math.min((currentSession.count / currentSession.target) * 100, 100)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-6 text-center">
        Digital Tasbeeh
      </h3>

      {/* Session Selector */}
      <div className="flex space-x-2 mb-6">
        {sessions.map((session, index) => (
          <button
            key={session.dhikr}
            onClick={() => setActiveSession(index)}
            className={`flex-1 p-2 rounded-lg border text-sm font-medium transition-colors ${
              activeSession === index
                ? 'bg-green-100 border-green-300 text-green-700'
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {session.dhikr}
          </button>
        ))}
      </div>

      {/* Active Session Display */}
      <div className="text-center mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="font-arabic text-2xl mb-2 text-green-800">
            {currentSession.arabic}
          </div>
          <div className="text-lg font-semibold text-green-700 mb-4">
            {currentSession.dhikr}
          </div>
          
          {/* Counter Display */}
          <div className="relative">
            <div className={`text-6xl font-bold mb-2 ${isCompleted ? 'text-green-600' : 'text-gray-800'}`}>
              {currentSession.count}
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Target: {currentSession.target}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  isCompleted ? 'bg-green-500' : 'bg-green-400'
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {isCompleted && (
              <div className="text-green-600 font-semibold text-sm mb-2">
                ✓ Target Completed! جَزاكَ اللهُ خَيْراً
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {/* Main Counter Button */}
        <button
          onClick={incrementCount}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
        >
          Count (+1)
        </button>

        {/* Reset Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => resetSession(activeSession)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Reset Current
          </button>
          <button
            onClick={resetAll}
            className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Reset All
          </button>
        </div>
      </div>

      {/* Session Summary */}
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        {sessions.map((session, index) => (
          <div key={session.dhikr} className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-600 mb-1">{session.dhikr}</div>
            <div className={`font-bold ${session.count >= session.target ? 'text-green-600' : 'text-gray-800'}`}>
              {session.count}/{session.target}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <div>Total Count Today: <span className="font-semibold">{totalCount}</span></div>
        {lastReset && (
          <div>Last Reset: {lastReset.toLocaleDateString()}</div>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>• Tap "Count" to increment • Data saved locally</p>
        <p>• Complete the traditional 33-33-34 cycle</p>
      </div>
    </div>
  )
}
