// import { Menu, Mail, Github } from 'lucide-react';

const exampleImage = 'figma:asset/99bae0620290c6e7f672ce4f709803e81441a47d.png';
// const navItems = ['Home', 'Resume', 'Components', 'About'];

// interface MobileHeaderProps {
//   activeNav: string;
//   setActiveNav: (nav: string) => void;
// }

// export function MobileHeader({ activeNav, setActiveNav }: MobileHeaderProps) {
export function MobileHeader() {

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hiddenbg-linear-to-br from-purple-500/20 to-pink-500/20 p-0.5">
            <img 
              src={exampleImage} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-white text-sm">Omoera Sean</h3>
            <p className="text-xs text-zinc-400">FullStack Developer</p>
          </div>
        </div>
        
     
      </div>
    </header>
  );
}
