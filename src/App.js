import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar/Navbar';
const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style-type:none;
}
:root{
  --clr-primary: #1ABCCA;
  --clr-secondary:#DFE2E2;
  --clr-text-primary:#595757;
  --bg-primary:#F5F5F5;
}

body{
  display:flex;
  flex-direction:column;
  background:var(--bg-primary);
  font-family: 'Outfit', sans-serif;
  font-weight:400;
  font-size:1rem;
  line-height:1.5;
  width:100%;
}`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
		</>
	);
}

export default App;
