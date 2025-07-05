function App() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center mb-6 mt-2 border-b border-gray-500 py-2 mx-2">
        <h1 className="text-2xl font-bold text-gray-100">Копилка</h1>
        <div className="flex gap-3">
          <input type="text" className="bg-red-50 rounded px-1" placeholder="Найти"></input>
        </div>
      </header>
    </div>
  )
}

export default App
