import React from "react";
import "@/components/Skeleton/css/style.css";

export default function Skeleton() {
    return (
        <div className="skeleton-container ">
            <div className="skeleton-header1"></div>

            <div className="skeleton-header"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-button"></div>
        </div>
    );
}
