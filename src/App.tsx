import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <header className="">
        <h1 className="">Tailwind CSS 연합세션 🚀</h1>
        <p className="">
          아래 카드들의 스타일을 채워가며 Tailwind를 마스터해봅시다!
        </p>
      </header>

      <main className="">
        {/* 1. 기본 버튼 & 컴포넌트 설계 */}
        <section className="">
          <h2 className="">실습 1: 버튼 & 호버 이펙트</h2>
          <p className="">
            마우스를 올렸을 때(hover) 색상이 변하는 버튼을 만들어보세요.
          </p>
          <div className="">
            {/* TODO: 버튼 스타일링 */}
            <button className="">일반 버튼</button>
            <button className="">포인트 버튼</button>
          </div>
        </section>

        {/* 2. 모달 & 카드 UI */}
        <section className="">
          <h2 className="">실습 2: 카드 UI & 모달 팝업</h2>
          <p className="">
            그림자(shadow), 테두리(border)를 주고 모달 띄우기 버튼을
            완성해보세요.
          </p>

          <div className="">
            {/* TODO: 모달 열기 버튼 스타일링 */}
            <button onClick={() => setIsModalOpen(true)} className="">
              모달 열기
            </button>
          </div>

          {isModalOpen && (
            // TODO: 모달 배경(딤드 처리) 및 중앙 정렬 스타일링
            <div className="">
              {/* TODO: 모달 컨텐츠 박스 스타일링 */}
              <div className="">
                <h3 className="">짜잔! 모달창입니다</h3>
                <p className="">
                  여기에 카드 스타일과 fade-in 애니메이션을 적용해보세요.
                </p>
                <button onClick={() => setIsModalOpen(false)} className="">
                  닫기
                </button>
              </div>
            </div>
          )}
        </section>

        {/* 3. Tailwind 기본 애니메이션 기능 */}
        <section className="">
          <h2 className="">실습 3: 기본 애니메이션 맛보기</h2>
          <p className="">
            Tailwind가 제공하는 유틸리티 클래스로 생동감을 불어넣어 보세요.
          </p>

          <div className="">
            {/* TODO: animate-spin 적용 */}
            <div className="">
              <div className="">⏳</div>
              <p>animate-spin</p>
            </div>

            {/* TODO: animate-pulse 적용 */}
            <div className="">
              <div className="">❤️</div>
              <p>animate-pulse</p>
            </div>

            {/* TODO: animate-bounce 적용 */}
            <div className="">
              <div className="">🦘</div>
              <p>animate-bounce</p>
            </div>

            {/* TODO: animate-ping 적용 */}
            <div className="">
              <div className="">🔔</div>
              <p>animate-ping</p>
            </div>
          </div>
        </section>

        {/* 4. 반응형 디자인 (가장 아래 배치해서 화면 늘려보며 확인) */}
        <section className="">
          <h2 className="">실습 4: 반응형(Responsive) 레이아웃</h2>
          <p className="">
            화면 크기(sm, md, lg)에 따라 배경색과 내부 배치(Flex/Grid)가
            바뀌도록 해보세요.
          </p>
          {/* TODO: 반응형 클래스 실습 공간 */}
          <div className="">
            <div className="">모바일에서는 한 줄, 데스크톱에서는 나란히!</div>
            <div className="">모바일에서는 한 줄, 데스크톱에서는 나란히!</div>
          </div>
        </section>
      </main>
    </div>
  );
}
