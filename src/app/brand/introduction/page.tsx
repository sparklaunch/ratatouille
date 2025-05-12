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
                <Accordion sx={{
                    boxShadow: "none",
                    borderTop: "1px solid black"
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            height: 80
                        }}
                    >
                        <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 3</span> (2020~현재) 청년 정책 사각 지대 해소와 사회적 경제 커먼즈 구축</h3>
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