import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    
    const response = await fetch('https://gpt-auth-ch20.onrender.com/get_credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
