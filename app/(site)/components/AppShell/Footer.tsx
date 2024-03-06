import { BsMusicNoteBeamed } from "react-icons/bs"

async function getTracks() {
  const res = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&period=7day&limit=5&user=welshbull&api_key=2bf7da1692a039dffe785acff8d4672e&format=json')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Footer = async () => {

  const tracks = await getTracks();

  const topTrack = tracks.toptracks.track[0];

  return (
    <footer className="w-full mt-auto text-xs px-6 pb-16 md:pb-4 flex flex-col sm:flex-row gap-4 sm:justify-between">
      <div className="flex items-center">
        <BsMusicNoteBeamed className="mr-2" />
        <p className="text-gray-400"><span className="block sm:inline">My most played track this week is </span> <strong className="text-gray-200 font-semibold">{topTrack.name}</strong> <span>by</span> <strong className="text-gray-200 font-semibold">{topTrack.artist.name}</strong></p>
      </div>
      <p className="text-gray-500">Built with Next.js + Sanity</p>
    </footer>
  )
}

export default Footer