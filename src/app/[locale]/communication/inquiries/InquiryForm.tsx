"use client";

import InquiryType from "@/enums/InquiryType";
import formatPhoneNumber from "@/utilities/formatPhoneNumber";
import {
    Checkbox, FormControl, FormControlLabel, InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import { DatePicker, DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/fr";
import "dayjs/locale/ja";
import "dayjs/locale/ko";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.scss";

const textFieldSharedSlotProps = {
    inputLabel: {
        shrink: true
    }
};

const menuItemSharedStyles = {
    fontSize: "17px"
};

export default function InquiryForm() {
    const locale = useLocale();
    const t = useTranslations("inquiry");
    const [type, setType] = useState(InquiryType.Inquiry);
    const [name, setName] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [other, setOther] = useState("");
    const [applicationDate, setApplicationDate] = useState<Dayjs | null>(dayjs());
    const [visitDateTime, setVisitDateTime] = useState<Dayjs | null>(dayjs());
    const [headCount, setHeadCount] = useState(0);
    const [purposeOfFieldTrip, setPurposeOfFieldTrip] = useState(false);
    const [purposeOfListening, setPurposeOfListening] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);
    const clearFields = () => {
        setName("");
        setAffiliation("");
        setContact("");
        setEmail("");
        setOther("");
        setApplicationDate(dayjs());
        setVisitDateTime(dayjs());
        setHeadCount(0);
        setPurposeOfFieldTrip(false);
        setPurposeOfListening(false);
        setTermsAgreed(false);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name.trim()) {
            alert(t("name-alert"));
            return;
        }
        if (!contact) {
            alert(t("contact-alert"));
            return;
        }
        if (contact.length < 11) {
            alert(t("invalid-contact-alert"));
            return;
        }
        if (!email) {
            alert(t("email-alert"));
            return;
        }
        if (!/^[a-z0-9._%+-]{1,}@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/.test(email)) {
            alert(t("invalid-email-alert"));
            return;
        }
        if (!termsAgreed) {
            alert(t("terms-alert"));
            return;
        }
        if (type === InquiryType.Visit && headCount === 0) {
            alert(t("head-count-alert"));
            return;
        }
        switch (type) {
            case InquiryType.Inquiry: {
                const payload = {
                    name,
                    affiliation,
                    contact,
                    email,
                    other,
                    termsAgreed
                };
                const response = await fetch("/api/inquiry", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    const { hasSucceeded, message } = await response.json();
                    if (hasSucceeded) {
                        clearFields();
                        alert(t("inquiry-accepted-alert"));
                    } else {
                        alert(message);
                    }
                } else {
                    alert(t("error-alert"));
                }
                break;
            }
            case InquiryType.Visit: {
                const payload = {
                    name,
                    affiliation,
                    contact,
                    email,
                    applicationDate,
                    visitDateTime,
                    headCount,
                    purposeOfFieldTrip,
                    purposeOfListening,
                    other,
                    termsAgreed
                };
                const response = await fetch("/api/visit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    const { hasSucceeded, message } = await response.json();
                    if (hasSucceeded) {
                        clearFields();
                        alert(t("visit-accepted-alert"));
                    } else {
                        alert(message);
                    }
                } else {
                    alert(t("error-alert"));
                }
                break;
            }
        }
    };
    return <div className={styles.inquiryContainer}>
        <Image src="/images/Inquiry.png" alt={t("inquiry-alternate")} fill className={styles.inquiryImage} />
        <form onSubmit={handleSubmit} className={styles.inquiryForm}>
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <InputLabel id="type">{t("type")}</InputLabel>
                <Select labelId="type" label={t("type")} value={type} MenuProps={{ disableScrollLock: true }} onChange={(event) => setType(event.target.value)} >
                    <MenuItem value={InquiryType.Inquiry} sx={menuItemSharedStyles}>{t("inquire")}</MenuItem>
                    <MenuItem value={InquiryType.Visit} sx={menuItemSharedStyles}>{t("visit")}</MenuItem>
                </Select>
            </FormControl>
            <div className={styles.inquiryGridContainer}>
                <FormControl fullWidth>
                    <TextField label={t("name")} variant="outlined" placeholder={t("name-placeholder")} value={name} onChange={(event) => {
                        const input = event.target.value;
                        const name = input.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-zA-ZÀ-ž|\-|'|\s]/g, "");
                        setName(name);
                    }} slotProps={textFieldSharedSlotProps} required title={t("name-placeholder")} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField label={t("affiliation")} variant="outlined" placeholder={t("affiliation-placeholder")} value={affiliation} onChange={(event) => setAffiliation(event.target.value)} slotProps={textFieldSharedSlotProps} />
                </FormControl>
            </div>
            <div className={styles.inquiryGridContainer}>
                <FormControl fullWidth>
                    <TextField label={t("contact")} variant="outlined" placeholder={t("contact-example")} type="tel" value={contact} onChange={(event) => {
                        const input = event.target.value;
                        const contact = formatPhoneNumber(input);
                        setContact(contact);
                    }} slotProps={textFieldSharedSlotProps} required title={t("contact-placeholder")} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField label={t("email")} variant="outlined" placeholder={t("email-example")} value={email} onChange={(event) => {
                        const input = event.target.value;
                        const email = input.replace(/\s/g, "");
                        setEmail(email);
                    }} slotProps={textFieldSharedSlotProps} required title={t("email-placeholder")} />
                </FormControl>
            </div>
            {type === InquiryType.Visit && <>
                <div className={styles.inquiryGridContainer}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                            <DatePicker label={t("application-date")} value={applicationDate} onChange={(date) => setApplicationDate(date)} sx={{
                                ".MuiPickersSectionList-sectionContent": {
                                    fontSize: "17px"
                                }
                            }} />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                            <DateTimePicker label={t("visit-datetime")} value={visitDateTime} onChange={(dateTime) => setVisitDateTime(dateTime)} slotProps={{
                                textField: {
                                    InputLabelProps: {
                                        shrink: true
                                    }
                                }
                            }} sx={{
                                ".MuiPickersSectionList-sectionContent": {
                                    fontSize: "17px"
                                }
                            }} />
                        </LocalizationProvider>
                    </FormControl>
                </div>
                <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <TextField label={t("head-count")} variant="outlined" placeholder={t("head-count-example")} value={headCount} onChange={(event) => {
                        const input = event.target.value;
                        if (!input) {
                            setHeadCount(0);
                        } else {
                            const headCount = parseInt(input.replace(/\D/g, ""));
                            setHeadCount(headCount);
                        }
                    }} slotProps={textFieldSharedSlotProps} required title={t("head-count-placeholder")} />
                </FormControl>
                <div className={styles.purposeOuterContainer}>
                    <p>{t("visit-purpose")}</p>
                    <div className={styles.purposeInnerContainer}>
                        <p>{t("check-if-necessary")}</p>
                        <FormControlLabel control={<Checkbox sx={{
                            color: "#FF301E",
                            "&.Mui-checked": {
                                color: "#FF301E"
                            }
                        }} checked={purposeOfFieldTrip} onChange={(event) => setPurposeOfFieldTrip(event.target.checked)} />} label={t("visit-checkbox")} slotProps={{
                            typography: {
                                fontSize: 17
                            }
                        }} />
                        <FormControlLabel control={<Checkbox sx={{
                            color: "#FF301E",
                            "&.Mui-checked": {
                                color: "#FF301E"
                            }
                        }} checked={purposeOfListening} onChange={(event) => setPurposeOfListening(event.target.checked)} />} label={t("listening-checkbox")} slotProps={{
                            typography: {
                                fontSize: 17
                            }
                        }} />
                    </div>
                </div>
            </>}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <TextField label={t("other")} variant="outlined" placeholder={t("other-placeholder")} multiline rows="5" value={other} onChange={(event) => setOther(event.target.value)} slotProps={textFieldSharedSlotProps} />
            </FormControl>
            {type === InquiryType.Visit && <div className={styles.informationContainer}>
                <p>{t("fee-information")}</p>
                <ul>
                    <li>{t("fee-title")}
                        <ul className={styles.informationList}>
                            <li>{t("fee-content-0")}</li>
                            <li>{t("fee-content-1")}</li>
                        </ul>
                    </li>
                    <li>{t("hours-title")}
                        <ul className={styles.informationList}>
                            <li>{t("hours-content")}</li>
                        </ul>
                    </li>
                </ul>
            </div>}
            <FormControlLabel control={<Checkbox sx={{
                color: "#FF301E",
                "&.Mui-checked": {
                    color: "#FF301E"
                }
            }} checked={termsAgreed} onChange={(event) => setTermsAgreed(event.target.checked)} />} label={t("terms-checkbox")} slotProps={{
                typography: {
                    fontSize: 15
                }
            }} />
            <button className={styles.submitButton} type="submit">{t("submit")}</button>
        </form>
    </div >;
}