Profile Website

Simple static profile site with a contact form. 

Files added:
- index.html — main page with profile and contact form
- styles.css — basic responsive styling
- script.js — form validation and optional Formspree integration

How to use

1. Static hosting with XAMPP
   - Place the folder in `C:\xampp\htdocs\My Profile` (already created).
   - Start Apache via the XAMPP control panel.
   - Visit http://localhost/My%20Profile/ in your browser.

2. Enabling Formspree (optional)
   - Create a free Formspree form at https://formspree.io/ and copy the endpoint URL.
   - Open `script.js` and set the `FORMSPREE_ENDPOINT` constant to your endpoint string.
   - The form will POST JSON to Formspree and show a success message.

3. Mail client fallback
   - If you don't provide a Formspree endpoint, submitting the form will open the user's default mail client with a prefilled message.

Customization

- Replace `avatar.png` with your photo in the same folder.
- Update social links in `index.html`.
- Edit colors in `styles.css`.

Notes

- This is a static site and does not store messages on the server by default. Use Formspree or a backend to collect messages.

License

MIT
