"use client";

import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useTranslations } from "next-intl";
import styles from "./style.module.scss";

export default function HistoryAccordion() {
    const t = useTranslations("history");
    return <div className={styles.historyContainer}>
        <h2 className={styles.historyHeader}>History</h2>
        <Accordion className={styles.accordion} disableGutters>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                className={styles.accordionSummary}
            >
                <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 3 </span>{t("season3-header")}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className={styles.accordionContent}>{t("season3-paragraph")}</p>
                <div className={styles.season3Container}>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season3-first-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season3-first-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season3-second-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season3-second-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season3-third-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season3-third-period-content-0")}</p>
                        <p>{t("season3-third-period-content-1")}</p>
                        <p>{t("season3-third-period-content-2")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season3-fourth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season3-fourth-period-content-0")}</p>
                        <p>{t("season3-fourth-period-content-1")}</p>
                        <p>{t("season3-fourth-period-content-2")}</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion} disableGutters>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                className={styles.accordionSummary}
            >
                <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 2 </span>{t("season2-header")}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className={styles.accordionContent}>{t("season2-paragraph")}</p>
                <div className={styles.season2Container}>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-first-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-first-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-second-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-second-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-third-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-third-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-fourth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-fourth-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-fifth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-fifth-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-sixth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-sixth-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-seventh-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-seventh-period-content-0")}</p>
                        <p>{t("season2-seventh-period-content-1")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-eighth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-eighth-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season2-ninth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season2-ninth-period-content")}</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion} disableGutters>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                className={styles.accordionSummary}
            >
                <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 1 </span>{t("season1-header")}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className={styles.accordionContent}>{t("season1-paragraph")}</p>
                <div className={styles.season1Container}>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-first-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-first-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-second-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-second-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-third-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-third-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-fourth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-fourth-period-content-0")}</p>
                        <p>{t("season1-fourth-period-content-1")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-fifth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-fifth-period-content-0")}</p>
                        <p>{t("season1-fifth-period-content-1")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-sixth-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-sixth-period-content")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-seventh-period")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-seventh-period-content-0")}</p>
                        <p>{t("season1-seventh-period-content-1")}</p>
                    </div>
                    <div className={styles.accordionHistoryHeader}>
                        <p>{t("season1-other")}</p>
                    </div>
                    <div className={styles.accordionHistoryContent}>
                        <p>{t("season1-other-content-0")}</p>
                        <p>{t("season1-other-content-1")}</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>;
}