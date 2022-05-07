import { useState } from 'react';
//import ReactDOM from 'react-dom/client';

function SecondComponent() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  return (
    <>
    <form>
      <label>Enter your First name:
        <input
          type="text" 
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          
        />
      </label><br></br>
      <br></br>
      <label>Enter your Last name:
        <input
          type="text" 
          value={lname}
          onChange={(e) => setLName(e.target.value)}
        />
      </label>
    </form>
    <div>    
      <a href="http://info.indiatimes.com/rss/toi.opml">Top Stories</a>
    </div>
    </>
  )
}

export default SecondComponent;