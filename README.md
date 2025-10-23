# 🧸 Toy Store

A modern, responsive web application for browsing, exploring, and managing toy products with secure user authentication.

## 🎯 Purpose

This project serves as a comprehensive toy marketplace built with React. Its primary goal is to provide users with a seamless experience to browse toy products, view detailed information, and manage their accounts through secure authentication.

## ✨ Key Features

- **Custom Authentication Flow**: Secure registration, login, and password reset functionalities.
- **Social Sign-In**: Easy login using Google Popup Authentication.
- **Protected Routes**: User-specific content (like the Profile page) is protected, requiring authentication for access.
- **Dynamic Profile Management**: Users can view and update their display name and profile photo URL.
- **Toy Browsing & Details**: Browse all available toys and view detailed information about specific toys.
- **Context API for Global State**: User and authentication state are managed globally using React Context, accessible via a custom useAuth hook.
- **Responsive UI**: Built with Tailwind CSS for a mobile-first, attractive design.
- **Enhanced UX**: Uses react-toastify for clear, non-intrusive success and error notifications.
- **Title Customization**: Uses a custom useTitle hook to dynamically set the page title based on the current route.

## 🌐 Live Demo

| Environment | URL |
|-------------|-----|
| Live Site   | https://toy-topia.pages.dev/ | https://toy-topia-store.web.app/

## 📦 Technologies & Packages Used

### Core Technologies

| Technology    | Purpose |
|---------------|---------|
| React         | The frontend JavaScript library for building the user interface. |
| Vite          | The build tool and development server. |
| Firebase      | Backend-as-a-Service, used specifically for Authentication. |
| Tailwind CSS  | Utility-first CSS framework for styling and responsiveness. |
| React Router  | For handling navigation and routing within the application. |

### Additional Packages

| Package       | Purpose |
|---------------|---------|
| react-toastify | For displaying toast notifications. |
| react-icons   | For including various icons in the UI. |

## 🚀 Installation & Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd toy-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```
   VITE_APIKEY=your-api-key
   VITE_AUTHDOMAIN=your-auth-domain
   VITE_PROJECTID=your-project-id
   VITE_STORAGEBUCKET=your-storage-bucket
   VITE_MESSAGINGSENDERID=your-messaging-sender-id
   VITE_APPID=your-app-id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📱 Features in Detail

### Authentication

- **Registration**: Users can create a new account with email and password.
- **Login**: Existing users can sign in with their credentials.
- **Password Reset**: Users can reset their password if forgotten.
- **Google Sign-In**: Quick authentication using Google accounts.

### Toy Management

- **All Toys**: Browse through all available toys in the marketplace.
- **Toy Details**: View detailed information about a specific toy.
- **Seller Spotlight**: Featured section for highlighted sellers.
- **Theme Sections**: Toys organized by themes or categories.

### User Profile

- **Profile Management**: Users can view and update their profile information.
- **Protected Content**: Certain pages and features are only accessible to authenticated users.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

- **[Arman]** - [GitHub Profile](https://github.com/armanislams)