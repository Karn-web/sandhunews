import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-20 left-4 z-40 group flex items-center gap-2 bg-sandhu-card/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 hover:border-sandhu-red/50 hover:bg-sandhu-card transition-all duration-300"
    >
      <span className="text-sandhu-muted group-hover:text-sandhu-red group-hover:-translate-x-1 transition-all duration-300">←</span>
      <span className="text-sm text-sandhu-muted group-hover:text-white transition-colors">Back</span>
    </button>
  )
}