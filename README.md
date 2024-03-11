# This repository contains the program code for my AQA A Level Computer Science NEA project: ContaineriseIt

## Program Structure

containeriseit
1. ### app - *contains files for rendering the website using nextJs' app router framework*

   | -- /(auth) - *contains files for controlling and rendering the authentication process*  
   |  
   | -- /community - *contains files for rendering the community section of the website*  
   |  
   | -- /contact - *contains files for rendering the contact page and for data submission*  
   |  
   | -- /dashboard - *contains files for rendering the user's dashboard*  
   |  
   | -- /docs - *contains files for fetching documentation files and rendering them on the website*  
   |  
   | -- /error - *contains files for rendering the website's error page*  
   |  
   | -- /kasm - *contains a route for accessing Kasm's dev API*  
   |  
   | -- favicon.ico  
   |  
   | -- globals.css  
   |  
   | -- layout.tsx  
   |  
   | -- age.tsx  
   
3. components - *contains utility files for rendering indiviual components (to be called in app files)*

   | -- loginIcon.tsx  
   |  
   | -- loginIconDisabled.tsx  
   |  
   | -- signOutButton.tsx  
   |  
   | -- userIcon.tsx  

5. public - *contains files that are needed to be publicly available (e.g images, icons etc)*

6. utils/supabase - *contains utility files used for various interactions with the supabase backend (e.g data fetching)*

   | -- checkUserLoggedIn.ts  
   |  
   | -- client.ts  
   |  
   | -- fetchUser.ts  
   |  
   | -- middleware.ts  
   |  
   | -- pwdReset.ts  
   |  
   | -- server.ts  
