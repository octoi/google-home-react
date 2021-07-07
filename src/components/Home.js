import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Home = () => {
	return (
		<Container>
			<h2>Hello World</h2>
		</Container>
	)
}

export default Home
