import dynamic from 'next/dynamic';

// lazy load required <=> Home uses browser's api in useState
const DynamicHome = dynamic(() => import('./components/home'), {
  ssr: false,
});

export default function App() {
 return (
  <DynamicHome />
 ) 
}