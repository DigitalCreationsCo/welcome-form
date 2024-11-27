import nodemailer from 'nodemailer';

export async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const formData = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@outlook.com", // Replace with your email
      pass: process.env.EMAIL_PASSWORD // Set this in your environment variables
    }
  });

  try {
    await transporter.sendMail({
      from: 'your-email@outlook.com',
      to: 'bryantmejia722@outlook.com',
      subject: 'New Survey Response',
      html: `
        <h2>New Survey Response</h2>
        <h3>Personal Information:</h3>
        <p>Name: ${formData.name}</p>
        <p>Age: ${formData.age}</p>
        <p>State: ${formData.state}</p>
        <p>City: ${formData.city}</p>
        
        <h3>Survey Responses:</h3>
        <p>Visit Reason: ${formData.visitReason}</p>
        <p>Works in Tech: ${formData.techIndustry}</p>
        <p>Favorite Software: ${formData.favoriteSoftware}</p>
        <p>Tech Excitement: ${formData.techExcitement}</p>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}