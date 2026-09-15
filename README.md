# Therapeace — updated frontend

This version replaces the original single landing-page flow with a multi-route product-style frontend.

Implemented:
- Dashboard/home is the first page.
- Public therapist directory, therapist profiles, stories, Our Story, Team, About and Contact.
- Login/signup are only entered from the booking flow.
- Booking flow: therapist profile → available slot → login to continue.
- Smaller founding-team cards.
- Favicon.
- Public Stories route.
- Real navigation/routes instead of `#` placeholders.
- Maintenance notices for profile, settings and booking-management functionality that is not launched yet.
- Removed the fabricated impact/traction numbers.
- Added the five-founder origin story and agreed roles.
- Added Supabase URL to `.env.local.example`; authentication/database are intentionally not wired until the Supabase project is accessible.

Run:
1. Copy `.env.local.example` to `.env.local`.
2. `npm install`
3. `npm run dev`
