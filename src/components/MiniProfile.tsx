import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Suggestion } from './Suggestion'
import { api } from '../services/api'

interface IResponse {
	results: []
}
interface ISuggestions {
	login: {
		username: string
	}
	picture: {
		thumbnail: string
	}
}

const MiniProfile = () => {
	const [suggestions, setSuggestions] = useState([] as ISuggestions[])

	useEffect(() => {
		const prevSuggestions = sessionStorage.getItem('suggestions')

		prevSuggestions
			? setSuggestions(JSON.parse(prevSuggestions))
			: api.get<IResponse>('?results=5').then(response => {
					const { results } = response.data

					setSuggestions(results)

					sessionStorage.setItem('suggestions', JSON.stringify(results))
			  })
	}, [])

	return (
		<aside className='hidden flex-col row-start-1 grid-cols-1 col-start-3 w-3/5 justify-center my-5 max-w-lg min-w-max lg:flex '>
			<div className='flex items-center'>
				<div className='flex items-center justify-center relative w-16 h-16 rounded-full overflow-hidden mr-2'>
					<Image
						src='https://github.com/MSpilari.png'
						alt='User Image'
						objectFit='contain'
						layout='fill'
						sizes='50ww'
					/>
				</div>
				<div className='flex flex-col justify-center mr-2'>
					<p className='text-xs font-bold'>m.spilari</p>
					<p className='text-gray-400 text-sm'>Matheus Bernardes Spilari</p>
				</div>
				<button className='text-blue-500 font-semibold text-sm ml-auto'>
					Edit
				</button>
			</div>
			<div className='flex flex-col'>
				<div className='flex items-center justify-between my-3'>
					<p className='text-sm text-gray-400 font-bold'>Suggestions for you</p>
					<button className='text-xs text-black font-semibold'>See all</button>
				</div>
				<div className='flex flex-col justify-center'>
					{suggestions.map((suggestion, index) => (
						<Suggestion
							key={index}
							avatar={suggestion.picture.thumbnail}
							username={suggestion.login.username}
						/>
					))}
				</div>
			</div>
		</aside>
	)
}

export { MiniProfile }
