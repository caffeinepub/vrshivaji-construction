# Specification

## Summary
**Goal:** Build a professional, responsive marketing website for “VRShivaji Construction” that showcases services/offerings and captures customer inquiries via a validated contact form stored in a Motoko backend.

**Planned changes:**
- Create multi-section site in English: Home (hero, highlights, CTAs), Services (>= 6 services with short descriptions), Why Choose Us, Projects/Portfolio (sample project cards), About, and Contact.
- Implement 1-click navigation access to Services and Contact from the main navigation.
- Apply a cohesive “professional construction” visual theme (not blue/purple) with consistent colors, typography, spacing, and component styling.
- Add Contact inquiry form (Name, Phone, Email, Message) with client-side validation, loading state, and success/error messaging.
- Backend Motoko actor: store inquiries (id, name, email, optional phone, message, createdAt) in stable storage and provide methods to create an inquiry and list inquiries (most recent first).
- Add and reference generated brand assets (logo + hero image) from `frontend/public/assets/generated`, using the logo in the header and the hero image on the Home section with responsive behavior.

**User-visible outcome:** Visitors can browse VRShivaji Construction’s services, differentiators, and sample projects on a responsive site, then submit an inquiry through the Contact form and see clear success/error feedback.
