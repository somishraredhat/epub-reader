import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

const App = () => {
  const [location, setLocation] = useState<string | number>(2)
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url="/files/alice.epub"
        location={location}
        locationChanged={(epubcifi: string) => setLocation(epubcifi)}
      />
    </div>
  )
}

export default App