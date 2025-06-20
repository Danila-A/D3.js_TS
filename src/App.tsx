import { LinePlot } from './components/LinePlot/LinePlot';
import { dataArray, dimensions } from './helpers/variables';

export const App = () => {
  return (
    <div style={ {
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'} 
    }>
      <LinePlot 
        data={ dataArray } 
        startDimensions={ dimensions } 
      />
    </div>
  );
}
