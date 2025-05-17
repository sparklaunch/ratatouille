"use client";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Form from "next/form";
import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.scss";

export default function InquiryForm() {
    const [type] = useState("inquiry");
    return <div className={styles.inquiryContainer}>
        <Image src="/images/Inquiry.png" alt="문의하기 이미지" fill className={styles.inquiryImage} />
        <Form action="/api/inquiry">
            <FormControl fullWidth>
                <InputLabel id="type" sx={{
                    fontFamily: "Nanum Gothic",
                    fontWeight: "bold",
                    fontSize: 17
                }}>선택</InputLabel>
                <Select labelId="type" label="선택" value={type} MenuProps={{ disableScrollLock: true }} sx={{
                    fontFamily: "Nanum Gothic",
                    fontSize: 17
                }}>
                    <MenuItem value="inquiry">문의하기</MenuItem>
                    <MenuItem value="visit">두더집 탐방 신청하기</MenuItem>
                </Select>
            </FormControl>
        </Form>
    </div >;
}