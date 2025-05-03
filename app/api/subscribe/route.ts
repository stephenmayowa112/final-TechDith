import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const API_KEY = process.env.MAILERLITE_API_KEY!
    const GROUP_ID = Number(process.env.MAILERLITE_GROUP_ID!)
    console.log('MailerLite API_KEY:', API_KEY)
    console.log('MailerLite GROUP_ID:', GROUP_ID)

    const url = `https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`
    console.log('Subscribing via URL:', url)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('MailerLite error:', res.status, text)
      return NextResponse.json({ error: text }, { status: res.status })
    }

    return NextResponse.json({ message: 'Subscribed' }, { status: 200 })
  } catch (error) {
    console.error('Internal server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}