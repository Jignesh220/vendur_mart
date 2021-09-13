module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "vendur_mart",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/3.png",
        title: "Vendur Mart",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBYEVNJlK0nUK8eVIasH2sdRgMTi-13OQ4",
          authDomain: "vendur-mart.firebaseapp.com",
          databaseURL: "https://vendur-mart-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "vendur-mart",
          storageBucket: "vendur-mart.appspot.com",
          messagingSenderId: "219037957646",
          appId: "1:219037957646:web:2f005f4d4d77b19340465f",
          measurementId: "G-WM42LW1TL3"
        }
      }
    }
  ],
  
};
