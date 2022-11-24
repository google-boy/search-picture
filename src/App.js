import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import Container from "react-bootstrap/Container";

function App() {
  const [prompt, setPrompt] = useState('')
  const configuration = new Configuration({
    apiKey: process.env.REACT_Open_AI_Key
  })

  const openai = new OpenAIApi(configuration)

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    })
    console.log(response.data.data[0].url)
  }

  return (
    <Container fluid className="App">
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
    </Container>
  )
}

export default App