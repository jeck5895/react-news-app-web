export default function Navbar() {
  return (
    <header className="dark-mode flex justify-between md:px-[10%] py-6">
      <h1 className="font-[Bree_Serif] text-2xl">Daily News</h1>

      <div className="flex gap-1">
        <h3 className="no-margin toggle">
          <i className="fas fa-toggle-off"></i>
        </h3>
        <h3 className="no-margin relative">
          <i className="fas fa-bookmark"></i>
          <span className="badge px-1 rounded-full">{3}</span>
        </h3>
      </div>
    </header>
  )
}
