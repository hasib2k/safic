import { useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Users, Clock, Calendar, Video, Share2, MessageCircle } from 'lucide-react'

interface LiveStream {
  id: string
  title: string
  description: string
  isLive: boolean
  viewerCount: number
  startTime: string
  duration?: string
  streamUrl?: string
  thumbnail: string
}

const LiveStreaming = () => {
  const [currentStream, setCurrentStream] = useState<LiveStream | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<Array<{id: string, user: string, message: string, time: string}>>([])

  useEffect(() => {
    // Simulate checking for live streams
    const checkLiveStreams = () => {
      const now = new Date()
      const day = now.getDay() // 0 = Sunday, 5 = Friday
      const hour = now.getHours()
      
      // Check if it's Friday between 12:30-2:00 PM (Jummah time)
      if (day === 5 && hour >= 12 && hour < 14) {
        setCurrentStream({
          id: 'jummah-live',
          title: 'Friday Jummah Prayer & Khutbah',
          description: 'Join us for the weekly Friday congregational prayer and sermon.',
          isLive: true,
          viewerCount: 45,
          startTime: '1:00 PM',
          streamUrl: 'https://example.com/live-stream',
          thumbnail: '/images/masjid-interior.jpg'
        })
      } else {
        // Show upcoming stream or recent recording
        setCurrentStream({
          id: 'recent-khutbah',
          title: 'Last Friday\'s Khutbah: The Importance of Gratitude',
          description: 'A powerful reminder about being thankful in all circumstances.',
          isLive: false,
          viewerCount: 120,
          startTime: '1:00 PM',
          duration: '45:32',
          streamUrl: 'https://example.com/recorded-stream',
          thumbnail: '/images/imam-speaking.jpg'
        })
      }
    }

    checkLiveStreams()
    
    // Check every minute for live stream updates
    const interval = setInterval(checkLiveStreams, 60000)
    return () => clearInterval(interval)
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        user: 'Viewer',
        message: chatMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setChatMessages(prev => [...prev, newMessage])
      setChatMessage('')
    }
  }

  if (!currentStream) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <Video className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-800 mb-2">No Live Stream</h3>
        <p className="text-slate-600 mb-6">
          Join us for Friday Jummah prayer at 1:00 PM or watch previous sermons.
        </p>
        <div className="space-y-3">
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h4 className="font-semibold text-emerald-800 mb-1">Next Live Stream</h4>
            <p className="text-emerald-700">Friday Jummah Prayer - 1:00 PM</p>
          </div>
          <button className="bg-slate-600 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition-colors">
            Browse Previous Sermons
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Stream Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {currentStream.isLive && (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold bg-red-500 px-2 py-1 rounded-full">LIVE</span>
              </div>
            )}
            <div className="flex items-center text-sm space-x-4">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {currentStream.viewerCount} viewers
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {currentStream.isLive ? 'Started at' : 'Recorded'} {currentStream.startTime}
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-md hover:bg-white/30 transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative bg-black aspect-video">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-slate-900/50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              {isPlaying ? (
                <Pause className="w-10 h-10" />
              ) : (
                <Play className="w-10 h-10 ml-1" />
              )}
            </div>
            <p className="text-lg font-semibold mb-2">{currentStream.title}</p>
            <p className="text-sm opacity-80 max-w-md">{currentStream.description}</p>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={togglePlay}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-1" />
                )}
              </button>
              <button 
                onClick={toggleMute}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
              {currentStream.duration && (
                <span className="text-white text-sm">
                  {isPlaying ? '12:34' : '0:00'} / {currentStream.duration}
                </span>
              )}
            </div>
            <button 
              onClick={() => setShowChat(!showChat)}
              className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-md hover:bg-white/30 transition-colors text-white"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stream Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{currentStream.title}</h3>
            <p className="text-slate-600">{currentStream.description}</p>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Calendar className="w-5 h-5 text-slate-400" />
            <span className="text-sm text-slate-600">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm">
            Join Prayer Virtually
          </button>
          <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors text-sm">
            Download Audio
          </button>
          <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors text-sm">
            View Transcript
          </button>
        </div>
      </div>

      {/* Chat Panel */}
      {showChat && (
        <div className="border-t bg-slate-50 p-4">
          <h4 className="font-semibold text-slate-800 mb-3">Live Chat</h4>
          <div className="bg-white rounded-lg border h-48 mb-3 overflow-y-auto p-3">
            {chatMessages.length === 0 ? (
              <p className="text-slate-500 text-sm text-center py-8">
                {currentStream.isLive ? 'Be the first to say something!' : 'Chat is disabled for recorded streams'}
              </p>
            ) : (
              <div className="space-y-2">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="text-sm">
                    <span className="font-medium text-emerald-600">{msg.user}</span>
                    <span className="text-slate-500 ml-2">{msg.time}</span>
                    <p className="text-slate-800">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {currentStream.isLive && (
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button 
                onClick={sendChatMessage}
                className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default LiveStreaming
