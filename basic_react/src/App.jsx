import './App.css'
import Tittle from './Tittle.jsx';

function Description(){
  return( 
 <div>
<h1>this is my app component</h1>
<p>Like my Component</p>
 </div>
  );
}

function App() {
return (
  <div>
  <Description />
<Tittle />
</div>
);
}

export default App
