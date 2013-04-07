function onLoad() {
	//demo users
	chat_user("webpigeon");
	chat_user("bruce89");
	chat_user("sebsebseb");

	//create some channels
	chat_channel("general");
	chat_channel("technology");
}

function chat_user(user) {
	if (true) {
		$("#chat-user-list").append("<li><a>"+user+"</a></li>");
	}
}

function chat_channel(channel) {
	if (true) {
		$("#chat-tabs").append("<li><a>"+channel+"</a></li>");
		$("#chat-body").append("<li><a>"+channel+"</a></li>");
	} else {
		$("#chat-tab-"+channel).tab();	
	}
}

function chat_send(chat, user, message) {
}
