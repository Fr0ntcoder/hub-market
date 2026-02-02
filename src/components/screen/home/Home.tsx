import { Container } from '@/components/ui'

import { ChooseCity } from './choose-city'
import { HomeSlider } from './home-slider'

const Home = () => {
	return (
		<Container className='flex flex-col items-start gap-5'>
			<ChooseCity />
			<HomeSlider />
		</Container>
	)
}

export default Home
