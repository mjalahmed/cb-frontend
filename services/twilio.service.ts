import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !phoneNumber) {
  console.warn('Twilio credentials not configured. OTP functionality will be disabled.');
}

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function sendOTP(phoneNumber: string): Promise<{ success: boolean; message?: string }> {
  if (!client || !phoneNumber) {
    // In development, return success without actually sending SMS
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV] Would send OTP to ${phoneNumber}`);
      return { success: true, message: 'OTP sent (dev mode)' };
    }
    throw new Error('Twilio is not configured');
  }

  try {
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // In production, you would store this OTP in database/cache and verify it
    // For now, we'll just send the SMS
    await client.messages.create({
      body: `Your verification code is: ${otp}`,
      from: phoneNumber,
      to: phoneNumber,
    });

    // TODO: Store OTP in database/cache with expiration
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Twilio error:', error);
    throw new Error('Failed to send OTP');
  }
}

export async function verifyOTP(phoneNumber: string, otp: string): Promise<boolean> {
  // TODO: Implement OTP verification from database/cache
  // For now, return true in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEV] Verifying OTP ${otp} for ${phoneNumber}`);
    return true;
  }
  
  // In production, verify against stored OTP
  throw new Error('OTP verification not fully implemented');
}
