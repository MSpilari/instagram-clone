import 'next-auth'
import { User } from 'next-auth'

declare module 'next-auth' {
	interface User {
		username: string
		uid: string
	}

	interface Session {
		user: User
	}
}
