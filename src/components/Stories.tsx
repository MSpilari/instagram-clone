import { useEffect, useState, useRef } from 'react'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'
import { api } from '../services/api'
import { Story } from './Story'

interface IStories {
	login: {
		username: string
	}
	picture: {
		thumbnail: string
	}
}

interface IResponse {
	results: []
}

const Stories = () => {
	const [stories, setStories] = useState([] as IStories[])

	const contentWrapper = useRef(null)

	const scroll = (element: any, direction: string) => {
		return direction === 'left'
			? (element.scrollLeft -= 200)
			: (element.scrollLeft += 200)
	}

	useEffect(() => {
		const hasStories = sessionStorage.getItem('stories')

		hasStories
			? setStories(JSON.parse(hasStories))
			: api.get<IResponse>('?results=15').then(response => {
					const { results } = response.data

					setStories(results)
					sessionStorage.setItem('stories', JSON.stringify(results))
			  })
	}, [])

	return (
		<section className='flex relative items-center self-start row-start-1 col-start-1 col-span-2 border-2 border-gray-200 m-2  space-x-2 rounded-sm lg:w-10/12 lg:ml-auto lg:mr-5 lg:max-w-2xl'>
			<FaChevronCircleLeft
				className='absolute top-1/3 w-6 h-6 text-gray-300 cursor-pointer z-10 hover:scale-110 ease-out hover:text-gray-400'
				onClick={() => scroll(contentWrapper.current, 'left')}
			/>
			<div
				ref={contentWrapper}
				className='flex relative items-center overflow-x-hidden scroll-smooth'
			>
				{stories.map((story, index) => (
					<Story
						key={index}
						avatar={story.picture.thumbnail}
						username={story.login.username}
					/>
				))}
			</div>
			<FaChevronCircleRight
				className='absolute right-0 top-1/3 w-6 h-6 text-gray-300 cursor-pointer z-10 hover:scale-110 ease-out hover:text-gray-400'
				onClick={() => scroll(contentWrapper.current, 'right')}
			/>
		</section>
	)
}
export { Stories }
