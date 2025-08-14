**Overview: -**

Built a polished SpaceX Launch Explorer that consumes the SpaceX public API and implements a maps-first native experience: show each launchpad on a map and provide one-tap directions via the device’s native Maps app. 

SpaceX API used: -
https://api.spacexdata.com/v5/launches 
https://api.spacexdata.com/v4/launchpads/:id.

App Structure & Tech used:-  Expo SDK 53, React Native, TypeScript

Installation
- You need following packages to run this application : -
    @react-navigation/native
    @react-navigation/stack
    axios
    expo-linking
    expo-location
    expo-status-bar
    @expo/vector-icons
    react-native-gesture-handler
    react-native-maps
    react-native-safe-area-context
    
-  To run the application, use this command: -
    npx expo start 

App Screenshots:- 

**1. List Screen: -**
Infinite/paginated list (FlatList) of launches with mission name, date, image, and status
Search by mission name (client-side)
Pull-to-refresh

iOS: -
<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-12 at 23 29 01" src="https://github.com/user-attachments/assets/264764e1-32d1-45c1-a809-6da2d090e631" />
<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-12 at 23 31 41" src="https://github.com/user-attachments/assets/d002cf0b-aa73-4715-b502-d355734ab7b1" />


Android: -
<img width="1080" height="2400" alt="Screenshot_1755021662" src="https://github.com/user-attachments/assets/de01cd77-5fa7-4f8a-87b5-0a8941ff2440" />

**2.Details Screen**
Show launchpad info.
Map tab/section:
Show launchpad location on map
Request device location permission
Show user’s current location on the map
Quick action to open native Maps app with directions.
Open native Maps app (Google Maps/Apple Maps) for navigation
Handle permission denial with clear UX.

iOS: -
<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-12 at 23 29 10" src="https://github.com/user-attachments/assets/6e49c56e-fb5e-4e14-98f6-b058f8224dd2" />
<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-12 at 23 29 14" src="https://github.com/user-attachments/assets/880688e1-896d-4e9f-97ed-15441c060d9f" />
<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-08-12 at 23 29 27" src="https://github.com/user-attachments/assets/9e447a8a-72dd-40a3-9cf7-2fdc9c2007de" />

Android:-
<img width="1080" height="2400" alt="Screenshot_1755021806" src="https://github.com/user-attachments/assets/1d36f901-4963-460c-8791-4b3ee21a888d" />
<img width="1080" height="2400" alt="Screenshot_1755021810" src="https://github.com/user-attachments/assets/d5f47280-9f5a-4334-8713-55c755ee9808" />
<img width="1080" height="2400" alt="Screenshot_1755021820" src="https://github.com/user-attachments/assets/224bf36f-3d3f-418f-ae53-7f53d6a3d44c" />
