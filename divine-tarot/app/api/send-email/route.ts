import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy')

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured - email will not be sent')
  }

  try {
    const body = await req.json()

    const { type, name, email, message, subject } = body

    if (!email || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    let emailSubject = ''
    let htmlContent = ''

    if (type === 'contact') {
      emailSubject = `New Contact Form: ${subject || 'General'}`
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #E6D5FF, #C8A8FF); padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #faf9f6; padding: 20px; border: 1px solid #e5e5e5; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4a4a4a; }
            .value { color: #1a1a1a; }
            .footer { background: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; color: #1a1a1a;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject || 'General Inquiry'}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message || 'No message'}</div>
              </div>
            </div>
            <div class="footer">
              Sent from Divine Tarot Contact Form
            </div>
          </div>
        </body>
        </html>
      `
    }

    if (type === 'newsletter') {
      emailSubject = 'New Newsletter Subscription'
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #E6D5FF, #C8A8FF); padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #faf9f6; padding: 20px; border: 1px solid #e5e5e5; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4a4a4a; }
            .value { color: #1a1a1a; }
            .footer { background: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; color: #1a1a1a;">New Newsletter Subscription</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
            </div>
            <div class="footer">
              Sent from Divine Tarot Newsletter Form
            </div>
          </div>
        </body>
        </html>
      `
    }

    const { data, error } = await resend.emails.send({
      from: 'Divine Tarot <onboarding@resend.dev>',
      to: 'thedivinetarot111@gmail.com',
      subject: emailSubject,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}