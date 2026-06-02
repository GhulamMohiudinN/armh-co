import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const MARKETS = ['uk', 'uae'] as const
type Market = typeof MARKETS[number]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Get market from cookie
  const marketCookie = request.cookies.get('armh_market')?.value as Market | undefined
  
  // Get market from URL path
  const pathMarket = MARKETS.find(m => pathname.startsWith(`/${m}`))
  
  // If on root path
  if (pathname === '/') {
    // In production, redirect to saved market preference; in development, show market selector
    if (process.env.NODE_ENV === 'production' && marketCookie && MARKETS.includes(marketCookie)) {
      const url = request.nextUrl.clone()
      url.pathname = `/${marketCookie}`
      return NextResponse.redirect(url)
    }
    // Otherwise, show market selector (no redirect)
    return NextResponse.next()
  }
  
  // If on a market-specific path
  if (pathMarket) {
    // Update cookie to match current path
    const response = NextResponse.next()
    if (!marketCookie || marketCookie !== pathMarket) {
      response.cookies.set('armh_market', pathMarket, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365, // 1 year
      })
    }
    return response
  }
  
  // For all other paths, proceed normally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|flags|.*\\..*$).*)',
  ],
}
