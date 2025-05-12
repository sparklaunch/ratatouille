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
                        This is content.
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
                        This is content.
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