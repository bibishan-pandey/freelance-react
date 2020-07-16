import React from "react";

import styles from './messages.module.css';


const MessageComponent = () => {
    return (
        <div className={styles.messaging}>
            <div className={styles.inboxMsg}>
                <div className={styles.inboxPeople}>
                    <div className={styles.headindSrch}>
                        <div className={styles.recentHeading}>
                            <h4>Recent</h4>
                        </div>
                        <div className={styles.srchBar}>
                            <input type="text" className={styles.srchBar} placeholder="Search"/>
                        </div>
                    </div>
                    <div className={styles.inboxChat}>
                        <div className={`${styles.chatList} ${styles.activeChat}`}>
                            <div className={styles.chatPeople}>
                                <div className={styles.chatImg}><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className={styles.chatIb}>
                                    <h5>Sunil Rajput <span>Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chatList}>
                            <div className={styles.chatPeople}>
                                <div className={styles.chatImg}><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className={styles.chatIb}>
                                    <h5>Sunil Rajput <span>Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chatList}>
                            <div className={styles.chatPeople}>
                                <div className={styles.chatImg}><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className={styles.chatIb}>
                                    <h5>Sunil Rajput <span>Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chatList}>
                            <div className={styles.chatPeople}>
                                <div className={styles.chatImg}><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className={styles.chatIb}>
                                    <h5>Sunil Rajput <span>Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chatList}>
                            <div className={styles.chatPeople}>
                                <div className={styles.chatImg}><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className={styles.chatIb}>
                                    <h5>Sunil Rajput <span>Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chatList}>
                            <div className={styles.chatPeople}>
                                <div className={styles.chatImg}><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className={styles.chatIb}>
                                    <h5>Sunil Rajput <span>Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chatList}>
                            <div className={styles.chatPeople}>
                                <div className={styles.chatImg}><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className={styles.chatIb}>
                                    <h5>Sunil Rajput <span>Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mesgs}>
                    <div className={styles.msgHistory}>
                        <div className={styles.incomingMsg}>
                            <div className={styles.incomingMsgImg}><img
                                src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                            <div className={styles.receivedMsg}>
                                <div className={styles.receivedWithdMsg}>
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span className={styles.timeDate}> 11:01 AM | June 9</span></div>
                            </div>
                        </div>
                        <div className={styles.outgoingMsg}>
                            <div className={styles.sentMsg}>
                                <p>Test which is a new approach to have all
                                    solutions</p>
                                <span className={styles.timeDate}> 11:01 AM | June 9</span></div>
                        </div>
                        <div className={styles.incomingMsg}>
                            <div className={styles.incomingMsgImg}><img
                                src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                            <div className={styles.receivedMsg}>
                                <div className={styles.receivedWithdMsg}>
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span className={styles.timeDate}> 11:01 AM | June 9</span></div>
                            </div>
                        </div>
                        <div className={styles.outgoingMsg}>
                            <div className={styles.sentMsg}>
                                <p>Test which is a new approach to have all
                                    solutions</p>
                                <span className={styles.timeDate}> 11:01 AM | June 9</span></div>
                        </div>
                        <div className={styles.incomingMsg}>
                            <div className={styles.incomingMsgImg}><img
                                src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                            <div className={styles.receivedMsg}>
                                <div className={styles.receivedWithdMsg}>
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span className={styles.timeDate}> 11:01 AM | June 9</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.typeMsg}>
                        <div className={styles.inputMsgWrite}>
                            <input type="text" className="write_msg" placeholder="Type a message"/>
                            <button className={styles.msgSendBtn} type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageComponent;