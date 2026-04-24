import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BarChart3, Clock, Trophy, Home, RotateCcw, Menu, X } from 'lucide-react';
import { QUESTIONS, Category, CATEGORIES } from './types';
import SubjectSelector from './components/SubjectSelector';
import QuizCard from './components/QuizCard';

export default function App() {
  const [view, setView] = useState<'HOME' | 'QUIZ' | 'RESULT'>('HOME');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answersStatus, setAnswersStatus] = useState<Record<number, 'correct' | 'wrong' | 'unanswered'>>({});
  const [completedCategories, setCompletedCategories] = useState<Record<Category, number>>(
    { EAD: 0, SUSTENTABILIDADE: 0, LOGICA: 0, INGLES: 0 }
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0);

  const filteredQuestions = useMemo(() => {
    let result = [...QUESTIONS];
    if (selectedCategory && selectedCategory !== 'ALL') {
      result = result.filter(q => q.category === selectedCategory);
    }
    return result.sort(() => Math.random() - 0.5);
  }, [selectedCategory, shuffleKey]);

  const totalCompleted = (Object.values(completedCategories) as number[]).reduce((a, b) => a + b, 0);
  const totalQuestions = QUESTIONS.length;
  const globalProgress = (totalCompleted / totalQuestions) * 100;

  const handleJumpToQuestion = (index: number) => {
    if (view === 'QUIZ') {
      setCurrentQuestionIndex(index);
    }
  };

  const handleStartQuiz = (category: Category | 'ALL') => {
    setShuffleKey(prev => prev + 1);
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswersStatus({});
    setView('QUIZ');
    setIsSidebarOpen(false);
  };

  const handleNextQuestion = (isCorrect: boolean) => {
    setAnswersStatus(prev => ({
      ...prev,
      [currentQuestionIndex]: isCorrect ? 'correct' : 'wrong'
    }));
    
    if (isCorrect) setScore(s => s + 1);

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
    } else {
      if (selectedCategory && selectedCategory !== 'ALL') {
        setCompletedCategories(prev => ({
          ...prev,
          [selectedCategory]: Math.max(prev[selectedCategory], score + (isCorrect ? 1 : 0))
        }));
      }
      setView('RESULT');
    }
  };

  const resetQuiz = () => {
    setView('HOME');
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswersStatus({});
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden font-sans text-slate-900 md:border-8 md:border-slate-200">
      {/* Mobile Header */}
      <header className="md:hidden h-14 bg-slate-900 flex items-center justify-between px-4 shrink-0 transition-all z-50">
        <button onClick={resetQuiz} className="flex items-center gap-2 text-white">
          <GraduationCap size={20} className="text-blue-400" />
          <span className="font-bold text-sm tracking-tight">EDU REVIEW</span>
        </button>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-300 hover:text-white"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Navigation Sidebar */}
      <aside className={`
        fixed inset-0 z-40 md:relative md:flex md:w-64 bg-slate-900 flex flex-col h-full shrink-0 transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 hidden md:block">
          <button onClick={resetQuiz} className="text-left group w-full cursor-pointer">
            <h1 className="text-white font-bold text-xl tracking-tight uppercase border-b border-slate-700 pb-4 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
              <GraduationCap className="shrink-0" />
              Trilha de TI
            </h1>
            <p className="text-slate-400 text-[10px] mt-2 uppercase tracking-widest">Sistema de Revisão</p>
          </button>
        </div>
        
        <nav className="flex-1 mt-16 md:mt-4 px-2 md:px-0">
          <div className="md:hidden px-4 mb-4 text-slate-500 text-[10px] uppercase font-bold tracking-widest">Módulos de Estudo</div>
          {(Object.entries(CATEGORIES) as [Category, any][]).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleStartQuiz(key)}
              className={selectedCategory === key ? "sidebar-link-active w-full rounded-md md:rounded-none mb-1 md:mb-0" : "sidebar-link w-full rounded-md md:rounded-none mb-1 md:mb-0"}
            >
              <div className={`w-2 h-2 rounded-full ${selectedCategory === key ? 'bg-blue-200' : 'bg-slate-600'}`} />
              {value.title.split(' e ')[0]}
            </button>
          ))}
          <button
            onClick={() => handleStartQuiz('ALL')}
            className={selectedCategory === 'ALL' ? "sidebar-link-active w-full mt-4 rounded-md md:rounded-none" : "sidebar-link w-full mt-4 rounded-md md:rounded-none"}
          >
            <div className={`w-2 h-2 rounded-full ${selectedCategory === 'ALL' ? 'bg-blue-200' : 'bg-slate-600'}`} />
            Simulado Completo
          </button>
        </nav>

        <div className="p-6 mt-auto border-t border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-xs uppercase tracking-tighter">Resumo Geral</span>
            <span className="text-blue-400 text-xs font-mono">{Math.round(globalProgress)}%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${globalProgress}%` }}
              className="bg-blue-500 h-full"
            />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative bg-white overflow-hidden shadow-inner">
        {/* Top Header Bar (Desktop Only or Info Bar) */}
        <header className="h-16 border-b border-slate-200 flex items-center justify-between px-4 md:px-8 bg-white shrink-0">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest hidden sm:block">Contexto Atual</span>
              <span className="text-xs md:text-sm font-semibold text-slate-700 truncate max-w-[150px] sm:max-w-none">
                {view === 'HOME' ? 'Dashboard' : 
                 view === 'RESULT' ? 'Resultado' :
                 selectedCategory === 'ALL' ? 'Simulado Global' : CATEGORIES[selectedCategory as Category]?.title}
              </span>
            </div>
            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest hidden sm:block">Status</span>
              <div className="flex items-center gap-2">
                {view === 'QUIZ' && (
                  <span className="text-xs text-slate-500 font-mono font-bold">
                    {currentQuestionIndex + 1}/{filteredQuestions.length}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="text-right flex items-center gap-3">
              <BarChart3 className="text-slate-300 hidden md:block" size={18} />
              <div className="text-left hidden sm:block">
                <span className="text-[10px] text-slate-400 uppercase font-bold block leading-none mb-1">XP Total</span>
                <span className="text-sm font-mono font-bold text-blue-600">{totalCompleted} Pts</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
          <AnimatePresence mode="wait">
            {view === 'HOME' && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 p-4 md:p-10 overflow-y-auto"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight mb-2 italic">Dashboard de Aprendizado</h2>
                      <p className="text-slate-500 text-sm">Selecione uma área de conhecimento para iniciar a revisão guiada.</p>
                    </div>
                    <button 
                      onClick={() => handleStartQuiz('ALL')}
                      className="px-6 py-3 md:py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-slate-200 md:shadow-none"
                    >
                      <RotateCcw size={14} />
                      Gerar Simulado
                    </button>
                  </div>
                  <SubjectSelector onSelect={handleStartQuiz} stats={CATEGORIES as any} />
                </div>
              </motion.div>
            )}

            {view === 'QUIZ' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex overflow-hidden flex-col md:flex-row"
              >
                <section className="flex-1 p-4 md:p-8 overflow-y-auto order-1 md:order-1">
                   <QuizCard
                    question={filteredQuestions[currentQuestionIndex]}
                    index={currentQuestionIndex}
                    total={filteredQuestions.length}
                    onNext={handleNextQuestion}
                  />
                </section>

                {/* Right Rail: Questions Grid */}
                <aside className="w-full md:w-72 border-t md:border-t-0 md:border-l border-slate-200 p-4 md:p-6 bg-slate-50/50 overflow-y-auto shrink-0 order-2 md:order-2 max-h-[300px] md:max-h-none">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Progresso do Simulado</h3>
                  <div className="grid grid-cols-8 md:grid-cols-5 gap-2">
                    {filteredQuestions.map((_, idx) => {
                      const status = answersStatus[idx];
                      let colorClass = "border border-slate-200 text-slate-400 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
                      if (idx === currentQuestionIndex) colorClass = "bg-blue-600 text-white ring-4 ring-blue-100 shadow-inner cursor-default";
                      else if (status === 'correct') colorClass = "bg-emerald-500 text-white cursor-pointer";
                      else if (status === 'wrong') colorClass = "bg-rose-400 text-white cursor-pointer";
                      
                      return (
                        <button 
                          key={idx} 
                          onClick={() => handleJumpToQuestion(idx)}
                          className={`w-full aspect-square md:w-10 md:h-10 text-[10px] font-mono flex items-center justify-center rounded transition-all ${colorClass}`}
                        >
                          {(idx + 1).toString().padStart(2, '0')}
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-6 space-y-2 border-t border-slate-200 pt-4 hidden md:block">
                    <div className="flex items-center gap-2 text-[10px] font-medium text-slate-600 uppercase">
                      <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div> Correto
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-medium text-slate-600 uppercase">
                      <div className="w-3 h-3 bg-rose-400 rounded-sm"></div> Errado
                    </div>
                  </div>
                </aside>
              </motion.div>
            )}

            {view === 'RESULT' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 p-6 md:p-12 overflow-y-auto"
              >
                <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="text-blue-600" size={32} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Simulado Concluído</h2>
                  <p className="text-slate-500 text-sm mb-8">Informações de desempenho sincronizadas.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Aproveitamento</span>
                      <span className="text-2xl font-black text-blue-600">{filteredQuestions.length > 0 ? Math.round((score/filteredQuestions.length)*100) : 0}%</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Acertos</span>
                      <span className="text-2xl font-black text-slate-800">{score} / {filteredQuestions.length}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={resetQuiz} className="flex-1 py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer">
                       <Home size={16} /> Início
                    </button>
                    <button onClick={() => handleStartQuiz(selectedCategory as any)} className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      <RotateCcw size={16} /> Repetir
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Action Ribbon */}
        <footer className="h-12 md:h-12 bg-slate-100 border-t border-slate-200 px-4 md:px-8 flex items-center justify-between shrink-0">
          <div className="flex gap-4">
            <span className="text-[10px] text-slate-500 uppercase font-medium tracking-tight hidden md:block">Sistema Acadêmico de TI</span>
            {view === 'QUIZ' && (
               <div className="flex items-center gap-2 text-slate-400">
                 <Clock size={12} />
                 <span className="text-[10px] font-mono">Sessão Ativa</span>
               </div>
            )}
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[10px] text-slate-400 font-mono">v1.2.5</span>
          </div>
        </footer>
      </main>
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

