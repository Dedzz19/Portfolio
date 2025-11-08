import { useState } from 'react';
import { ProfileSidebar } from './components/ProfileSidebar';
import { MobileHeader } from './components/MobileHeader';
import { Portfolio } from './pages/Profile';
import { Resume } from './pages/Resume';
import { About } from './pages/About';

const navItems = ['Home', 'Resume', 'About'];

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');

  const renderContent = () => {
    switch (activeNav) {
      case 'Home':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'About':
        return <About />;
      // case 'Components':
      //   return <Portfolio />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Mobile Header */}

      <MobileHeader activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 sticky top-0 h-screen">
          <ProfileSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-20 lg:pt-0">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-6 p-8 pb-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeNav === item
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Page Content */}
          <div className="px-4 sm:px-6 lg:px-8 pb-12">
            {renderContent()}
          </div>

          {/* Footer */}
          <footer className="px-4 sm:px-6 lg:px-8 pb-8">
            <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-zinc-400">
                © 2025 Omoera Sean. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/oserehme-omoera-9453b4259/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B929e8f8b-39eb-49ba-a59f-600a5e7af374" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
                {/* <a href="#" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                  Dribbble
                </a> */}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
