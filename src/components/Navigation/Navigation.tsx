const Navigation = () => {
  return (
    <nav className="mb-24">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="font-[zilla] text-7xl text-dark-green">sloan.</h2>
        </div>
        <div className="flex items-center space-x-8">
          <a href="www.google.com" className="text-xl font-semibold text-light-green">Who <span className="italic">is</span> she?</a>
          <a href="www.google.com" className="text-xl font-semibold text-light-green">What does she <span className="italic">do</span>?</a>
          <a href="www.google.com" className="text-xl font-semibold text-light-green">What are her credentials?</a>
          <a href="www.google.com" className="text-xl font-semibold text-light-green">You should call her.</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;