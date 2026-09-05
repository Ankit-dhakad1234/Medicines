import { useParams, Link } from 'react-router-dom'

function MedicineDetail() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-[#e7e3df] p-8 text-[#1f1d1d]">
      <Link to="/" className="mb-6 inline-block text-lg font-semibold underline">
        ← Back
      </Link>

      <div className="max-w-3xl rounded-2xl border border-[#2c2a2a]/20 bg-white/30 p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-[#d46e5d]">Medicine details</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em]">Medicine ID: {id}</h1>
        <p className="mt-4 text-lg text-[#2d2d2d]">
          This is where you can fetch and display the full details for the selected medicine.
        </p>
      </div>
    </div>
  )
}

export default MedicineDetail
