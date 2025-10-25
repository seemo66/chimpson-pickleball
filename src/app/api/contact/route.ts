import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstname, lastname, email, message } = data;
    console.log('Received contact form data: ', firstname, lastname, email, message);

    await resend.emails.send({
      from: 'www.chimpsonpickleball.com',
      to: 'seemo66@gmail.com',
      subject: `New message from ${firstname} ${lastname}`,
      text: `From: ${firstname} ${lastname} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
