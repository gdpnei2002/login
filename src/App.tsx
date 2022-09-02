import { GlobalStyle } from './styles/Global.style';
import { BrowserRouter } from 'react-router-dom';
import { IndexRoute } from './routes/index';

export function App() {
  return (
    <div className="__window">
      <GlobalStyle />
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </div>
  );
}
