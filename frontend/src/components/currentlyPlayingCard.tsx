

const CurrentlyPlayingCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg mb-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Now Playing</h2>
              <div className="flex items-center space-x-4">
                <img src="/placeholder.svg?height=80&width=80" alt="Album cover" className="w-20 h-20 rounded-md shadow-sm" />
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Song Title</h3>
                  <p className="text-gray-600">Artist Name</p>
                </div>
              </div>
        </div>
    )
}

export default CurrentlyPlayingCard