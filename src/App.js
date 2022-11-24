import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
        <hr />
        <Form>
          <Form.Group className="SearchInput">
            <Form.Control as="textarea"
             placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
             onChange={(e) => setPrompt(e.target.value)}/>
          </Form.Group>
          <Button onClick={generateImage}>Generate an Image</Button>
        </Form>
      </>
    </Container>
  )
}

export default App