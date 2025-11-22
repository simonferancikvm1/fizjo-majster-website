import React from "react";
import "./ReservationButton.css";
import { RESERVATION } from "../config";

export default function ReservationButton() {
    return (
        <a href={RESERVATION.booksy} target="blank" className="reservation-button">Umów wizytę</a>
    );
}