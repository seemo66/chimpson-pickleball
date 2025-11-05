import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstname, lastname, email, message } = data;

    await resend.emails.send({
      from: 'Chimpson Pickleball <noreply@chimpsonpickleball.com>', // must match your verified domain
      to: 'info@chimpsonpickleball.com', // your personal inbox
      subject: `New message from ${firstname} ${lastname}`,
      text: `From: ${firstname} ${lastname} <${email}>\n\n${message}`,
      replyTo: `${firstname} ${lastname} <${email}>`, // this line lets you reply directly to sender
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
