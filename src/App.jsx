import styled from 'styled-components';
import { Contact, Hero, Who, Works } from './components/index.js';

const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	color: white;
	background: url('./img/bg.jpeg');

	&::-webkit-scrollbar {
		display: none;
	}
`;

function App() {
	return (
		<Container>
			<Hero />
			<Who />
			<Works />
			<Contact />
		</Container>
	);
}

export default App;
