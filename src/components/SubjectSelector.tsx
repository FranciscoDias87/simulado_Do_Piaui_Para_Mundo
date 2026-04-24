import { motion } from 'motion/react';
import { CATEGORIES, Category } from '../types';
import { Monitor, Leaf, Code, Languages, ChevronRight } from 'lucide-react';

const icons = {
  Monitor,
  Leaf,
  Code,
  Languages,
};

interface SubjectSelectorProps {
  onSelect: (category: Category | 'ALL') => void;
  stats: Record<Category, { completed: number; total: number }>;
}

export default function SubjectSelector({ onSelect, stats }: SubjectSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {(Object.entries(CATEGORIES) as [Category, any][]).map(([key, value]) => {
        const Icon = icons[value.icon as keyof typeof icons];
        
        return (
          <motion.button
            key={key}
            whileHover={{ y: -2 }}
            onClick={() => onSelect(key)}
            className="flex items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className={`p-4 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mr-6`}>
              <Icon size={24} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-lg text-slate-800 leading-tight mb-1">{value.title}</h3>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Módulo Acadêmico</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">50+ Questões</span>
              </div>
            </div>

            <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </motion.button>
        );
      })}
    </div>
  );
}
