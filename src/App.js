import './index.css'
import { useState } from 'react';



function App() {

  const [Work, setWork] = useState('')
  console.log(Work)


  return (
    <div class="tudolist">
      <input type="text" class = "taskbar" 
      value={Work}
      onChange={e => setWork(e.target.value)}
      />
      <button
      type='button'
      className='btn'
      >add</button>
    </div>
  );
}

export default App;
