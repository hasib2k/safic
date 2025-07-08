'use client'

import { useState, useEffect } from 'react'

export default function QiblaFinder() {
  const [direction, setDirection] = useState<number | null>(null)
  const [deviceHeading, setDeviceHeading] = useState<number | null>(null)
  const [isSupported, setIsSupported] = useState(false)
  const [permission, setPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt')

  // Dhaka coordinates
  const dhakaLat = 23.8103
  const dhakaLng = 90.4125
  
  // Kaaba coordinates
  const kaabaLat = 21.4225
  const kaabaLng = 39.8262

  const calculateQiblaDirection = (lat: number, lng: number) => {
    const toRadians = (deg: number) => deg * (Math.PI / 180)
    const toDegrees = (rad: number) => rad * (180 / Math.PI)

    const lat1 = toRadians(lat)
    const lng1 = toRadians(lng)
    const lat2 = toRadians(kaabaLat)
    const lng2 = toRadians(kaabaLng)

    const dLng = lng2 - lng1

    const y = Math.sin(dLng) * Math.cos(lat2)
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng)

    let bearing = toDegrees(Math.atan2(y, x))
    return (bearing + 360) % 360
  }

  useEffect(() => {
    // Check if device orientation is supported
    if ('DeviceOrientationEvent' in window) {
      setIsSupported(true)
    }

    // Calculate Qibla direction for Dhaka (default)
    const qiblaFromDhaka = calculateQiblaDirection(dhakaLat, dhakaLng)
    setDirection(qiblaFromDhaka)
  }, [])

  const requestPermission = async () => {
    if ('DeviceOrientationEvent' in window && 'requestPermission' in DeviceOrientationEvent) {
      // iOS 13+ permission request
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission()
        setPermission(permission)
        if (permission === 'granted') {
          startCompass()
        }
      } catch (error) {
        setPermission('denied')
      }
    } else {
      // Android or older iOS
      setPermission('granted')
      startCompass()
    }
  }

  const startCompass = () => {
    if ('DeviceOrientationEvent' in window) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        if (event.alpha !== null) {
          setDeviceHeading(event.alpha)
        }
      }

      window.addEventListener('deviceorientation', handleOrientation)
      return () => window.removeEventListener('deviceorientation', handleOrientation)
    }
  }

  const qiblaRelativeToNorth = direction !== null ? Math.round(direction) : null
  const compassRotation = deviceHeading !== null && direction !== null 
    ? -(deviceHeading - direction) 
    : 0

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-6 text-center">
        Qibla Direction
      </h3>

      <div className="text-center">
        {/* Compass Container */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          {/* Compass Base */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-300 bg-gray-50">
            {/* Cardinal Directions */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-600">N</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-600">S</div>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-600">W</div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-600">E</div>
          </div>

          {/* Qibla Arrow */}
          <div 
            className="absolute inset-4 transition-transform duration-500 ease-out"
            style={{ 
              transform: `rotate(${compassRotation}deg)` 
            }}
          >
            <div className="relative w-full h-full">
              {/* Kaaba Direction Arrow */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-green-600"></div>
              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Direction Info */}
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-sm text-green-700 mb-1">Qibla Direction from Dhaka</div>
            <div className="text-2xl font-bold text-green-800">
              {qiblaRelativeToNorth}° West of North
            </div>
          </div>

          {isSupported && permission !== 'granted' && (
            <button
              onClick={requestPermission}
              className="btn-primary"
            >
              Enable Compass
            </button>
          )}

          {permission === 'granted' && deviceHeading !== null && (
            <div className="text-sm text-gray-600">
              Device heading: {Math.round(deviceHeading)}°
            </div>
          )}

          {!isSupported && (
            <p className="text-sm text-gray-500">
              Compass not supported on this device
            </p>
          )}
        </div>

        <div className="mt-4 text-xs text-gray-500 space-y-1">
          <p>• Green arrow points toward the Kaaba in Mecca</p>
          <p>• Enable compass for live orientation</p>
          <p>• Default direction calculated for Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  )
}
