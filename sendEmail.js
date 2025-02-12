require('dotenv').config();
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const args = process.argv.slice(2); // Get command-line arguments
if (args.length === 0) {
    console.error("❌ No email template specified. Usage: node sendEmail.js project/file_name.html");
    process.exit(1);
}

const templatePath = path.join(__dirname, args[0]);

if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template not found: ${templatePath}`);
    process.exit(1);
}

const htmlContent = fs.readFileSync(templatePath, 'utf-8');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const emails = process.env.TO_EMAILS.split(',');

const mailOptions = {
    from: process.env.GMAIL_USER,
    to: emails,
    subject: 'HTML Email Test 5',
    html: htmlContent
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('❌ Error sending email:', error);
    } else {
        console.log('✅ Emails sent successfully! 🎉', info.response);
    }
});

/* automation is good */