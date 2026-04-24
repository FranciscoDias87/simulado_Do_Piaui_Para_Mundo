import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, CATEGORIES } from '../types';
import { Check, X, ShieldCheck } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  index: number;
  total: number;
  onNext: (isCorrect: boolean) => void;
}

export default function QuizCard({ question, index, total, onNext }: QuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [question.id]);

  const handleSubmit = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedOption(optionIndex);
  };

  const handleConfirm = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
  };

  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="mb-6 md:mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-blue-600 text-white text-[9px] md:text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase">
            QUESTÃO {(index + 1).toString().padStart(2, '0')}
          </span>
          <span className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest truncate">
            {CATEGORIES[question.category].title}
          </span>
          <span className={`ml-auto text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
            question.difficulty === 'fácil' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
          }`}>
            {question.difficulty}
          </span>
        </div>
        <h2 className="text-lg md:text-2xl font-semibold leading-snug text-slate-800 italic">
          {question.text}
        </h2>
      </div>

      <div className="space-y-2 md:space-y-3">
        {question.options.map((option, idx) => {
          let btnClass = "option-button";
          const label = String.fromCharCode(65 + idx); // A, B, C, D
          
          if (selectedOption === idx) {
            btnClass = "option-button-active ring-2 ring-blue-500/20";
          }

          if (isSubmitted) {
            if (idx === question.correctAnswer) {
              btnClass = "w-full flex items-center p-4 border-2 border-emerald-500 bg-emerald-50 rounded-lg text-emerald-800 shadow-sm";
            } else if (idx === selectedOption) {
              btnClass = "w-full flex items-center p-4 border-2 border-rose-500 bg-rose-50 rounded-lg text-rose-800 shadow-sm";
            } else {
              btnClass = "w-full flex items-center p-4 border border-slate-100 rounded-lg opacity-40 text-left grayscale";
            }
          }

          return (
            <button
              key={idx}
              disabled={isSubmitted}
              onClick={() => handleSubmit(idx)}
              className={btnClass}
            >
              <span className={`w-8 h-8 flex-shrink-0 rounded text-xs font-bold flex items-center justify-center mr-4 transition-colors ${
                selectedOption === idx ? 'bg-blue-600 text-white' : 
                isSubmitted && idx === question.correctAnswer ? 'bg-emerald-500 text-white' :
                isSubmitted && idx === selectedOption ? 'bg-rose-500 text-white' :
                'bg-slate-100 border border-slate-200 text-slate-600'
              }`}>
                {label}
              </span>
              <span className="text-sm font-medium">{option}</span>
              {isSubmitted && idx === question.correctAnswer && <Check size={18} className="ml-auto text-emerald-600" />}
              {isSubmitted && idx === selectedOption && idx !== question.correctAnswer && <X size={18} className="ml-auto text-rose-600" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold text-sm">
              <ShieldCheck size={18} className="text-blue-600" />
              Explicação Técnica
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {question.explanation}
            </p>
            <button
              onClick={() => onNext(isCorrect)}
              className="w-full py-3 bg-slate-900 text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
            >
              Próxima Questão
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <button 
              onClick={() => onNext(false)}
              className="w-full sm:w-auto px-8 py-3 md:py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Pular Questão
            </button>
            <button 
              disabled={selectedOption === null}
              onClick={handleConfirm}
              className="w-full sm:flex-1 px-10 py-3 md:py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-200 transition-all cursor-pointer"
            >
              Confirmar Resposta
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
