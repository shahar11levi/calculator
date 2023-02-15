import Background from './components/Background.js';
import Display from './components/Display';
import Board from './components/Board';
import Button from './components/Button';
import CalculatorProvider from './context/Calculator';

const buttons = [
  ["AC","+/-","%","/"],
  [7,8,9,"X"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];

function App() {
  return (
    <div>
      <CalculatorProvider>  
        <Background>
          <Display/>
          <Board>
            {buttons.flat().map((val,index)=>(
              <Button value={val} />
            ))}
          </Board>
        </Background>
      </CalculatorProvider>  
    </div>
  );
}


export default App;
