# 🏥 Patient Registration App

A modern, frontend-only Patient Registration system built with **Next.js (Pages Router)**, **TypeScript**, **ShadCN UI**, and **Pglite**. It allows you to register, view, and search patients — with real-time **cross-tab synchronization** of search input using the **BroadcastChannel API**.

---

## 🚀 Features

- ✅ Register new patients with form validation
- ✅ View all patients in a searchable table
- ✅ Real-time cross-tab search synchronization
- ✅ Fully local persistence using `pglite` (SQLite in the browser)
- ✅ Accessible UI powered by ShadCN (Radix + TailwindCSS)
- ✅ Built with a **modular structure** separating components, types, utilities, and logic.

---

## 🧠 Tech Stack

| Tool                   | Purpose                          |
| ---------------------- | -------------------------------- |
| Next.js (Pages Router) | Routing and rendering            |
| TypeScript             | Static typing                    |
| ShadCN UI              | Beautiful, accessible components |
| Tailwind CSS           | Utility-first styling            |
| Pglite                 | SQLite embedded in browser       |
| BroadcastChannel       | Sync search state across tabs    |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/patient-registration-app.git
cd patient-registration-app
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Run the Development Server

```bash
pnpm dev
# or
npm run dev
```

Now open your browser and go to:

```
http://localhost:3000
```

---

## 🧪 Usage Instructions

1. **Register a Patient**

   - Fill out the registration form on the homepage.
   - Click "Submit" to save data locally using `pglite`.

2. **View Patients**

   - All patients are listed in a table with fields like name, age, gender, contact, blood group, etc.
   - All patients are automatically synced across all open tabs using **BroadcastChannel**.

3. **Search Patients**

   - Use the search input to filter patients by name, email, or contact number.
   - The search term automatically syncs across all open tabs using **BroadcastChannel**.

---

## 📁 Project Structure

```
.
├── components/
│   └── ui/                                # Shared ShadCN components
│       ├── alert.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── sonner.tsx
│       ├── table.tsx
│       └── textarea.tsx
├── features/
│   └── patientManagement/
│       ├── constant.ts                    # Constants related to patients
│       ├── Patient.schema.ts              # Zod schema for patient validation
│       ├── PatientTable.tsx               # Table UI to show patient list
│       ├── RegisterPatient.tsx            # Form to register a patient
│       ├── types.ts                       # Patient types
│       └── utils.ts                       # Patient-specific utilities
├── lib/
│   ├── db.ts                              # pglite DB setup
│   └── utils.ts                           # General utilities
├── pages/
│   ├── _app.tsx                           # Custom App wrapper
│   ├── _document.tsx                      # Custom Document for styling
│   └── index.tsx                          # Main page - Register & view patients
```

---

## 🤔 Highlights

🔄 **BroadcastChannel**

- Ensures seamless tab-to-tab communication:

  - Typing a search term in one tab updates the filter in others.
  - Registering a patient reflects the changes in all open tabs instantly.

🌟 **ShadCN UI**

- **Radix UI** for accessible, composable components.
- **Tailwind CSS** for utility-first, responsive styling.

📚 **TypeScript**

- Static typing for scalable, maintainable code.

🚀 **Next.js (Pages Router)**

- Traditional file-based routing system with React-based flexibility.
- Simplified app structure for frontend-only apps.

📦 **Pglite**

- SQLite database runs entirely in the browser.
- Fully local persistence, no backend required.

🎉 **Modularity**

- Components, utilities, types, and features are well organized and isolated.
- Makes future feature addition or refactoring a breeze.
