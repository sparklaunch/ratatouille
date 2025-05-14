"use client";

import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import styles from "./style.module.scss";

export default function HistoryAccordion() {
    return <div className={styles.historyContainer}>
        <h2 className={styles.historyHeader}>History</h2>
        <Accordion className={styles.accordion} disableGutters>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                className={styles.accordionSummary}
            >
                <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 3</span> (2020~현재) 청년 정책 사각 지대 해소와 사회적 경제 커먼즈 구축</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className={styles.accordionContent}>씨즈는 팬데믹이 드러낸 &lsquo;재난의 양극화&rsquo;를 체감한 이후, 서울시 청년허브 운영을 통해 청년 정책의 사각 지대를 해소하고, 은둔·고립 청년을 지원해 왔습니다. 세대·국가·계층을 넘는 시민 협력으로 대안 경제의 해결 역량을 키워왔으며, 지금도 새로운 변화의 씨앗을 심고 있습니다. 앞으로는 청년·시니어 간 서로 돌봄 도시 실험, 사회적 경제 기반 그린 스마트 클러스터 조성, 586세대의 사회적 유산을 활용한 금융 확충 등을 통해, 또 다른 10년의 도전을 이어갑니다.</p>
                <div className={styles.season3Container}>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2022 ~ 현재</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>청년 문화 예술 창작자 및 은둔·고립 청년의 사회 치유형 공공 임대 주택 운영 제안 (LH, 나눔과미래 협력)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2021 ~ 2022</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>경기도 미취업 취약층 청년 &lsquo;버팀목 일자리 인턴쉽 지원&rsquo; (SK M & Service 및 모금회)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2020 ~ 2021</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>• 서울시 청년 정책 개발 및 청년 네트워크 지원을 위한 청년허브 위탁 운영 (서울시)</p>
                        <p>• 은둔·고립 청년 온라인 플랫폼 및 서로 돌봄 서클 지원, 1인 가구 청년 고독사 예방 협력망 구축 (사무 금융 우분투 재단 外)</p>
                        <p>• 지역 순환 경제 협업형 사회적 경제 클러스터 조성 시민 자산화 추진 (행안부)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2020</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>• 인도네시아 청년 혁신 기업가 창업 지원 (공동 모금회 지정 기부)</p>
                        <p>• 팬데믹 위기 상황의 저개발국 사회적 경제 발굴 지원 (KOICA 협력)</p>
                        <p>• 지역 순환 경제 거점 모델 조성을 위한 기초 연구 (서울연구원)</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion} disableGutters>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                className={styles.accordionSummary}
            >
                <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 2</span> (2013~2019) 사회적 경제의 성장 및 정책 확산</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className={styles.accordionContent}>씨즈는 사회적 경제에 다양한 세대가 참여할 수 있도록 기반을 마련하고, 여러 지역에서 정책 개발과 협업 거점 조성, 미션 분야별 성장 지원을 확대해 왔습니다. 또한, 사회적 경제가 직면한 &lsquo;고비용 구조&rsquo;와 &lsquo;재화 다양성 부족&rsquo; 문제를 해결하기 위해, 2017년에는 국내 제조업 기술 장인들의 집적지인 세운상가에 거점 공간을 조성하며 사업을 본격화했습니다.</p>
                <div className={styles.season2Container}>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2019 ~ 2020</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>청년의 농산어촌 활동 및 지역 연계형 창업 지원 &lsquo;넥스트 로컬&rsquo; (서울시)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2019</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>신중년 X 사회적 기업 상생 프로젝트 (상상우리)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2016 ~ 2017</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>지역 소멸 지역 활동 청년 발굴 지원 &lsquo;N&apos;gels X 소셜 벤처&rsquo; (네이버)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2016 ~ 2020</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>창의 허브 세운 SE:CLOUD 조성 및 운영 (서울시 및 현대자동차)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2015 ~ 2019</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>세월호 공동체 치유 공간 &lsquo;꼬두물정거장&rsquo; 운영 및 &lsquo;소금버스협동조합&rsquo; 육성 (개인 후원자)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2015 ~ 2016</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>광주광역시 서민 생활 지원 창업 지원 (광주창조경제혁신센터)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2014 ~ 2016</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>• 소셜 벤처 아이디어 대회 서울 대회 (고용노동부)</p>
                        <p>• 청소년 창의 리더십 스쿨 (현대자동차 및 DDP)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2012 ~ 2016</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>은평구 사회적 경제 허브 센터 설치 및 운영 (서울시 및 은평구)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2012 ~ 2013</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>광진구 청년 창업 보육 센터 (광진구)</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion} disableGutters>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                className={styles.accordionSummary}
            >
                <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 1</span> (2010~2012) 청년 주도의 사회 문제 해결 및 주체 성장 지원</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className={styles.accordionContent}>씨즈는 2010년부터 부모 세대보다 가난한 첫 세대인 베이비 붐 세대의 자녀, 즉 20·30 청년 세대의 문제에 주목해 왔습니다. 문제의 원인을 진단하기 위한 연구, 토론, 정책 개발은 물론, 청년 주도의 새로운 사회 혁신 과정을 지속적으로 지원해 왔습니다.</p>
                <div className={styles.season1Container}>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2012</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>Seoul Sustainability Jam 주관</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2012 ~ 2020</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>H-온드림 오디션 (현대자동차)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2011 ~ 2016</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>국내 최초 청년 사회적 기업가 공유 오피스 &lsquo;서초 창의허브&rsquo; 운영 (현대자동차, 서초구청)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2011 ~ 2022</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>• 청년 사회적 기업가 육성 사업 정책 개발 및 전국 확산 (고용노동부 外)</p>
                        <p>• NHN Fellow 사회적 금융 지원 (NHN 창업가)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2011 ~ 2019</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>• SEEKER:S 청년 해외 탐방 지원 (교보생명 外)</p>
                        <p>• BORA 활동 지속</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2010 ~ 2022</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>사회적 경제 정책 개발 지원 생태계 조성 (충청남도, 서울시, 강원특별자치도, 청와대 등)</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>2010 ~ 2011</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>• &lsquo;청년 체인지메이커의 이야기&rsquo; (삼선배움과나눔재단 후원)</p>
                        <p>• 청년 윤리적 소비 캠페인단 &lsquo;BORA&rsquo; 조직화 시작</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>기타</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>• 세상콘테스트, SK 사회적 기업 스쿨 멘토링</p>
                        <p>• &lsquo;우리 마을이 학교가 되다&rsquo; (포스코) 등 다수</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>;
}