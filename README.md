# Email Test Environment 📧

This project allows you to send HTML email templates to multiple recipients using **Node.js + Nodemailer**.

## 🚀 Setup

### 1️⃣ Install Dependencies
Run this inside the project directory:

```sh
npm install
```

### 2️⃣ Create the .env File (Required)
Before running the script, you must create a .env file in the project root:

```sh
touch .env
```

Then, add the following credentials:

```sh
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
TO_EMAILS=example.user@gmail.com,example.user@outlook.com,example.user@yahoo.com,user@example.com
```

⚠ **DO NOT COMMIT THIS FILE** → It's ignored via `.gitignore`.


### 3️⃣ Folder Structure

```sh
email-test/
│── node_modules/
│── package-lock.json
│── package.json
│── sendEmail.js
│── my_email_project/    # Stores email templates
│   ├── test.html              # Sample email template
│── .env                       # Stores email credentials (DO NOT COMMIT)
│── .gitignore                 # Prevents committing sensitive files
│── README.md                  # You are here
```

### 4️⃣ Creating Email Templates
Place your HTML templates inside the cardcorp_notifications/ folder.

## Example: `my_email_project/test.html`
```sh
<h1 style="color:red;">🔥 Email Template Test</h1>
<p>This is a test email using an HTML file.</p>
```

### 5️⃣ Sending an Email
Run the following command:

```sh
node sendEmail.js my_email_project/test.html
```

### 6️⃣ Troubleshooting
❌ Getting an authentication error?

## Ensure you created an App Password for Gmail.
## 🔗 Generate one here: https://myaccount.google.com/apppasswords

## 📥 Email not arriving?
Check your Spam folder.
