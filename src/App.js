import logo from './logo.svg';
import './App.css';

export function flatten(arr){
  if(Array.isArray(arr)){
    const flattenedArray = []
    function handleFlattenArray(a){
      a.forEach((el)=>{
        if(Array.isArray(el)){
          handleFlattenArray(el)
        }else{
          flattenedArray.push(el)
        }
      })
    }
    handleFlattenArray(arr);
    return flattenedArray
  }
  return "No es un arreglo"
}


function App() {
  console.log(flatten([1, [2, [3, [4, 5]]]]))
  console.log(flatten([6, [1, [2, 3], 4], 5]))
  console.log(flatten([[[1, 2,], 3], 4, 5]))
  console.log(flatten(1))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
