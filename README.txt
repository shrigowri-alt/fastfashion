FASTFASHION — GitHub Pages + GA4 student website

FILES
- index.html       Home page
- products.html    Product catalogue (8 sample products + category filters)
- about.html       Brand story, mission, vision and sample personas
- contact.html     Contact and newsletter demonstration forms
- style.css        Shared responsive styling
- script.js        Navigation, filters, validation and GA4 event interactions

IMPORTANT
1. This is a front-end demonstration. No shopping cart, checkout, backend, email sending,
   mailing list, or data storage is configured.
2. Sample prices, brand details and testimonials/personas are fictional.
3. Product interactions send GA4 select_item events (after you add your real GA4 ID).
4. Demo enquiry/newsletter forms send demo_form_submit, NOT generate_lead or sign_up.
5. Replace G-XXXXXXXXXX in the Google tag snippet in ALL FOUR HTML files with your
   actual GA4 Measurement ID. Then commit and push the updated files.
6. Product photos load from Unsplash via public image URLs, so internet access is required.

PUBLISH
Upload the six website files to the root of a GitHub repository, then:
Settings > Pages > Deploy from a branch > main > /(root) > Save.
