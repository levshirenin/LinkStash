import Header from "./components/Header"
import Post from "./components/Post"

import links from "./db.json"

function App() {
  return (
    <>
      <Header />
      <div className="flex-row container mx-auto p-2">
        {Object.entries(links).map(([title, link]) => (
          <Post title={title} links={link} />
        ))}
      </div>
    </>
  )
}

export default App
