import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault()

    const query = search.trim()
    if (!query) {
      setResults([])
      return
    }

    setLoading(true)
    const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${query}"&limit=20`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setResults(data.results || [])
    } catch (error) {
      console.error('Error fetching medicines:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleMedicineClick = (medicine) => {
    const id = medicine.id || medicine.openfda?.brand_name?.[0] || 'unknown'
    navigate(`/medicine/${encodeURIComponent(id)}`)
  }

  return (
    <div className="min-h-screen bg-[#e7e3df] text-[#1f1d1d]">
      <Navbar />

      <main className="px-6 pt-8 md:px-10 md:pt-10 xl:px-12">
        <h1 className="max-w-[1200px] text-[4rem] font-black leading-[0.8] tracking-[-0.08em] text-[#1f1d1d] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem]">
          Know your <span className="text-[#e57a68]">medicine.</span>
        </h1>

        <p className="mt-8 max-w-[1100px] text-[1.2rem] leading-[1.3] tracking-[-0.04em] text-[#2d2d2d]/80 sm:text-[1.55rem] md:text-[1.9rem] lg:text-[2.3rem]">
          Search trusted drug labels by brand name and get the essentials
          <br className="hidden md:block" />
          clearly organized.
        </p>

        <form onSubmit={handleSearch} className="mt-10 max-w-[1100px]">
          <div className="flex items-center gap-4">
            <div className="flex flex-1 items-center gap-4 rounded-[2rem] border border-[#2c2a2a]/20 bg-[#d8d2ce] px-5 py-4 shadow-[inset_0_0_0_1px_rgba(28,28,28,0.05)] md:min-h-[5.8rem]">
              <span className="text-[2.5rem] leading-none text-[#2a2929]/75" aria-hidden="true">
                ⌕
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by brand name..."
                className="w-full border-0 bg-transparent text-[1.1rem] text-[#1f1d1d] placeholder:text-[#2e2c2b]/60 focus:outline-none md:text-[1.8rem]"
              />
            </div>

            <div className="flex items-center justify-center rounded-[1.5rem] bg-[#a9a29d] px-5 py-4 shadow-[inset_0_0_0_1px_rgba(28,28,28,0.04)]">
              <button
                type="submit"
                disabled={loading}
                onClick={(e) => {
                  if (loading) e.preventDefault()
                }}
                className="flex items-center justify-center gap-3 rounded-[1.2rem] bg-[#ef7f4d] px-7 py-3 text-[1.25rem] font-bold tracking-[-0.04em] text-white shadow-sm transition-all duration-200 hover:bg-[#e57a68] focus:outline-none focus:ring-2 focus:ring-[#e57a68]/40 disabled:cursor-not-allowed disabled:bg-[#d1b7a8] disabled:text-white/80 md:min-w-[17rem]"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Searching...
                  </>
                ) : (
                  <>
                    <span className="text-[1.4rem] text-[#1d1b1b]" aria-hidden="true">
                      ✦
                    </span>
                    Find medicine
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="mt-5 text-left text-[1.12rem] tracking-[-0.02em] text-[#d46e5d]">
          Try searching for <span className="underline decoration-[1.5px] underline-offset-[0.18em]">Lipitor</span>,{' '}
          <span className="underline decoration-[1.5px] underline-offset-[0.18em]">Advil</span>, or{' '}
          <span className="underline decoration-[1.5px] underline-offset-[0.18em]">Ozempic</span>
        </div>

        <section className="mt-10 max-w-[1100px]">
          {loading ? (
            <div className="flex items-center gap-3 rounded-2xl border border-[#2c2a2a]/20 bg-white/30 p-5 text-lg text-[#1f1d1d]">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#1f1d1d]/30 border-t-[#1f1d1d]" />
              Fetching medicines...
            </div>
          ) : results.length === 0 ? (
            search.trim() ? (
              <div className="rounded-2xl border border-[#2c2a2a]/20 bg-white/30 p-5 text-lg text-[#1f1d1d]">
                No medicine found for “{search.trim()}”. Try Lipitor, Advil, or Ozempic.
              </div>
            ) : null
          ) : (
            <div className="space-y-4 rounded-2xl border border-[#2c2a2a]/20 bg-white/25 p-5 shadow-sm">
              {results.map((item, index) => (
                <div
                  key={`${item.id || item.openfda?.brand_name?.[0] || index}`}
                  onClick={() => handleMedicineClick(item)}
                  className="cursor-pointer rounded-xl border border-[#2c2a2a]/10 bg-[#f7f3ee] p-4 transition hover:bg-[#f3eee8]"
                >
                  <div className="text-2xl font-bold text-[#1f1d1d]">
                    {item.openfda?.brand_name?.[0] || 'Unknown brand'}
                  </div>
                  <div className="mt-1 text-[#2d2d2d]">
                    {item.openfda?.generic_name?.[0] || 'Generic name unavailable'}
                  </div>
                  <div className="mt-2 text-sm font-medium text-[#d46e5d]">
                    Brand search: {search.trim()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
