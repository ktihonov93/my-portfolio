import React from 'react'
import DownloadButton from "./DownloadButton";
import "./Resume.css";
import ResumeContent from "./ResumeContent"

export default function Resume() {
    return (
        <div className="Resume">
            <DownloadButton/>
            <ResumeContent/>
        </div>
    )
}
