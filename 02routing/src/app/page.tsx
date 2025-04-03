import About from "./about/page";
/* 
Next js has file based routing mechanism.
The way we organize our file and folder structure determines the route of our application

conventions: 
- All routes must be placed inside app folder
- every file that represents a route should be named as pagejs or page.tsx
- every folder corresponds to a path segment in the browser URL
*/
export default function Home() {
  return <About />;
}
