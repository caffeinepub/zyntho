# Zyntho

## Current State
Zyntho is a fully built educational app with 12 chapters, interview prep (5 roles, 17 questions each), HR Round module, progress tracking, and vibrant visual design. The app is currently open to anyone -- no authentication or access control is in place.

## Requested Changes (Diff)

### Add
- Login screen using Internet Identity (shown to unauthenticated users)
- User profile setup (ask for name on first login)
- Access request flow: after login, if not yet approved, user sees a "Request Access" screen and submits their request
- Pending approval screen: after requesting, user sees a holding screen explaining their request is under review
- Admin dashboard: only visible to admins; lists all users with approval status; admin can approve or reject each user
- Admin access to the full app is automatic (no approval needed)

### Modify
- App.tsx: wrap all app content behind authentication + approval gate; unauthenticated users see login, unapproved users see request/pending screen, approved users and admins see the full app
- Navbar: add login/logout button and display user's name when logged in; add "Admin" nav link for admins

### Remove
- Nothing removed from existing content

## Implementation Plan
1. Wire `useInternetIdentity` for login/logout in Navbar
2. Add profile setup modal (first-time login name prompt)
3. Add approval gate in App.tsx using `isCallerApproved` and `requestApproval`
4. Build RequestAccess screen (unapproved, not yet requested)
5. Build PendingApproval screen (request submitted, awaiting admin)
6. Build AdminDashboard page using `listApprovals` and `setApproval`
7. Add Admin nav link visible only to admins
