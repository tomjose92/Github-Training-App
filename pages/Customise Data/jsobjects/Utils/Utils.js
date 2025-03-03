export default {
	getUserAge(date = "10/31/1992") {
		return moment().diff(moment(date), 'years')
	}
}