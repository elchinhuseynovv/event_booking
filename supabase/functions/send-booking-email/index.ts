import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface BookingData {
  selectedArtist: string
  artistName: string
  eventDate: string
  eventTime: string
  eventDuration: string
  eventType: string
  venueName: string
  venueAddress: string
  guestCount: string
  specialRequests?: string
  contactName: string
  contactEmail: string
  contactPhone: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Parse the request body
    const bookingData: BookingData = await req.json()

    // Validate required fields
    const requiredFields = [
      'selectedArtist', 'artistName', 'eventDate', 'eventTime', 
      'eventDuration', 'eventType', 'venueName', 'venueAddress', 
      'guestCount', 'contactName', 'contactEmail', 'contactPhone'
    ]

    for (const field of requiredFields) {
      if (!bookingData[field as keyof BookingData]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }
    }

    // Get Resend API key from environment variables
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not set')
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create email content
    const emailSubject = `New Booking Request - ${bookingData.artistName} for ${bookingData.eventDate}`
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Booking Request</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .section { margin-bottom: 20px; }
            .section h3 { color: #1a1a1a; border-bottom: 2px solid #a0a0a0; padding-bottom: 5px; }
            .detail { margin: 10px 0; }
            .label { font-weight: bold; color: #555; }
            .value { margin-left: 10px; }
            .footer { background: #1a1a1a; color: white; padding: 15px; text-align: center; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>RAW MEDIA</h1>
              <h2>New Booking Request</h2>
            </div>
            
            <div class="content">
              <div class="section">
                <h3>Artist Information</h3>
                <div class="detail">
                  <span class="label">Artist:</span>
                  <span class="value">${bookingData.artistName}</span>
                </div>
              </div>

              <div class="section">
                <h3>Event Details</h3>
                <div class="detail">
                  <span class="label">Date:</span>
                  <span class="value">${bookingData.eventDate}</span>
                </div>
                <div class="detail">
                  <span class="label">Time:</span>
                  <span class="value">${bookingData.eventTime}</span>
                </div>
                <div class="detail">
                  <span class="label">Duration:</span>
                  <span class="value">${bookingData.eventDuration} hours</span>
                </div>
                <div class="detail">
                  <span class="label">Event Type:</span>
                  <span class="value">${bookingData.eventType}</span>
                </div>
              </div>

              <div class="section">
                <h3>Venue Information</h3>
                <div class="detail">
                  <span class="label">Venue Name:</span>
                  <span class="value">${bookingData.venueName}</span>
                </div>
                <div class="detail">
                  <span class="label">Address:</span>
                  <span class="value">${bookingData.venueAddress}</span>
                </div>
                <div class="detail">
                  <span class="label">Guest Count:</span>
                  <span class="value">${bookingData.guestCount} people</span>
                </div>
              </div>

              <div class="section">
                <h3>Contact Information</h3>
                <div class="detail">
                  <span class="label">Name:</span>
                  <span class="value">${bookingData.contactName}</span>
                </div>
                <div class="detail">
                  <span class="label">Email:</span>
                  <span class="value">${bookingData.contactEmail}</span>
                </div>
                <div class="detail">
                  <span class="label">Phone:</span>
                  <span class="value">${bookingData.contactPhone}</span>
                </div>
              </div>

              ${bookingData.specialRequests ? `
                <div class="section">
                  <h3>Special Requests</h3>
                  <div class="detail">
                    <span class="value">${bookingData.specialRequests}</span>
                  </div>
                </div>
              ` : ''}
            </div>

            <div class="footer">
              <p>This booking request was submitted through raw-media.co</p>
              <p>Please respond to the client within 24 hours</p>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
      NEW BOOKING REQUEST - RAW MEDIA
      
      Artist: ${bookingData.artistName}
      
      EVENT DETAILS:
      Date: ${bookingData.eventDate}
      Time: ${bookingData.eventTime}
      Duration: ${bookingData.eventDuration} hours
      Event Type: ${bookingData.eventType}
      
      VENUE INFORMATION:
      Venue Name: ${bookingData.venueName}
      Address: ${bookingData.venueAddress}
      Guest Count: ${bookingData.guestCount} people
      
      CONTACT INFORMATION:
      Name: ${bookingData.contactName}
      Email: ${bookingData.contactEmail}
      Phone: ${bookingData.contactPhone}
      
      ${bookingData.specialRequests ? `SPECIAL REQUESTS:\n${bookingData.specialRequests}\n` : ''}
      
      This booking request was submitted through raw-media.co
      Please respond to the client within 24 hours.
    `

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RAW MEDIA Bookings <bookings@raw-media.co>',
        to: ['info@raw-media.co'],
        reply_to: bookingData.contactEmail,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend API error:', errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const resendResult = await resendResponse.json()
    console.log('Email sent successfully:', resendResult)

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Booking request sent successfully',
        emailId: resendResult.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-booking-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})