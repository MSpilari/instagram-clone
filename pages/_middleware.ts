import { NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest & NextApiRequest) {
	const token = await getToken({
		req,
		secret: process.env.NEXT_AUTH_SECRET || ''
	})

	const { pathname } = req.nextUrl

	if (pathname === '/' && !token) {
		return NextResponse.redirect('/auth/signin')
	} else if (pathname === '/' && token) {
		return NextResponse.next()
	} else if (pathname === '/auth/signin' && token) {
		return NextResponse.next()
	}
}
