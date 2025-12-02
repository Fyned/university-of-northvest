import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuConfig from '../../data/menuConfig.json';
import { ChevronDown } from 'lucide-react';

export const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderMenuItem = (item: any) => {
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren) {
      return (
        <Link 
          key={item.title} 
          to={item.path} 
          className="block px-4 py-2 text-sm font-medium text-primary-900 hover:text-secondary-600 whitespace-nowrap"
        >
          {item.title}
        </Link>
      );
    }

    return (
      <div 
        key={item.title} 
        className="relative group"
        onMouseEnter={() => setOpenDropdown(item.title)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button className="flex items-center px-4 py-2 text-sm font-medium text-primary-900 hover:text-secondary-600 focus:outline-none">
          {item.title}
          <ChevronDown className="ml-1 w-4 h-4" />
        </button>

        {/* Dropdown Menü */}
        <div className={`absolute left-0 top-full w-64 bg-white border border-neutral-200 shadow-lg py-2 z-50 ${openDropdown === item.title ? 'block' : 'hidden'}`}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {item.children.map((child: any) => (
            <div key={child.title}>
              {child.children ? (
                // 3. Seviye Menü (Örn: Courses -> Undergraduate)
                <div className="px-4 py-2">
                  <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    {child.title}
                  </span>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {child.children.map((subChild: any) => (
                    <Link
                      key={subChild.title}
                      to={subChild.path}
                      className="block pl-2 py-1 text-sm text-neutral-600 hover:text-primary-900"
                    >
                      {subChild.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={child.path}
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-900"
                >
                  {child.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav className="hidden xl:flex items-center">
      {menuConfig.map((item) => renderMenuItem(item))}
    </nav>
  );
};