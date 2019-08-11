function sendMessage(channel, message){
	channel.send({
		embed:{
			description: message,
			color: 0x1D82B6
		}
	}).then(msg => {
	})
};
module.exports = {
    sendMessage: sendMessage
};