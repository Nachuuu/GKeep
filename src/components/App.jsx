import React from 'react'
import Header from './Header.jsx'
import Note from './Note.jsx'
import Footer from './Footer.jsx'
import notes from './notes.js'




function App(){
  
  return (
    <div>
      <Header />
      {notes.map(value => <Note title={value.title} content={value.content} />)}
      <Footer />
    </div>
  )
}

export default App