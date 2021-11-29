# Habit Tracker PWA

Small habit tracker based on Habitify using NextJS (frontend) and StrapiJS (backend).

# Getting Started

1. Clone project
1. `yarn`
1. Open two terminal windows and run:
   1. `yarn start:frontend`
   1. `yarn start:backend`
1. Visit frontend at: `http://localhost:3000/`
1. Visit backend at: `http://localhost:1337/admin`

## Setup User

In order to make authenticated requests, we need to setup a user in backend.

1. Login to Strapi backend admin: `http://localhost:1337/admin`
1. Go to "Users" in sidebar.
1. Add new user.
1. Add any email, password, etc (make sure to remember!)
1. Check off "Confirmed" and place user in "Authenticated" role.
1. Save user.
1. Add user to `packages/frontend/.env`

> Make sure the Authenticated role has CRUD privileges for all the tables (Habit, Categories, etc).
