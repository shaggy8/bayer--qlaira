(function(config){

	
	
	// Creating our presentation and global namespace "app"
	window.app = new Presentation({
		globalElements: ['mainMenu'],
		type:'json',
		manageMemory: true
	});

	
	// Initiate modules
	app.scroller = new Slidescroller();
	AutoMenu.prototype.hide = function(){
		this.ele.addClass("hidden");
	};
	AutoMenu.prototype.show = function(){
		this.ele.removeClass("hidden");
	};
	app.menu = new AutoMenu({
		attachTo: 'storyboard',
		
		links: {
			s1s: {title: ' ', classname: 'home'},

		}
	});

	app.data = new Data(true);
	//builder.checkIfNeedToLoadPresentation();
	// Initialize presentation
	app.init('s1s', 'front_page');

	app.analytics.init(config);
})();




// Prevent vertical bouncing of slides
document.ontouchmove = function(event){
	event.preventDefault();
};

var ev = "touchend mouseup";

var nav_slide = 's8_1',
nav_dir = 's8_1s';


var prew = {
	"qlaira": {
		"qlaira_1": ["s1_1"],
		"qlaira_2": ["s1_2","s1_3","s1_4","s1_5","s1_6","s1_7","s1_8","s1_9"],
		"qlaira_3": ["s1_10","s1_11","s1_12"],
		"qlaira_4": ["s1_13","s1_14","s1_15","s1_16","s1_17"],
		"qlaira_5": ["s1_18","s1_19","s1_20"],
		"qlaira_6": ["s1_21","s1_22","s1_23","s1_24","s1_25","s1_26","s1_27"],
		"qlaira_7": ["s1_28","s1_29","s1_30","s1_31","s1_32","s1_33","s1_34","s1_35"],														
		"class": "qlaira",
		"name": "qlaira",
		"prevId": "s1_1s"	
	},
	"vis": {
		"vis_1": ["s2_1"],
		"vis_2": ["s2_2","s2_3","s2_4","s2_5"],		
		"vis_3": ["s2_6","s2_7","s2_8"],
		"vis_4": ["s2_9","s2_10","s2_11","s2_12","s2_13"],	
		"vis_5": ["s2_14","s2_15","s2_16"],
		"vis_6": ["s2_17","s2_18"],
		"vis_7": ["s2_19","s2_20","s2_21"],	
		"vis_8": ["s2_22","s2_23","s2_24"],	
		"vis_9": ["s2_25","s2_26","s2_27","s2_28","s2_29"],
		"vis_10": ["s2_30","s2_31","s2_32","s2_33","s2_34","s2_35","s2_36"],
		"class": "vis",
		"name": "vis",
		"prevId": "s2_1s"												
	},
	"flex": {
		"flex_0": ["s3_0"],
		"flex_1": ["s3_1","s3_2","s3_3","s3_4","s3_5"],
		"flex_2": ["s3_6","s3_7","s3_8","s3_9","s3_10","s3_11","s3_12"],
		"flex_3": ["s3_13","s3_14","s3_15"],
		"flex_4": ["s3_16","s3_17","s3_18"],	
		"flex_5": ["s3_19","s3_20","s3_21","s3_22"],
		"flex_6": ["s3_23","s3_24","s3_25","s3_26","s3_27"],
		"flex_7": ["s3_28"],
		"flex_8": ["s3_29","s3_30","s3_31"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s"	
	},
	"flex_v1": {
		"flex_16": ["s3_111","s3_112","s3_113","s3_114","s3_115","s3_116","s3_117","s3_118","s3_119","s3_120","s3_121","s3_122"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v1"	
	},
	"flex_v2": {
		"flex_9": ["s3_32","s3_33","s3_34","s3_35","s3_36","s3_37","s3_38","s3_39","s3_40","s3_41"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v2"	
	},
	"flex_v3": {
		"flex_10": ["s3_42","s3_43","s3_44","s3_45","s3_46","s3_47","s3_48","s3_49","s3_50","s3_51","s3_52"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v3"	
	},
	"flex_v4": {
		"flex_12": ["s3_65","s3_66","s3_67","s3_68","s3_69","s3_70","s3_71","s3_72","s3_73","s3_74","s3_75","s3_76"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v4"	
	},
	"flex_v5": {
		"flex_11": ["s3_53","s3_54","s3_55","s3_56","s3_57","s3_58","s3_59","s3_60","s3_61","s3_62","s3_63","s3_64"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v5"	
	},
	"flex_v6": {
		"flex_13": ["s3_77","s3_78","s3_79","s3_80","s3_81","s3_82","s3_83","s3_84","s3_85","s3_86","s3_87"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v6"	
	},
	"flex_v7": {
		"flex_14": ["s3_88","s3_89","s3_90","s3_91","s3_92","s3_93","s3_94","s3_95","s3_96","s3_97","s3_98","s3_99"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v7"	
	},
	"flex_v8": {
		"flex_15": ["s3_100","s3_101","s3_102","s3_103","s3_104","s3_105","s3_106","s3_107","s3_108","s3_109","s3_110"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_v8"	
	},
	"flex_q": {
		"flex_17": ["s3_123","s3_124","s3_125","s3_126","s3_127"],
		"flex_18": ["s3_128","s3_129","s3_130"],
		"flex_19": ["s3_131","s3_132"],
		"flex_20": ["s3_133","s3_134","s3_135"],
		"flex_21": ["s3_136","s3_137","s3_138","s3_139","s3_140","s3_141"],
		"class": "flex",
		"name": "flex",
		"prevId": "s3_1s_q"	
	},
	"mir": {
		"mir_1": ["s4_1"],
		"mir_2": ["s4_2","s4_3"],		
		"mir_3": ["s4_4"],
		"mir_4": ["s4_5","s4_6","s4_7","s4_8","s4_9","s4_10"],	
		"mir_5": ["s4_11","s4_12","s4_13","s4_14","s4_15","s4_16"],
		"mir_6": ["s4_17","s4_18","s4_19","s4_20"],
		"mir_7": ["s4_21","s4_22","s4_23","s4_24","s4_25","s4_26","s4_27","s4_28","s4_29","s4_30","s4_31","s4_32","s4_33","s4_34","s4_35"],	
		"mir_8": ["s4_36","s4_37","s4_38","s4_39","s4_40","s4_41"],	
		"mir_9": ["s4_42"],
		"mir_10": ["s4_43"],		
		"class": "mir",
		"name": "mir",
		"prevId": "s4_1s"	
	}



}



var presentetion = {
	bgImg: [],
	popups: [],	
	bgStyle: function(img, slide, count) {
		for (var i = 1; i <= count; i++) {
			bgImg = document.getElementsByClassName(slide + i);
			if (bgImg[0]) {
				bgImg[0].style.backgroundImage = "url('content/img/"+ img + "/" + img + "_" + i + ".png')";
			}
		}
	},
	popup: function(id) {
		var id = document.getElementById(id);
		presentetion.popups = document.getElementsByClassName('popups');		
		for (var i = 0; i < presentetion.popups.length; i++) {
			presentetion.popups[i].removeClass('active');
		};
		id.addClass('active');
	},
	closePopup: function() {
		for (var i = 0; i < presentetion.popups.length; i++) {
			if(presentetion.popups.length !== 0) {
				presentetion.popups[i].removeClass('active');
			};
		};
		presentetion.popups = [];
	},
	animationBlocks: function(id, arrow) {
		var id = document.getElementById(id);
		var arrow = document.getElementById(arrow);		
		setTimeout(function(){
			id.toggleClass('active');
			arrow.toggleClass('active');
		}, 300)

	},
	openAccordeon: function(id) {
		var id = document.getElementById(id);
		var blocks = document.getElementsByClassName('blocks');

		if(!(id.hasClass('active')))	{		
			for (var i = 0; i < blocks.length; i++) {
				blocks[i].removeClass('active');
			};	
			id.addClass('active');
		} else {
			id.removeClass('active');
		}				
	},
	secondId: '',
	firstId: '',
	prev: function(presId, groupId, slideId) {
		if(presId === 'empty') {
			document.getElementById('thumbs').classList.add('hiddenThrumbs');
			document.getElementById('thumbs').classList.remove("active");
		} else {
			document.getElementById('thumbs').classList.remove('hiddenThrumbs');				
			presentetion.firstId = groupId;

			var handle_middle = document.getElementById("handle_middle");
			var preview_container = document.getElementById("preview_container");				
			var slide_id = "",
					prev_id;

			handle_middle.classList.add(prew[presId]["class"]);

			if(presentetion.firstId !== presentetion.secondId) {

				removeChildrenRecursively(handle_middle);
				removeChildrenRecursively(preview_container);			

				for(var i = 0; i< prew[presId][groupId].length; i++) {

					var slideTrumb = document.createElement('div');
					slideTrumb.classList.add("indicator");
					slideTrumb.id = prew[presId][groupId][i] + '_indicator';

					handle_middle.appendChild(slideTrumb);

					var slidePrev = document.createElement('li');
					slidePrev.innerHTML = '<li class="prev" id="' + prew[presId][groupId][i] + '_prev" onclick="app.goTo(\''+ prew[presId]["prevId"] + '\',\'' + prew[presId][groupId][i] + '\')" ><img  src="content/img/thumbs/' + prew[presId][groupId][i] + '.jpg"></li>'				
					preview_container.appendChild(slidePrev);
				};
				presentetion.secondId = groupId;
				slide_id = document.getElementById(slideId + '_indicator');
				prev_id = document.getElementById(slideId + '_prev');
				slide_id.classList.add("active");
				prev_id.classList.add("active");

				} else {
					var indicator = document.getElementsByClassName("indicator"), 
					prev = document.getElementsByClassName("prev");	
					slide_id = document.getElementById(slideId + '_indicator');
					prev_id = document.getElementById(slideId + '_prev');			
					for (var i = 0; i<indicator.length; i++) {
						indicator[i].classList.remove("active");
					};
					for (var i = 0; i<prev.length; i++) {
						prev[i].classList.remove("active");
					};

					slide_id.classList.add("active");
					prev_id.classList.add("active");			
				}
		}

		},

		openPrev: function() {
			var thumbs = document.getElementById("thumbs");

			if(!thumbs.hasClass("active")) {
				thumbs.classList.add("active");
			} else if(thumbs.hasClass("active")){
				thumbs.classList.remove("active");
			};

		},
		menuTop: function(product){
			var menu = document.getElementById('mainMenu');
			if(product == 'empty') {
				menu.innerHTML = '<nav id="menuTop" class=""></nav>';
			};	
			if(product == 'Flex') {
				menu.innerHTML = '<nav id="menuTop" class="">\
				<ul id="menu-1" class="menu_top menu_Flex">\
					<li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"><span onclick="app.goTo(\'s1s\', \'s1\')"><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
					<li class="menu_top_2" onclick="app.goTo(\'s3_1s\', \'s3_1\')"><span>E-detailer Джес Плюс</span></li>\
					<li class="menu_top_3" onclick="app.goTo(\'s3_1s_v1\', \'s3_32\')"><span>Визиты</span></li>\
					<li class="menu_top_4" onclick="app.goTo(\'s3_1s_q\', \'s3_123\')"><span>Вопросы и Ответы</span></li>\
				</ul></nav>';
			};
			if(product == 'Jass') {
				menu.innerHTML = '<nav id="menuTop" class="">\
					<ul id="menu-1" class="menu_top menu_Jass">\
						<li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"> <span><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
						<li class="menu_top_2" onclick="app.goTo(\'s3_1s\', \'s3_2\')"><span>Для кого?</span></li>\
						<li class="menu_top_3" onclick="app.goTo(\'s3_1s\', \'s3_6\')"><span>Эффективность</span></li>\
						<li class="menu_top_4" onclick="app.goTo(\'s3_1s\', \'s3_12\')"><span>Длительность</span></li>\
						<li class="menu_top_5" onclick="app.goTo(\'s3_1s\', \'s3_15\')"><span>Безопасность</span></li>\
						<li class="menu_top_6" onclick="app.goTo(\'s3_1s\', \'s3_23\')"><span>Акне</span></li>\
						<li class="menu_top_7" onclick="app.goTo(\'s3_1s\', \'s3_24\')"><span>СПКЯ</span></li>\
						<li class="menu_top_8" onclick="app.goTo(\'s3_1s\', \'s3_38\')"><span>ПМС</span></li>\
						<li class="menu_top_9" onclick="app.goTo(\'s3_1s\', \'s3_40\')"><span>FAQ</span></li>\
					</ul></nav>';
			};
			if(product == 'Ang') {
				menu.innerHTML = '<nav id="menuTop" class="">\
				<ul id="menu-1" class="menu_top menu_Ang">\
					<li class="home-menu menu_top_0" onclick="app.goTo(\'s1s\', \'s1\')"> <span><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
					<li class="menu_top_1" onclick="app.goTo(\'s1_1s\', \'s1_1\')"><span>Схемы<br>назначения</span></li>\
					<li class="menu_top_2" onclick="app.goTo(\'s1_1s\', \'s1_2\')"><span>Эффективность</span></li>\
					<li class="menu_top_3" onclick="app.goTo(\'s1_1s\', \'s1_3\')"><span>Безопасность</span></li>\
					<li class="menu_top_4" onclick="app.goTo(\'s1_1s\', \'s1_7\')"><span>Качество<br> жизни</span></li>\
					<li class="menu_top_5" onclick="app.goTo(\'s1_1s\', \'s1_8\')"><span>Дополнительные<br>преимущества</span></li>\
					<li class="menu_top_6" onclick="app.goTo(\'s1_1s\', \'s1_17\')"><span>Анжелик<sup>&reg;</sup> <br>vs Фемостон</span></li>\
					<li class="menu_top_7" onclick="app.goTo(\'s1_1s\', \'s1_18\')"><span>Кому <br>Анжелик<sup>&reg;</sup></span></li>\
					<li class="menu_top_8" onclick="app.goTo(\'s1_1s\', \'s1_21\')"><span>Ультранизкая<br>доза</span></li>\
					<li class="menu_top_9" onclick="app.goTo(\'s1_1s\', \'s1_25\')"><span>Кому<br>Анжелик<sup>&reg;</sup> Микро</span></li>\
					<li class="menu_top_10" onclick="app.goTo(\'s1_1s\', \'s1_35\')"><span>Ультра доза vs<br>Фитоэстрогены</span></li>\
					<li class="menu_top_11" onclick="app.goTo(\'s1_1s\', \'s1_36\')"><span>Длительность</span></li>\
					</ul></nav>';
			};
			if(product == 'Ang_M') {
				menu.innerHTML = '<nav id="menuTop" class=""><ul id="menu-1" class="menu_top menu_Ang_M"><li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"> <span><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li><li class="menu_top_2" onclick="app.goTo(\'s4_1s\', \'s4_2\')"><span>Ультранизкая<br/> доза</span></li><li class="menu_top_3" onclick="app.goTo(\'s4_1s\', \'s4_5\')"><span>Ультра доза vs<br/>Фитоэстрогены</span></li>				<li class="menu_top_4" onclick="app.goTo(\'s4_1s\', \'s4_6\')"><span>Эффективность</span></li>				<li class="menu_top_5" onclick="app.goTo(\'s4_1s\', \'s4_7\')"><span>Переносимость</span></li>				<li class="menu_top_6" onclick="app.goTo(\'s4_1s\', \'s4_8\')"><span>Дополнительные<br/>преимущества</span></li>				<li class="menu_top_7" onclick="app.goTo(\'s4_1s\', \'s4_9\')"><span>Безопасность</span></li>				<li class="menu_top_8" onclick="app.goTo(\'s4_1s\', \'s4_10\')"><span>Кому<br/>Анжелик<sup>&reg;</sup> Микро</span></li>    <li class="menu_top_9" onclick="app.goTo(\'s4_1s\', \'s4_23\')"><span>Длительность</span></li>     <li class="menu_top_10" onclick="app.goTo(\'s4_1s\', \'s4_24\')"><span>Схемы<br/>назначения</span></li></ul></nav>';
			};
			if(product == 'Mir') {
				menu.innerHTML = '<nav id="menuTop" class="">\
					<ul id="menu-1" class="menu_top menu_Mir">\
						<li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"><span onclick="app.goTo(\'s1s\', \'s1\')"><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
						<li class="menu_top_2" onclick="app.goTo(\'s4_1s\', \'s4_2\')"><span>Что такое <br>ВМС Мирена<sup>&reg;</sup>?</span></li>\
						<li class="menu_top_3" onclick="app.goTo(\'s4_1s\', \'s4_4\')"><span>Эффективность</span></li>\
						<li class="menu_top_4" onclick="app.goTo(\'s4_1s\', \'s4_5\')"><span>Безопасность<br/>и переносимость</span></li>\
						<li class="menu_top_5" onclick="app.goTo(\'s4_1s\', \'s4_11\')"><span>ОМК</span></li>\
						<li class="menu_top_6" onclick="app.goTo(\'s4_1s\', \'s4_17\')"><span>Компонент МГТ</span></li>\
						<li class="menu_top_7" onclick="app.goTo(\'s4_1s\', \'s4_21\')"><span>Портреты<br>пациенток</span></li>\
						<li class="menu_top_8" onclick="app.goTo(\'s4_1s\', \'s4_36\')"><span>Мирабель</span></li>\
						<li class="menu_top_9" onclick="app.goTo(\'s4_1s\', \'s4_42\')"><span>Что выбирают<br>эксперты?</span></li>\
					</ul></nav>';
			};
			scrolNav();	
		},




		menuTopSelected: function(selectLi) {
			var menu_top_before;
			if(selectLi != menu_top_before) {
				$("#menuTop li").removeClass('selected');
				$("." + selectLi).addClass('selected');
				menu_top_before = selectLi;
			};
		}

	}

	function removeChildrenRecursively(node)
	{
		if (!node) return;
		while (node.hasChildNodes()) {
			removeChildrenRecursively(node.firstChild);
			node.removeChild(node.firstChild);
		}
	};

/*функция скроллинга*/
function scrolNav() {
	var preview = document.getElementsByClassName("touch_scroll"); 
	var scrollStartPos=0;
	for(var i = 0, j=preview.length; i<j; i++){


		preview[i].addEventListener("touchstart", function(event) { 
			scrollStartPos=this.scrollTop+event.touches[0].pageY; 
		},false); 

		preview[i].addEventListener("touchmove", function(event) { 
			this.scrollTop=scrollStartPos-event.touches[0].pageY; 
		},false); 
	};


};

/*верхнее меню*/

/*запуск / остановка видео*/

function playVideo(video){
	document.getElementById('video_' + video).style.cssText="display:block;";
	document.getElementById('stop_video_' + video).style.cssText="display:block;";
	document.getElementById('video_' + video).play();
};	


function stopVideo(video){
	document.getElementById('video_' + video).pause();
	document.getElementById('video_' + video).style.cssText="display:none";
	document.getElementById('stop_video_' + video).style.cssText="display:none;";
};

	

/*счетчик колличества символов*/
function textareaLength(val){
	var maxLength = $('#comment' + val).attr('maxlength'); 
	$('#comment' + val).on('keyup', function() {
		var curLength = $('#comment' + val).val().length;
		$("#free_symbols" + val).text(maxLength - curLength);
	});

};


// /*отправка статистики*/
// var response_value = "",
// question_value = "",
// label_id = 0;
// function submitDataFlex(){
// 	ag.submit.data({
// 		unique: true,
// 		category: "CLM_Beauty_line_1cycle_2016",
// 		categoryId: label_id,
// 		label: question_value,
// 		value: response_value,
// 		valueType: "text",
// 		labelId: label_id,
// 		path: app.getPath()
// 	});
// 	console.log("label_id = " + label_id + ": " + question_value + ": " + response_value);
// };

// function submitData(val, question){
// 	ag.submit.data({
// 		unique: true,
// 		category: "CLM_VITA_line_1cycle_2016",
// 		categoryId: "CLM_VITA_line_1cycle_2016",
// 		label: question,
// 		value: val,
// 		valueType: "text",
// 		labelId: "Id",
// 		path: app.getPath()
// 	});
// 	console.log(val + ": "+ question);
// };

var response_value = "",
question_value = "",
label_id = 0;

function getValQuestionnaire(id, name, question, text) {
	label_id = '';
	response_value = '';
	question_value = '';

	label_id = id;
	$('input[name="'+name+'"]:checked').each(function() {

		response_value = response_value + this.value + ", ";
	});	
	question_value = question;
	if($('#checkbox_' + id).is(":checked")){
		console.log($('#' + text));
		response_value = response_value + $('#' + text).val();
	} 

	submitData();
}

/*отправка статистики*/

function submitData(){
	ag.submit.data({
		unique: true,
		category: "A CLM_Beauty_line_2cycle_2016",
		categoryId: label_id,
		label: question_value,
		value: response_value,
		valueType: "text",
		labelId: label_id,
		path: app.getPath()
	});
	alert("label_id = " + label_id + ": " + question_value + ": " + response_value);
};