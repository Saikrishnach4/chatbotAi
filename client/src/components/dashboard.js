import { useState } from "react";
import React from 'react'
import axios from 'axios'
import styles from "./dashboard.module.css"
import ChatComponent from "./chatbot";
import bamma from "../assets/bamma.png"
import lock from "../assets/download.png"




export default function Dashboard() {


    return (
        <div className={styles.maindiv}>
            <nav className={styles.nav}>
                <div style={{ display: "flex", flexDirection: "column", paddingLeft: "50px" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "3px" }}><h4>secret</h4> <h4 style={{ display: "inline-flex", backgroundColor: "rgb(214, 42, 94)", borderRadius: "5px", width: "3.5vw", height: "28px" }}>desires</h4></div>
                    <span style={{ margin: "0px", fontSize: "10px", color: "rgb(150, 142, 138)" }}>Open Beta</span>
                </div>

                <div className={styles.subdiv2}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}><svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M114.8 561.9l-0.8 92.6 151.1-92.6h291.3c39.4 0 71.3-32.6 71.3-72.9V206c0-40.3-31.9-72.9-71.3-72.9H114.8c-39.4 0-71.3 32.6-71.3 72.9v283c0 40.3 31.9 72.9 71.3 72.9z" fill="#9ED5E4" /><path d="M114 669.1c-2.5 0-4.9-0.6-7.1-1.9-4.6-2.6-7.4-7.5-7.4-12.7l0.7-79.3C59.8 568.1 29 532.2 29 489V206c0-48.2 38.5-87.4 85.8-87.4h441.5c47.3 0 85.8 39.2 85.8 87.4v283c0 48.2-38.5 87.4-85.8 87.4H269.2l-147.6 90.5c-2.4 1.4-5 2.2-7.6 2.2z m0.8-521.5C83.5 147.6 58 173.8 58 206v283c0 32.2 25.5 58.4 56.9 58.4 3.9 0 7.6 1.5 10.3 4.3 2.7 2.7 4.2 6.5 4.2 10.3l-0.6 66.5 128.8-79c2.3-1.4 4.9-2.1 7.6-2.1h291.3c31.4 0 56.9-26.2 56.9-58.4V206c0-32.2-25.5-58.4-56.9-58.4H114.8z" fill="#154B8B" /><path d="M890.1 773.1l1.1 117.4-195.6-117.4H318.4c-51 0-92.4-41.4-92.4-92.4V322.1c0-51 41.4-92.4 92.4-92.4h571.7c51 0 92.4 41.4 92.4 92.4v358.7c0 50.9-41.3 92.3-92.4 92.3z" fill="#FAFCFC" /><path d="M891.2 905c-2.6 0-5.2-0.7-7.5-2.1L691.6 787.6H318.4c-58.9 0-106.9-47.9-106.9-106.9V322.1c0-58.9 47.9-106.9 106.9-106.9h571.7c58.9 0 106.9 47.9 106.9 106.9v358.7c0 54-40.2 98.7-92.2 105.9l1 103.8c0 5.2-2.7 10.1-7.3 12.7-2.3 1.1-4.8 1.8-7.3 1.8zM318.4 244.2c-42.9 0-77.9 34.9-77.9 77.9v358.7c0 42.9 34.9 77.9 77.9 77.9h377.2c2.6 0 5.2 0.7 7.5 2.1l173.5 104.1-0.8-91.5c0-3.9 1.5-7.6 4.2-10.3 2.7-2.7 6.4-4.3 10.3-4.3 42.9 0 77.9-34.9 77.9-77.9V322.1c0-42.9-34.9-77.9-77.9-77.9H318.4z" fill="#154B8B" /><path d="M376 499.8a47.3 44.8 0 1 0 94.6 0 47.3 44.8 0 1 0-94.6 0Z" fill="#144884" /><path d="M557 499.8a47.3 44.8 0 1 0 94.6 0 47.3 44.8 0 1 0-94.6 0Z" fill="#144884" /><path d="M737.9 499.8a47.3 44.8 0 1 0 94.6 0 47.3 44.8 0 1 0-94.6 0Z" fill="#144884" /></svg><>chat</></div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}><svg width="20px" height="20px" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd" d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z" />
                    </svg>
                        <>my characters</></div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9C3 7.89543 3.89543 7 5 7H6.5C7.12951 7 7.72229 6.70361 8.1 6.2L9.15 4.8C9.52771 4.29639 10.1205 4 10.75 4H13.25C13.8795 4 14.4723 4.29639 14.85 4.8L15.9 6.2C16.2777 6.70361 16.8705 7 17.5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="12" cy="13" r="4" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg><>Generate Images</></div>
                    <div>Create characters</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div>My Profile</div></div>
            </nav>

            <div className={styles.container}>
                <h4>jessica Anderson</h4>
                <h6 style={{ margin: "0px" }}>@jessica-anderson-2</h6>
            </div>
            <div className={styles.div}>
                <div className={styles.bamma}>
                    <img style={{ width: "100%" }} src={bamma} />
                    <div className={styles.bamma1}>
                        <div></div>
                        <div style={{ paddingRight: "10px" }}>
                            Make charecter public</div>
                    </div>
                    <div className={styles.bamma2}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "30px", marginTop: "20px", gap: "5px" }}>
                            <h2>Who I Am</h2>
                            <div style={{ display: "flex", flexDirection: "column", }}>
                                <h4 >Personality</h4>
                                <span>Caregiver</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", }}>
                                <h4 >Work</h4>
                                <span>Yoga Instructor</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", }}>
                                <h4 >Hobbies</h4>
                                <span>Anime Fan</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", }}>
                                <h4 >Relationship</h4>
                                <span>Friend</span>
                            </div>
                        </div>



                        <div style={{ display: "flex", gap: "10px", flexDirection: "column", marginTop: "20px" }}>
                            <h2>
                                About Me
                            </h2>
                            <span >
                                21-year-old anime fanatic and yoga
                                instructor.Ibinge-watch anime!Looking
                                for someone to join me in downward dog
                                and anime marathons.Fun fact:Icon
                                recite the entire script of my favorite
                                anime moviefrom memory.Let's chat
                            </span>
                        </div>

                    </div>
                </div>
                
                    <ChatComponent />
                
            </div>

        </div>
    )
}
