import axios from 'axios';

const apiURl = 'http://mesosreport-mesos-report.1d35.starter-us-east-1.openshiftapps.com/api/quiz_ans';
const profileURl = 'http://mesosreport-mesos-report.1d35.starter-us-east-1.openshiftapps.com/api/profile';

const Api = {
	loadQuizList(userid, size) {
		return axios.get(apiURl);
	},
	loadQuizResponse(quizid, size) {
		return axios.get(apiURl + `/${quizid}/quiz_ans_response`);
	},
	loadWeekQuizList(userid, size) {
		return axios.get(apiURl);
	},
	loadWeekQuizResponse(quizid, size) {
		return axios.get(apiURl + `/${quizid}/quiz_ans_response`);
	},
	loadUserProfile(userid, size) {
		return axios.get(profileURl + '?filter={"user_id":' + userid + '}');
	},
	updateUserProfile(userProfile) {
		return axios.put(profileURl, userProfile);
	}
};

export default Api;
