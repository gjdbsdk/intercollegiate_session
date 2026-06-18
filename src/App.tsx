import { useState } from "react";
import "./index.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 text-slate-800 antialiased">
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-3 tracking-tight">
          Tailwind CSS 연합세션 🚀
        </h1>
        <p className="text-slate-500 text-sm md:text-base">
          아래 카드들의 스타일을 채워가며 Tailwind를 마스터해봅시다!
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* 1. 기본 버튼 & 컴포넌트 설계 */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              실습 1: 버튼 & 호버 이펙트
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              마우스를 올렸을 때(hover) 색상이 변하는 버튼을 만들어보세요.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-2.5 bg-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-300 transition-colors">
              일반 버튼
            </button>
            <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all active:scale-95">
              포인트 버튼
            </button>
          </div>
        </section>

        {/* 2. 모달 & 카드 UI */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              실습 2: 카드 UI & 모달 팝업
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              그림자(shadow), 테두리(border)를 주고 모달 띄우기 버튼을
              완성해보세요.
            </p>
          </div>

          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-md"
            >
              모달 열기 👀
            </button>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
              <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-4 border border-slate-100 transform transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  짜잔! 모달창입니다
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  여기에 카드 스타일과 fade-in 애니메이션을 적용해보세요.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-2.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          )}
        </section>

        {/* 3. Tailwind 기본 애니메이션 기능 */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            실습 3: 기본 애니메이션 맛보기
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Tailwind가 제공하는 유틸리티 클래스로 생동감을 불어넣어 보세요.
          </p>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded-xl flex flex-col items-center justify-center">
              <div className="text-2xl mb-2 animate-spin">⏳</div>
              <p className="text-xs font-mono text-slate-600">animate-spin</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl flex flex-col items-center justify-center">
              <div className="text-2xl mb-2 animate-pulse text-red-500">❤️</div>
              <p className="text-xs font-mono text-slate-600">animate-pulse</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl flex flex-col items-center justify-center">
              <div className="text-2xl mb-2 animate-bounce">🦘</div>
              <p className="text-xs font-mono text-slate-600">animate-bounce</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl flex flex-col items-center justify-center">
              <div className="text-2xl mb-2 relative flex h-8 w-8 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
              </div>
              <p className="text-xs font-mono text-slate-600">animate-ping</p>
            </div>
          </div>
        </section>

        {/* 4. 반응형 디자인 */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            실습 4: 반응형(Responsive) 레이아웃
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            화면 크기(sm, md, lg)에 따라 배경색과 내부 배치가 바뀌도록 해보세요.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 p-4 bg-amber-100 md:bg-purple-100 text-amber-800 md:text-purple-800 text-center font-medium rounded-xl text-sm transition-all">
              모바일: 주황색 / 데스크톱: 보라색
            </div>
            <div className="flex-1 p-4 bg-blue-100 md:bg-rose-100 text-blue-800 md:text-rose-800 text-center font-medium rounded-xl text-sm transition-all">
              모바일에서는 세로, PC는 가로 정렬!
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
