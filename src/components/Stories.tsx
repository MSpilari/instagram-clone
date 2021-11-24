import { useEffect, useState } from 'react'
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
		<section className='flex relative items-center col-span-2 border-2 border-gray-200 m-2 overflow-x-scroll lg:w-10/12 rounded-sm lg:ml-auto space-x-2'>
			{stories.map((story, index) => (
				<Story
					key={index}
					avatar={story.picture.thumbnail}
					username={story.login.username}
				/>
			))}
		</section>
	)
}
export { Stories }
