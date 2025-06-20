import { BarChart } from './components/BarChart/BarChart';
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
      <BarChart 
        data={ dataArray } 
        startDimensions={ dimensions } 
      />
    </div>
  );
}
