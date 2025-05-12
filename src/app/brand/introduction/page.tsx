import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";

export default function IntroductionPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>브랜드 스토리</h1>
            <div className={styles.subheader}>
                <Link href="/brand/introduction" className={styles.activeSubheader}>
                    <span>씨즈 소개</span>
                </Link>
                <Link href="/brand/history">
                    <span>연혁</span>
                </Link>
            </div>
            <div className={styles.historyContainer}>
                <h2 className={styles.historyHeader}>History</h2>
                <Accordion className={styles.accordion} disableGutters>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        className={styles.accordionSummary}
                    >
                        <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 3</span> (2020~현재) 청년 정책 사각 지대 해소와 사회적 경제 커먼즈 구축</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className={styles.accordionContent}>씨즈는 팬데믹이 드러낸 '재난의 양극화'를 체감한 이후, 서울시 청년허브 운영을 통해 청년 정책의 사각 지대를 해소하고, 은둔·고립 청년을 지원해 왔습니다. 세대·국가·계층을 넘는 시민 협력으로 대안 경제의 해결 역량을 키워왔으며, 지금도 새로운 변화의 씨앗을 심고 있습니다. 앞으로는 청년·시니어 간 서로 돌봄 도시 실험, 사회적 경제 기반 그린 스마트 클러스터 조성, 586세대의 사회적 유산을 활용한 금융 확충 등을 통해, 또 다른 10년의 도전을 이어갑니다.</p>
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
                                <p>경기도 미취업 취약층 청년 '버팀목 일자리 인턴쉽 지원' (SK M & Service 및 모금회)</p>
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
                        <div className={styles.season2Container}>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2019 ~ 2020</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>청년의 농산어촌 활동 및 지역 연계형 창업 지원 '넥스트 로컬' (서울시)</p>
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
                                <p>지역 소멸 지역 활동 청년 발굴 지원 'N'gels X 소셜 벤처' (네이버)</p>
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
                                <p>세월호 공동체 치유 공간 '꼬두물정거장' 운영 및 '소금버스협동조합' 육성 (개인 후원자)</p>
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
                        This is content.
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <Footer />
    </>;
}