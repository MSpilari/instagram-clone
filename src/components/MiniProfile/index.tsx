import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { Suggestion } from './Suggestion'
import { api } from '../../services/api'

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
	const { data: session } = useSession()

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

	return session ? (
		<aside className='hidden flex-col row-start-1 self-start row-end-2 grid-cols-1 col-start-3 w-3/5 justify-center my-5 min-w-max lg:flex sticky top-20'>
			<div className='flex items-center'>
				<div className='flex items-center justify-center relative w-16 h-16 rounded-full overflow-hidden mr-2'>
					<Image
						src={session.user.image || ''}
						alt='User Image'
						objectFit='contain'
						layout='fill'
						sizes='50ww'
					/>
				</div>
				<div className='flex flex-col justify-center mr-2'>
					<p className='text-xs font-bold'>{session.user.username}</p>
					<p className='text-gray-400 text-sm'>{session.user.name}</p>
				</div>
				<button
					onClick={() => signOut()}
					className='text-blue-500 font-semibold text-sm ml-auto'
				>
					Log Out
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
	) : null
}

export { MiniProfile }
