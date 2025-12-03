import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col">
      {/* Tab Başlıkları */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === tab.id
                ? 'border-primary-900 text-primary-900 bg-primary-50'
                : 'border-transparent text-neutral-500 hover:text-primary-700 hover:bg-neutral-50'
            }`}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab İçeriği */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            tab.id === activeTab ? (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-neutral-600 leading-relaxed space-y-4"
              >
                {tab.content}
              </motion.div>
            ) : null
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};