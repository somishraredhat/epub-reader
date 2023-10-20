import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

const App = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const fileName = `files/${queryParameters.get("file")}`
  const [location, setLocation] = useState<string | number>(2)
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url={fileName}
        location={location}
        locationChanged={(epubcifi: string) => setLocation(epubcifi)}
      />
    </div>
  )
}

export default App