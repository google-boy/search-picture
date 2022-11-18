import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const configuration = new Configuration({
    apiKey: process.env.REACT_Open_AI_Key
  })

  const openai = new OpenAIApi(configuration)

  const generateImage = async () => {
    // TODO
  }

  return (
    <div className="App">
      <>
        <h2>Generate Image using Open AI API</h2>
        <textarea
          className="app-input"
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh"
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40" 
        />
        <button onClick={generateImage}>Generate an Image</button>
      </>
    </div>
  )
}

export default App