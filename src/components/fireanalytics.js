import firebase from 'gatsby-plugin-firebase';
const fireanalytics = (message) => {
firebase.analytics().logEvent(message)
};
export default fireanalytics;
