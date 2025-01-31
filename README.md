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

⚠ ** Use a Google App Password, NOT your regular Gmail password!
⚠ ** Remove spaces from GMAIL_PASS! Gmail provides App Passwords with spaces, but they must be removed.

### 3️⃣ Folder Structure

```sh
email-test/
│── node_modules/
│── package-lock.json
│── package.json
│── sendEmail.js
│── projects/    # Stores email templates
│   ├── test.html              # Sample email template
│── .env                       # Stores email credentials (DO NOT COMMIT)
│── .gitignore                 # Prevents committing sensitive files
│── README.md                  # You are here
```

### 4️⃣ Creating Email Templates
Place your HTML templates inside the projects/ folder.

## Example: `projects/test.html`
```sh
<h1 style="color:red;">🔥 Email Template Test</h1>
<p>This is a test email using an HTML file.</p>
```

### 5️⃣ Sending an Email
Run the following command:

```sh
node sendEmail.js projects/test.html
```

### 6️⃣ 🛠 Debugging & Common Errors

❌ "Missing credentials for PLAIN"
📌 Cause: .env file isn't loading correctly.
✅ Fix:
- Manually reload environment variables:
```sh
export $(grep -v '^#' .env | xargs)
```

- Then, check if your credentials are set:
```sh
echo "$GMAIL_USER"
```
- If this prints nothing, double-check your .env formatting.


❌ "Invalid login: 535-5.7.8 Username and Password not accepted"
📌 Cause: Incorrect Gmail credentials.
✅ Fix:
- Ensure you're using a Google App Password, NOT your regular password.

- Remove spaces in GMAIL_PASS.
```sh
GMAIL_PASS=abcdefghijkmnop  ✅ Correct
GMAIL_PASS=abcd efgh ijkl mnop  ❌ Incorrect
```

- Double-check formatting in .env (no quotes, no extra spaces):
```sh
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=abcdefghijkmnop
```


❌ "Template not found"
📌 Cause: The file path is incorrect or missing.
✅ Fix:
- Check the correct file path with:
```sh
ls projects/example_project/
```

- Ensure you run the command with the correct path:
```sh
node sendEmail.js projects/example_project/test.html
```


❌ "Email not arriving"
📌 Cause: Gmail might have flagged it as spam.
✅ Fix:
- Check your spam folder.
- Try sending to a different email provider (e.g., Outlook, Yahoo).
- Ensure your email content isn't empty.
- Use a recognized "From" email address (not a random domain)









