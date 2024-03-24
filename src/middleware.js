import { NextResponse } from 'next/server'
 
const privatePaths =['/admin'];
const authPaths = ['/account'];
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const {pathname} = request.nextUrl;
    const accessToken = request.cookies.get('accessToken');
    if(privatePaths.some(path => pathname.startsWith(path)) && !accessToken) {
        return NextResponse.redirect(new URL('/account/login', request.url))
    }
    if(authPaths.some(path => pathname.startsWith(path)) && accessToken) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/account/:path*', '/admin/:path*']
}