import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";


function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

 

  const handleReview = async () => {
    const res = await fetch("https://ai-code-reviewer-7507.onrender.com/ai/get-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: code }),
    });

    const data = await res.json();
    setReview(data.review);
  };

  return (
    <main className="container">
      <div className="left">
        <textarea
          placeholder="Write code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={handleReview}>Review</button>

        
      </div>
      

      <div className="right">
  <ReactMarkdown>
    {review}
  </ReactMarkdown>
</div>
    </main>
  );
}

export default App;