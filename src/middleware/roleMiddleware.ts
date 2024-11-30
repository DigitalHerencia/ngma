import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

export function roleMiddleware(role: string) {
  return (req: NextRequest) => {
    const userRole = req.cookies.get('role');
    if (userRole !== (role as unknown as RequestCookie)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    return NextResponse.next();
  };
}
