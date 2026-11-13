# WAQAR AL ANABI

A responsive, static storefront for the WAQAR AL ANABI clothing brand.

**Live preview:** https://yuseeb.github.io/waqar-al-anabi-store/

## Included in the static storefront
- Responsive landing page, Men and Women collections, product detail pages and image gallery
- Product search, category and price filters, sorting, favourites and shopping bag
- Browser-persisted cart, favourites and theme preference
- Checkout form that emails an order request to **waqaralanabi0@gmail.com** through FormSubmit
- Customer information pages, mobile navigation, accessibility focus styles and basic SEO metadata
- Pakistan-first market selector

## Order email setup
1. Open the published site and submit a test order.
2. Open **waqaralanabi0@gmail.com** and find the FormSubmit activation email.
3. Click the activation link.
4. Submit another test order and verify the email arrives. Check Spam/Junk if necessary.
5. Do not announce order intake until the test succeeds.

FormSubmit is a third-party email relay. It may process customer name, email, phone number, delivery address, cart items and payment preference. Review its current privacy and service terms. Never ask customers to enter card numbers, CVV, passwords or OTPs in this form.

## How to update the catalogue
Edit the `products` array in `script.js`. Each product has an ID, name, category, price, image path/URL, available sizes, fit notes, fabric details and size guide. Replace sample data only with confirmed information. For product photos, upload optimized images into `assets/products/` and set each product's `img` field to that path. Keep image filenames lowercase and use WebP/JPG for web performance.

## Before accepting real sales
- Replace every sample/stock photo with approved product photography.
- Confirm prices, colours, stock, fabric composition, fit, garment measurements and size availability.
- Confirm shipping fees, delivery estimates, returns/exchanges and customer-service hours.
- Review the privacy notice, terms and all customer-facing policies with the business owner.
- Verify FormSubmit activation and successful delivery of test orders.
- Test the site on desktop and mobile browsers and check every product, link, form and image.
- Connect a supported payment gateway through a secure server-side integration before advertising online payments.

## Important limitations
This is a static GitHub Pages site. Cart and favourites are saved in each visitor's browser. Email checkout sends an **order request**, not a confirmed sale. It does not collect payment, reserve inventory, provide a stock dashboard, issue receipts, or track deliveries. Payment choices are preferences only until a payment provider is securely integrated. Do not put secret API keys in `script.js` or any public repository file.

## Publish
GitHub Pages is configured from the `main` branch root. After a commit, allow Pages to deploy and refresh the published site. If an old version appears, hard-refresh after deployment completes.
