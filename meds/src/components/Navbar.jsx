function Navbar() {
  const links = ['About', 'Solutions', 'Resources', 'Pricing']

  return (
    <header className="w-full border-b border-[#2d2d2d]/10 bg-[#e7e3df] px-5 py-4 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f1d1d] text-lg font-bold text-[#f4efe7]">
            M
          </div>
          <span className="text-[2rem] font-black tracking-[-0.07em] text-[#1f1d1d]">
            Med<span className="text-[#e57a68]">Help</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-[0.95rem] font-medium text-[#2a2a2a] md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="transition-opacity hover:opacity-75">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-[#2a2a2a]/20 px-4 py-2 text-sm font-semibold text-[#1f1d1d] md:inline-flex">
            Log in
          </button>
          <button className="rounded-full bg-[#1f1d1d] px-5 py-2.5 text-sm font-semibold text-[#f4efe7] transition-opacity hover:opacity-90">
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
