import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const logData = {
    event: {
      url: request.url,
      method: request.method,
      ip: ip,
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date().toISOString()
    }
  };

  fetch('https://intelligential-arseniuretted-braelyn.ngrok-free.dev/services/collector/event', {
    method: 'POST',
    headers: {
      'Authorization': '98fefb7a-8af5-4274-8938-606dd0ed6861',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(logData)
  }).catch((err) => console.error('Splunk Log Error:', err));

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}