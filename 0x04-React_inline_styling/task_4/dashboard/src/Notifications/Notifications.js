import React, { Component } from "react";
import {StyleSheet, css} from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const styles = Stylesheet.create({
  Notifications: {
    padding: 1em;
    border: 2px dashed red;
    position: absolute;
    top: 1.8em;
    right: 0;

   "@media (max-width: 375px)": {
      display: "block",
      height: "100vh",
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
      border: "none",
      fontSize: "20px",
      padding: "0",
    },  
  },

  notification-header: {
    display: flex;
    justify-content: space-between;
  },

  menuItem: {
    text-align: right;
  },

  menu: {
    zIndex: 100,
    position: "relative"	
    textAlign: "right",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
  button: {
    "@media (max-width: 900px)": {
      position: "relative",
      float: "right",
    },
  },	  
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
 
  render() {
    return (
      <React.Fragment>
      {!this.props.displayDrawer ? (
        <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
	  {this.props.displayDrawer ? (
            <div className={css(styles.Notifications)}>
	      <button
                style={{
		  color: "#3a3a3a",
		  fontWeight: "bold",
		  background: "none",
		  border: "none",
		  fontSize: "10px",
		  position: "absolute",
		  right: "2px",
		  top: "2px", 
		  cursor: "pointer" 
		}}
                aria-label="Close"
                onClick={(e) => {
		  console.log("Close button has been clicked")
		}}
              >
		 <img src={closeIcon} alt="closeIcon" width="10px" />
               </button>
	       {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
            <ul>
              {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {this.props.listNotifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

Nofications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
