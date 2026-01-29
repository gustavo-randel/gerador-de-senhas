import { useState } from "react"

function App() {
  const [password, setPassword] = useState('')
  const [copy, setCopy] = useState('Copiar')
  const [passwordSize, setPasswordSize] = useState(12)

  function generate() {
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newPassword = ''
    for (let i = 0; i < passwordSize; i++) {
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
    <div>
      <label htmlFor="passwordSize">Tamanho da senha:</label>
      <input type="number" 
      id="passwordSize" 
      min={1} 
      value={passwordSize} onChange={(ev) => setPasswordSize(ev.target.value) }/>
    </div>
    <button onClick={generate}>Gerar senha com: {passwordSize} caracteres!</button>
    <button onClick={copyToClipboard}>{copy}</button> 
    <div><code>{password}</code></div>
    </div> 
  )
}

export default App
