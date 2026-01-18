import { useState } from "react"

// import { useState } from 'react'
function App() {
  const [password, setPassword] = useState('')
  const [copy, setCopy] = useState('Copiar')

  function generate() {
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const length = 12
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopy('Copiar')
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password)
    setCopy('Copiado!')
  }

  return ( 
    <div className="App">
    <h1>Gerador de Senhas</h1>
    <button onClick={generate}>Gerar!</button>
    <button onClick={copyToClipboard}>{copy}</button> 
    <div><code>{password}</code></div>
    </div> 
  )
}

export default App
