import { getToken } from 'next-auth/jwt'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export default async function middleware(req: NextApiRequest) {
	const token = await getToken({
		req,
		secret: process.env.NEXT_AUTH_SECRET || ''
	})

	if (req.url === '/' && !token) {
		return NextResponse.redirect('/auth/signin')
	}
	if (req.url === '/' && token) {
		return NextResponse.next()
	}
}
