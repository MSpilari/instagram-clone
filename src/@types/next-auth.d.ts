import NextAuth, { User } from 'next-auth'

declare module 'next-auth' {
	export interface Session {
		user: {
			email: string
			image: string
			uid: string | undefined
			name: string
			username: string
		}
	}
}
