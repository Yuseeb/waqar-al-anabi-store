# WAQAR AL ANABI — Store launch checklist

## Implemented storefront features
- Responsive desktop and mobile navigation, theme toggle and Pakistan-only country selector
- Men's and women's collections and product detail views
- Product gallery/lightbox, size selection and product-specific measurement placeholders
- Favourites, product search, category/price filters and sorting
- Shopping bag with size-specific lines, quantity controls and browser-local persistence
- Checkout **request preparation** with required customer contact/address fields and copyable summary
- Customer information routes: size guide, FAQ, shipping, returns, contact, privacy and terms

## Not yet safe to activate for sales
- **Official product assets and data:** Replace Unsplash placeholder photos, provisional prices, and blank measurements with verified product images, prices, colour variants, fabric composition, stock and size charts.
- **Business contact:** Publish a verified official support email and WhatsApp number. The current placeholder number in script.js must not receive orders.
- **Shipping/returns/legal:** Business owner must approve actual shipping rates, delivery times, return/exchange window, privacy notice and terms before publishing binding promises.
- **Backend:** Static GitHub Pages has no authenticated admin panel, server-side inventory, durable order database, fulfilment workflow or transactional notifications. Choose a hosted e-commerce backend or secure custom API and database; add credentials as secrets, never in public JavaScript.
- **Payments:** Obtain merchant accounts and integrate supported Pakistani payment providers via a secure backend and verified webhooks. Do not handle card details in client-side code.
- **Order tracking:** Only expose tracking after a fulfilment system and carrier/order identifiers are available.
- **Customer accounts:** Not required for initial guest checkout; if added later, use a reputable authentication provider.
- **Security and operations:** Test checkout validation, product stock consistency, accessibility, mobile layouts, browser compatibility, backups, domain/SSL, analytics consent, and order/return support workflows.

## Important
The current checkout prepares a **copyable request only**. It does not transmit an order, reserve stock, take payment or confirm delivery. Do not advertise the store as fully operational until the above integrations and business details are verified.
