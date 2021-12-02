import { getProviders, SessionProviderProps, signIn } from 'next-auth/react'

interface GetProvidersResponse {
	[provider: string]: SessionProviderProps
}

const SignIn = ({ providers }: GetProvidersResponse) => {
	return (
		<>
			{Object.values(providers).map(provider => (
				<div key={provider.name}>
					<button onClick={() => signIn(provider.id)}>
						Sign in with {provider.name}
					</button>
				</div>
			))}
		</>
	)
}

//Server Side Rendering...
export async function getServerSideProps() {
	const providers = await getProviders()

	return {
		props: {
			providers
		}
	}
}

export default SignIn
