	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1 = {
	    elements: {
	      painContent: "#s1_0"
	    },
	    onEnter: function(slideElement) {
	      app.menu.hide();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('empty');

	      /*переход к разделам после прохождения опроса*/

	      // nav_slide = 's8_1',
	      // nav_dir = 's8_1s';

	      // $('.nav_btn').on(ev, function() {
	      // 	app.goTo(nav_dir, nav_slide);
	      // 	nav_slide = $(this).attr('data-slide');
	      // 	nav_dir = $(this).attr('data-dir');
	      // 	console.log(nav_dir, nav_slide);
	      // });


	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_1 = {
	    elements: {
	      painContent: "#s1_1_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("empty");
	      presentetion.bgStyle('Qlaira_Vita', 'bg_s1_', 35);
	      presentetion.prev('qlaira', 'qlaira_1', "s1_1");
	      //submitSlideEnter('slideId', 'slideName', slideIndex, 'parentName', 'grandparentName');
	      submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_10 = {
	    elements: {
	      painContent: "#s1_10_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_3', "s1_10");
	      submitSlideEnter('s1_10', '10', 10, '10', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_10');
	    }
	  }

	});


	function tapWindow1_10(n) {
	  var a = document.getElementById('window' + n);
	  var b = document.getElementsByClassName('tapsWindow1-10');
	  for (var i = 0; i < b.length; i++) {
	    b[i].addClass('hiddenWindow');
	  }

	  a.removeClass('hiddenWindow');

	};









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_11 = {
	    elements: {
	      painContent: "#s1_11_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_3', "s1_11");
	      submitSlideEnter('s1_11', '11', 11, '11', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_11');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_12 = {
	    elements: {
	      painContent: "#s1_12_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_3', "s1_12");
	      submitSlideEnter('s1_12', '12', 12, '12', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_12');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_13 = {
	    elements: {
	      painContent: "#s1_13_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_4', "s1_13");
	      submitSlideEnter('s1_13', '13', 13, '13', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_13');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_14 = {
	    elements: {
	      painContent: "#s1_14_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_4', "s1_14");
	      submitSlideEnter('s1_14', '14', 14, '14', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_14');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_15 = {
	    elements: {
	      painContent: "#s1_15_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_4', "s1_15");
	      submitSlideEnter('s1_15', '15', 15, '15', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_15');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_16 = {
	    elements: {
	      painContent: "#s1_16_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_4', "s1_16");
	      submitSlideEnter('s1_16', '16', 16, '16', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_16');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_17 = {
	    elements: {
	      painContent: "#s1_17_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_4', "s1_17");
	      submitSlideEnter('s1_17', '17', 17, '17', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_17');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_18 = {
	    elements: {
	      painContent: "#s1_18_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_5', "s1_18");
	      submitSlideEnter('s1_18', '18', 18, '18', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_18');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_19 = {
	    elements: {
	      painContent: "#s1_19_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_5', "s1_19");
	      submitSlideEnter('s1_19', '19', 19, '19', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_19');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_2 = {
	    elements: {
	      painContent: "#s1_2_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_2");
	      submitSlideEnter('s1_2', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');



	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_2');

	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_20 = {
	    elements: {
	      painContent: "#s1_20_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_5', "s1_20");
	      submitSlideEnter('s1_20', '20', 20, '20', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_20');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_21 = {
	    elements: {
	      painContent: "#s1_21_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_6', "s1_21");
	      submitSlideEnter('s1_21', '21', 21, '21', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_21');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_22 = {
	    elements: {
	      painContent: "#s1_22_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_6', "s1_22");
	      submitSlideEnter('s1_22', '22', 22, '22', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_22');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_23 = {
	    elements: {
	      painContent: "#s1_23_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_6', "s1_23");
	      submitSlideEnter('s1_23', '23', 23, '23', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_23');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_24 = {
	    elements: {
	      painContent: "#s1_24_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_6', "s1_24");
	      submitSlideEnter('s1_24', '24', 24, '24', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_24');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_25 = {
	    elements: {
	      painContent: "#s1_25_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_6', "s1_25");

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_25');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_26 = {
	    elements: {
	      painContent: "#s1_26_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_6', "s1_26");
	      submitSlideEnter('s1_26', '26', 26, '26', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_26');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_27 = {
	    elements: {
	      painContent: "#s1_27_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_6', "s1_27");
	      submitSlideEnter('s1_27', '27', 27, '27', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_27');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_28 = {
	    elements: {
	      painContent: "#s1_28_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_28");
	      submitSlideEnter('s1_28', '28', 28, '28', 'A WH_Beauty_1_cycle_2015');


	      function hiddenImg() {
	        var a = document.getElementById('step1');
	        a.addClass('activeHidden');
	      };
	      setTimeout(hiddenImg, 9000);




	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_28');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_29 = {
	    elements: {
	      painContent: "#s1_29_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_29");
	      submitSlideEnter('s1_29', '29', 29, '29', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_29');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_3 = {
	    elements: {
	      painContent: "#s1_3_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_3");
	      submitSlideEnter('s1_3', '3', 3, '3', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_3');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_30 = {
	    elements: {
	      painContent: "#s1_30_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      document.getElementById('popup_s1_30__1').addClass('active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_30");
	      submitSlideEnter('s1_30', '30', 30, '30', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_30');
	      presentetion.closePopup();
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_31 = {
	    elements: {
	      painContent: "#s1_31_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_31");
	      submitSlideEnter('s1_31', '31', 31, '31', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_31');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_32 = {
	    elements: {
	      painContent: "#s1_32_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      document.getElementById('animation_s1_32').addClass('active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_32");
	      submitSlideEnter('s1_32', '32', 32, '32', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_32');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_33 = {
	    elements: {
	      painContent: "#s1_33_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      document.getElementById('animation_s1_33').addClass('active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_33");
	      submitSlideEnter('s1_33', '33', 33, '33', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_33');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_34 = {
	    elements: {
	      painContent: "#s1_34_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      document.getElementById('popup_s1_34__1').addClass('active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_34");
	      submitSlideEnter('s1_34', '34', 34, '34', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_34');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_35 = {
	    elements: {
	      painContent: "#s1_35_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      document.getElementById('animation_s1_35').addClass('active');
	      presentetion.prev('qlaira', 'qlaira_7', "s1_35");
	      submitSlideEnter('s1_35', '35', 35, '35', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_35');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_4 = {
	    elements: {
	      painContent: "#s1_4_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_4");
	      submitSlideEnter('s1_4', '4', 4, '4', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_4');


	      presentetion.closePopup();

	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_5 = {
	    elements: {
	      painContent: "#s1_5_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_5");
	      submitSlideEnter('s1_5', '5', 5, '5', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_5');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {

	  var slide = app.slide.s1_6 = {
	    elements: {
	      painContent: "#s1_6_2"
	    },
	    onEnter: function(ele) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_6");
	      submitSlideEnter('s1_6', '6', 6, '6', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(ele) {
	      submitSlideExit('s1_6');
	    }
	  };


	});

	function openWindowSolo1_6(n) {
	  var a = document.getElementById('window' + n);


	  a.addClass('active');

	};









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_7 = {
	    elements: {
	      painContent: "#s1_7_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_7");
	      submitSlideEnter('s1_7', '7', 7, '7', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_7');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_8 = {
	    elements: {
	      painContent: "#s1_8_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');

	      document.getElementById('wrapper_s1_8').addClass('active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_8");
	      submitSlideEnter('s1_8', '8', 8, '8', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_8');

	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s1_9 = {
	    elements: {
	      painContent: "#s1_9_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      document.getElementById('animation_s1_9').addClass('active');
	      presentetion.prev('qlaira', 'qlaira_2', "s1_9");
	      submitSlideEnter('s1_9', '9', 9, '9', 'A WH_Beauty_1_cycle_2015');

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s1_9');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_1 = {
	    elements: {
	      painContent: "#s1_2_1"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.bgStyle('Vis', 'Vis_', 36);
	      presentetion.prev('vis', 'vis_1', "s2_1");
	      //submitSlideEnter('slideId', 'slideName', slideIndex, 'parentName', 'grandparentName');
	      submitSlideEnter('s2_1', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	      scrolNav();
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s2_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_10 = {
	    elements: {
	      painContent: "#s1_2_10"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_4', "s2_10");
	      submitSlideEnter('s2_10', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_10');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_11 = {
	    elements: {
	      painContent: "#s1_2_11"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_4', "s2_11");
	      submitSlideEnter('s2_11', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_11');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_12 = {
	    elements: {
	      painContent: "#s1_2_12"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_4', "s2_12");
	      submitSlideEnter('s2_12', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_12');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_13 = {
	    elements: {
	      painContent: "#s1_2_13"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_4', "s2_13");
	      submitSlideEnter('s2_13', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_13');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_14 = {
	    elements: {
	      painContent: "#s1_2_14"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_5', "s2_14");
	      submitSlideEnter('s2_14', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_14');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_15 = {
	    elements: {
	      painContent: "#s1_2_15"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_5', "s2_15");
	      submitSlideEnter('s2_15', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_15');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_16 = {
	    elements: {
	      painContent: "#s1_2_16"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_5', "s2_16");
	      submitSlideEnter('s2_16', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_16');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_17 = {
	    elements: {
	      painContent: "#s1_2_17"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_6', "s2_17");
	      submitSlideEnter('s2_17', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_17');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_18 = {
	    elements: {
	      painContent: "#s1_2_18"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_6', "s2_18");
	      submitSlideEnter('s2_18', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_18');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_19 = {
	    elements: {
	      painContent: "#s1_2_19"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_7', "s2_19");
	      submitSlideEnter('s2_19', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_19');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_2 = {
	    elements: {
	      painContent: "#s1_2_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_2', "s2_2");
	      submitSlideEnter('s2_1', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s2_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_20 = {
	    elements: {
	      painContent: "#s1_2_20"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_7', "s2_20");
	      submitSlideEnter('s2_20', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_20');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_21 = {
	    elements: {
	      painContent: "#s1_2_21"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_7', "s2_21");
	      submitSlideEnter('s2_21', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_21');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_22 = {
	    elements: {
	      painContent: "#s1_2_22"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_8', "s2_22");
	      submitSlideEnter('s2_22', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_22');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_23 = {
	    elements: {
	      painContent: "#s1_2_23"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_8', "s2_23");
	      submitSlideEnter('s2_23', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_23');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_24 = {
	    elements: {
	      painContent: "#s1_2_24"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_8', "s2_24");
	      submitSlideEnter('s2_24', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_24');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_25 = {
	    elements: {
	      painContent: "#s1_2_25"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_9', "s2_25");
	      submitSlideEnter('s2_25', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_25');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_26 = {
	    elements: {
	      painContent: "#s1_2_26"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_9', "s2_26");
	      submitSlideEnter('s2_26', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_26');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_27 = {
	    elements: {
	      painContent: "#s1_2_27"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_9', "s2_27");
	      submitSlideEnter('s2_27', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_27');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_28 = {
	    elements: {
	      painContent: "#s1_2_28"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_9', "s2_28");
	      submitSlideEnter('s2_28', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_28');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_29 = {
	    elements: {
	      painContent: "#s1_2_29"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_9', "s2_29");
	      submitSlideEnter('s2_29', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_29');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_3 = {
	    elements: {
	      painContent: "#s1_2_3"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_2', "s2_3");
	      submitSlideEnter('s2_1', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s2_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_30 = {
	    elements: {
	      painContent: "#s1_2_30"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_10', "s2_30");
	      submitSlideEnter('s2_30', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_30');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_31 = {
	    elements: {
	      painContent: "#s1_2_31"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_10', "s2_31");
	      submitSlideEnter('s2_31', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_31');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_32 = {
	    elements: {
	      painContent: "#s1_2_32"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_10', "s2_32");
	      submitSlideEnter('s2_32', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_32');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_33 = {
	    elements: {
	      painContent: "#s1_2_33"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_10', "s2_33");
	      submitSlideEnter('s2_33', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_33');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_34 = {
	    elements: {
	      painContent: "#s1_2_34"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_10', "s2_34");
	      submitSlideEnter('s2_34', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_34');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_35 = {
	    elements: {
	      painContent: "#s1_2_35"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_10', "s2_35");
	      submitSlideEnter('s2_35', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_35');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_36 = {
	    elements: {
	      painContent: "#s1_2_36"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_10', "s2_36");
	      submitSlideEnter('s2_36', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      /*util.removeClass(slide.element.painContent,'active');*/
	      submitSlideExit('s2_36');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_4 = {
	    elements: {
	      painContent: "#s1_2_4"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_2', "s2_4");
	      submitSlideEnter('s2_4', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_4');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_5 = {
	    elements: {
	      painContent: "#s1_2_5"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_2', "s2_5");
	      submitSlideEnter('s2_5', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_4');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_6 = {
	    elements: {
	      painContent: "#s1_2_6"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_3', "s2_6");
	      submitSlideEnter('s2_6', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_6');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_7 = {
	    elements: {
	      painContent: "#s1_2_7"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_3', "s2_7");
	      submitSlideEnter('s2_7', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_7');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_8 = {
	    elements: {
	      painContent: "#s1_2_8"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_3', "s2_8");
	      submitSlideEnter('s2_8', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_8');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s2_9 = {
	    elements: {
	      painContent: "#s1_2_9"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.prev('vis', 'vis_4', "s2_9");
	      submitSlideEnter('s2_9', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      util.removeClass(slide.element.painContent, 'active');
	      submitSlideExit('s2_9');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_0 = {
	    elements: {
	      painContent: "#s1_3_0"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_1");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('empty');
	      submitSlideEnter('s3_0', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_0');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_1 = {
	    elements: {
	      painContent: "#s1_3_1"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex', 'flex_1', "s3_1");
	      submitSlideEnter('s3_1', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_10 = {
	    elements: {
	      painContent: "#s1_3_10"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_2', "s3_10");
	      submitSlideEnter('s3_10', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_10');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_100 = {
	    elements: {
	      painContent: "#s1_3_100"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v8', 'flex_15', "s3_100");
	      submitSlideEnter('s3_100', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_100');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_101 = {
	    elements: {
	      painContent: "#s1_3_101"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v8', 'flex_15', "s3_101");
	      submitSlideEnter('s3_101', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_101');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_102 = {
	    elements: {
	      painContent: "#s1_3_102"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_102");
	      submitSlideEnter('s3_102', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_102');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_103 = {
	    elements: {
	      painContent: "#s1_3_103"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_103");
	      submitSlideEnter('s3_103', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_103');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_104 = {
	    elements: {
	      painContent: "#s1_3_104"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_104");
	      submitSlideEnter('s3_104', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_104');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_105 = {
	    elements: {
	      painContent: "#s1_3_105"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_105");
	      submitSlideEnter('s3_105', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_105');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_106 = {
	    elements: {
	      painContent: "#s1_3_106"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_106");
	      submitSlideEnter('s3_106', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_106');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_107 = {
	    elements: {
	      painContent: "#s1_3_107"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_107");
	      submitSlideEnter('s3_107', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_107');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_108 = {
	    elements: {
	      painContent: "#s1_3_108"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_108");
	      submitSlideEnter('s3_108', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_108');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_109 = {
	    elements: {
	      painContent: "#s1_3_109"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_109");
	      submitSlideEnter('s3_109', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_109');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_11 = {
	    elements: {
	      painContent: "#s1_3_11"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_2', "s3_11");
	      submitSlideEnter('s3_11', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_11');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_110 = {
	    elements: {
	      painContent: "#s1_3_110"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v8', 'flex_15', "s3_110");
	      submitSlideEnter('s3_110', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_110');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_111 = {
	    elements: {
	      painContent: "#s1_3_111"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v1', 'flex_16', "s3_111");
	      submitSlideEnter('s3_111', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_111');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_112 = {
	    elements: {
	      painContent: "#s1_3_112"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v1', 'flex_16', "s3_112");
	      submitSlideEnter('s3_112', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_112');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_113 = {
	    elements: {
	      painContent: "#s1_3_113"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_113");
	      submitSlideEnter('s3_113', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_113');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_114 = {
	    elements: {
	      painContent: "#s1_3_114"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_114");
	      submitSlideEnter('s3_114', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_114');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_115 = {
	    elements: {
	      painContent: "#s1_3_115"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_115");
	      submitSlideEnter('s3_115', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');

	      $('#s3_115__slider').slider({
	        value: 1,
	        min: 1,
	        max: 14,
	        step: 1,
	        slide: function(event, ui) {
	          var val = ui.value;
	          $('.s3_115__juice').removeClass('s3_115__juice--full');
	          $('.s3_115__juice').addClass(function(index) {
	            if (index < val) {
	              return 's3_115__juice--full';
	            }
	          });

	          if (val >= 9) {
	            $('#popup_s3_115').addClass('popup_s3_115--right');
	          } else {
	            $('#popup_s3_115').removeClass('popup_s3_115--right');
	          }
	        }
	      });
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_115');
	      $('.s3_115__juice').removeClass('s3_115__juice--full');
	      $('.s3_115__juice').eq(0).addClass('s3_115__juice--full');

	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_116 = {
	    elements: {
	      painContent: "#s1_3_116"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_116");
	      submitSlideEnter('s3_116', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_116');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_117 = {
	    elements: {
	      painContent: "#s1_3_117"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_117");
	      submitSlideEnter('s3_117', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_117');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_118 = {
	    elements: {
	      painContent: "#s1_3_118"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_118");
	      submitSlideEnter('s3_118', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_118');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_119 = {
	    elements: {
	      painContent: "#s1_3_119"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_119");
	      submitSlideEnter('s3_119', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_119');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_12 = {
	    elements: {
	      painContent: "#s1_3_12"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_2', "s3_12");
	      submitSlideEnter('s3_12', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_12');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_120 = {
	    elements: {
	      painContent: "#s1_3_120"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_120");
	      submitSlideEnter('s3_120', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_120');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_121 = {
	    elements: {
	      painContent: "#s1_3_121"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_121");
	      submitSlideEnter('s3_121', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_121');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_122 = {
	    elements: {
	      painContent: "#s1_3_122"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v1', 'flex_16', "s3_122");
	      submitSlideEnter('s3_122', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_122');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_123 = {
	    elements: {
	      painContent: "#s1_3_123"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_q', 'flex_17', "s3_123");
	      submitSlideEnter('s3_123', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_123');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_124 = {
	    elements: {
	      painContent: "#s1_3_124"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_17', "s3_124");
	      submitSlideEnter('s3_124', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_124');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_125 = {
	    elements: {
	      painContent: "#s1_3_125"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_17', "s3_125");
	      submitSlideEnter('s3_125', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_125');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_126 = {
	    elements: {
	      painContent: "#s1_3_126"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_17', "s3_126");
	      submitSlideEnter('s3_126', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_126');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_127 = {
	    elements: {
	      painContent: "#s1_3_127"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_17', "s3_127");
	      submitSlideEnter('s3_127', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_127');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_128 = {
	    elements: {
	      painContent: "#s1_3_128"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_18', "s3_128");
	      submitSlideEnter('s3_128', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_128');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_129 = {
	    elements: {
	      painContent: "#s1_3_129"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_18', "s3_129");
	      submitSlideEnter('s3_129', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_129');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_13 = {
	    elements: {
	      painContent: "#s1_3_13"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_3', "s3_13");
	      submitSlideEnter('s3_13', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_13');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_130 = {
	    elements: {
	      painContent: "#s1_3_130"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_18', "s3_130");
	      submitSlideEnter('s3_130', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_130');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_131 = {
	    elements: {
	      painContent: "#s1_3_131"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_19', "s3_131");
	      submitSlideEnter('s3_131', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_131');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_132 = {
	    elements: {
	      painContent: "#s1_3_132"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_19', "s3_132");
	      submitSlideEnter('s3_132', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_132');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_133 = {
	    elements: {
	      painContent: "#s1_3_133"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_20', "s3_133");
	      submitSlideEnter('s3_133', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_133');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_134 = {
	    elements: {
	      painContent: "#s1_3_134"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_20', "s3_134");
	      submitSlideEnter('s3_134', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_134');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_135 = {
	    elements: {
	      painContent: "#s1_3_135"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_20', "s3_135");
	      submitSlideEnter('s3_135', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_135');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_136 = {
	    elements: {
	      painContent: "#s1_3_136"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_21', "s3_136");
	      submitSlideEnter('s3_136', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_136');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_137 = {
	    elements: {
	      painContent: "#s1_3_137"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_21', "s3_137");
	      submitSlideEnter('s3_137', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_137');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_138 = {
	    elements: {
	      painContent: "#s1_3_138"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_21', "s3_138");
	      submitSlideEnter('s3_138', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_138');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_139 = {
	    elements: {
	      painContent: "#s1_3_139"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_21', "s3_139");
	      submitSlideEnter('s3_139', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_139');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_14 = {
	    elements: {
	      painContent: "#s1_3_14"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_3', "s3_14");
	      submitSlideEnter('s3_14', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_14');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_140 = {
	    elements: {
	      painContent: "#s1_3_140"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_21', "s3_140");
	      submitSlideEnter('s3_140', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_140');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_141 = {
	    elements: {
	      painContent: "#s1_3_141"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('flex_q', 'flex_21', "s3_141");
	      submitSlideEnter('s3_141', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_141');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_15 = {
	    elements: {
	      painContent: "#s1_3_15"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_3', "s3_15");
	      submitSlideEnter('s3_15', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_15');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_16 = {
	    elements: {
	      painContent: "#s1_3_16"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_4', "s3_16");
	      submitSlideEnter('s3_16', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_16');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_17 = {
	    elements: {
	      painContent: "#s1_3_17"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_4', "s3_17");
	      submitSlideEnter('s3_17', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_17');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_18 = {
	    elements: {
	      painContent: "#s1_3_18"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_4', "s3_18");
	      submitSlideEnter('s3_18', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_18');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_19 = {
	    elements: {
	      painContent: "#s1_3_19"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_5', "s3_19");
	      submitSlideEnter('s3_19', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_19');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_2 = {
	    elements: {
	      painContent: "#s1_3_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_1', "s3_2");
	      submitSlideEnter('s3_2', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_20 = {
	    elements: {
	      painContent: "#s1_3_20"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_5', "s3_20");
	      submitSlideEnter('s3_20', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_20');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_21 = {
	    elements: {
	      painContent: "#s1_3_21"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_5', "s3_21");
	      submitSlideEnter('s3_21', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_21');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_22 = {
	    elements: {
	      painContent: "#s1_3_22"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_5', "s3_22");
	      submitSlideEnter('s3_22', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_22');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_23 = {
	    elements: {
	      painContent: "#s1_3_23"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_6', "s3_23");
	      submitSlideEnter('s3_23', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_23');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_24 = {
	    elements: {
	      painContent: "#s1_3_24"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_6', "s3_24");
	      submitSlideEnter('s3_24', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_24');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_25 = {
	    elements: {
	      painContent: "#s1_3_25"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_6', "s3_25");
	      submitSlideEnter('s3_25', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_25');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_26 = {
	    elements: {
	      painContent: "#s1_3_26"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_6', "s3_26");
	      submitSlideEnter('s3_26', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_26');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_27 = {
	    elements: {
	      painContent: "#s1_3_27"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_6', "s3_27");
	      submitSlideEnter('s3_27', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_27');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_28 = {
	    elements: {
	      painContent: "#s1_3_28"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_7', "s3_28");
	      submitSlideEnter('s3_28', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_28');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_29 = {
	    elements: {
	      painContent: "#s1_3_29"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_8', "s3_29");
	      submitSlideEnter('s3_29', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_29');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_3 = {
	    elements: {
	      painContent: "#s1_3_3"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_1', "s3_3");
	      submitSlideEnter('s3_1', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_30 = {
	    elements: {
	      painContent: "#s1_3_30"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_8', "s3_30");
	      submitSlideEnter('s3_30', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_30');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_31 = {
	    elements: {
	      painContent: "#s1_3_31"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_8', "s3_31");
	      submitSlideEnter('s3_31', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_31');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_32 = {
	    elements: {
	      painContent: "#s1_3_32"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v2', 'flex_9', "s3_32");
	      submitSlideEnter('s3_32', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_32');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_33 = {
	    elements: {
	      painContent: "#s1_3_33"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v2', 'flex_9', "s3_33");
	      submitSlideEnter('s3_33', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_33');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_34 = {
	    elements: {
	      painContent: "#s1_3_34"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_34");
	      submitSlideEnter('s3_34', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_34');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_35 = {
	    elements: {
	      painContent: "#s1_3_35"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_35");
	      submitSlideEnter('s3_35', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_35');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_36 = {
	    elements: {
	      painContent: "#s1_3_36"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_36");
	      submitSlideEnter('s3_36', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_36');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_37 = {
	    elements: {
	      painContent: "#s1_3_37"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_37");
	      submitSlideEnter('s3_37', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_37');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_38 = {
	    elements: {
	      painContent: "#s1_3_38"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_38");
	      submitSlideEnter('s3_38', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_38');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_39 = {
	    elements: {
	      painContent: "#s1_3_39"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_39");
	      submitSlideEnter('s3_39', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_39');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_4 = {
	    elements: {
	      painContent: "#s1_3_4"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_1', "s3_4");
	      submitSlideEnter('s3_4', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_4');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_40 = {
	    elements: {
	      painContent: "#s1_3_40"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_40");
	      submitSlideEnter('s3_40', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_40');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_41 = {
	    elements: {
	      painContent: "#s1_3_41"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v2', 'flex_9', "s3_41");
	      submitSlideEnter('s3_41', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_41');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_42 = {
	    elements: {
	      painContent: "#s1_3_42"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v3', 'flex_10', "s3_42");
	      submitSlideEnter('s3_42', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_42');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_43 = {
	    elements: {
	      painContent: "#s1_3_43"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v3', 'flex_10', "s3_43");
	      submitSlideEnter('s3_43', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_43');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_44 = {
	    elements: {
	      painContent: "#s1_3_44"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_44");
	      submitSlideEnter('s3_44', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_44');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_45 = {
	    elements: {
	      painContent: "#s1_3_45"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_45");
	      submitSlideEnter('s3_45', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_45');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_46 = {
	    elements: {
	      painContent: "#s1_3_46"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_46");
	      submitSlideEnter('s3_46', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_46');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_47 = {
	    elements: {
	      painContent: "#s1_3_47"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_47");
	      submitSlideEnter('s3_47', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_47');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_48 = {
	    elements: {
	      painContent: "#s1_3_48"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_48");
	      submitSlideEnter('s3_48', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_48');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_49 = {
	    elements: {
	      painContent: "#s1_3_49"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_49");
	      submitSlideEnter('s3_49', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_49');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_5 = {
	    elements: {
	      painContent: "#s1_3_5"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_1', "s3_5");
	      submitSlideEnter('s3_5', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_4');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_50 = {
	    elements: {
	      painContent: "#s1_3_50"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_50");
	      submitSlideEnter('s3_50', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_50');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_51 = {
	    elements: {
	      painContent: "#s1_3_51"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_51");
	      submitSlideEnter('s3_51', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_51');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_52 = {
	    elements: {
	      painContent: "#s1_3_52"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v3', 'flex_10', "s3_52");
	      submitSlideEnter('s3_52', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_52');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_53 = {
	    elements: {
	      painContent: "#s1_3_53"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v5', 'flex_11', "s3_53");
	      submitSlideEnter('s3_53', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_53');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_54 = {
	    elements: {
	      painContent: "#s1_3_54"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v5', 'flex_11', "s3_54");
	      submitSlideEnter('s3_54', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_54');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_55 = {
	    elements: {
	      painContent: "#s1_3_55"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_55");
	      submitSlideEnter('s3_55', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_55');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_56 = {
	    elements: {
	      painContent: "#s1_3_56"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_56");
	      submitSlideEnter('s3_56', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_56');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_57 = {
	    elements: {
	      painContent: "#s1_3_57"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_57");
	      submitSlideEnter('s3_57', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_57');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_58 = {
	    elements: {
	      painContent: "#s1_3_58"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_58");
	      submitSlideEnter('s3_58', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_58');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_59 = {
	    elements: {
	      painContent: "#s1_3_59"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_59");
	      submitSlideEnter('s3_59', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_59');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_6 = {
	    elements: {
	      painContent: "#s1_3_6"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_2', "s3_6");
	      submitSlideEnter('s3_6', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_6');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_60 = {
	    elements: {
	      painContent: "#s1_3_60"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_60");
	      submitSlideEnter('s3_60', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_60');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_61 = {
	    elements: {
	      painContent: "#s1_3_61"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_61");
	      submitSlideEnter('s3_61', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_61');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_62 = {
	    elements: {
	      painContent: "#s1_3_62"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_62");
	      submitSlideEnter('s3_62', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_62');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_63 = {
	    elements: {
	      painContent: "#s1_3_63"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_63");
	      submitSlideEnter('s3_63', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_63');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_64 = {
	    elements: {
	      painContent: "#s1_3_64"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v5', 'flex_11', "s3_64");
	      submitSlideEnter('s3_64', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_64');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_65 = {
	    elements: {
	      painContent: "#s1_3_65"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v4', 'flex_12', "s3_65");
	      submitSlideEnter('s3_65', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_65');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_66 = {
	    elements: {
	      painContent: "#s1_3_66"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v4', 'flex_12', "s3_66");
	      submitSlideEnter('s3_66', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_66');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_67 = {
	    elements: {
	      painContent: "#s1_3_67"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_67");
	      submitSlideEnter('s3_67', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_67');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_68 = {
	    elements: {
	      painContent: "#s1_3_68"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_68");
	      submitSlideEnter('s3_68', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_68');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_69 = {
	    elements: {
	      painContent: "#s1_3_69"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_69");
	      submitSlideEnter('s3_69', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_69');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_7 = {
	    elements: {
	      painContent: "#s1_3_7"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_2', "s3_7");
	      submitSlideEnter('s3_7', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_7');
	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_70 = {
	    elements: {
	      painContent: "#s1_3_70"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_70");
	      submitSlideEnter('s3_70', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_70');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_71 = {
	    elements: {
	      painContent: "#s1_3_71"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_71");
	      submitSlideEnter('s3_71', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_71');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_72 = {
	    elements: {
	      painContent: "#s1_3_72"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_72");
	      submitSlideEnter('s3_72', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_72');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_73 = {
	    elements: {
	      painContent: "#s1_3_73"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_73");
	      submitSlideEnter('s3_73', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_73');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_74 = {
	    elements: {
	      painContent: "#s1_3_74"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_74");
	      submitSlideEnter('s3_74', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_74');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_75 = {
	    elements: {
	      painContent: "#s1_3_75"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_75");
	      submitSlideEnter('s3_75', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_75');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_76 = {
	    elements: {
	      painContent: "#s1_3_76"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v4', 'flex_12', "s3_76");
	      submitSlideEnter('s3_76', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_76');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_77 = {
	    elements: {
	      painContent: "#s1_3_77"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v6', 'flex_13', "s3_77");
	      submitSlideEnter('s3_77', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_77');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_78 = {
	    elements: {
	      painContent: "#s1_3_78"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v6', 'flex_13', "s3_78");
	      submitSlideEnter('s3_78', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_78');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_79 = {
	    elements: {
	      painContent: "#s1_3_79"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_79");
	      submitSlideEnter('s3_79', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_79');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_8 = {
	    elements: {
	      painContent: "#s1_3_8"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_2', "s3_8");
	      submitSlideEnter('s3_8', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_8');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_80 = {
	    elements: {
	      painContent: "#s1_3_80"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_80");
	      submitSlideEnter('s3_80', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_80');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_81 = {
	    elements: {
	      painContent: "#s1_3_81"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_81");
	      submitSlideEnter('s3_81', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_81');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_82 = {
	    elements: {
	      painContent: "#s1_3_82"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_82");
	      submitSlideEnter('s3_82', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_82');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_83 = {
	    elements: {
	      painContent: "#s1_3_83"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_83");
	      submitSlideEnter('s3_83', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_83');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_84 = {
	    elements: {
	      painContent: "#s1_3_84"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_84");
	      submitSlideEnter('s3_84', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_84');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_85 = {
	    elements: {
	      painContent: "#s1_3_85"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_85");
	      submitSlideEnter('s3_85', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_85');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_86 = {
	    elements: {
	      painContent: "#s1_3_86"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_86");
	      submitSlideEnter('s3_86', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_86');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_87 = {
	    elements: {
	      painContent: "#s1_3_87"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v6', 'flex_13', "s3_87");
	      submitSlideEnter('s3_87', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_87');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_88 = {
	    elements: {
	      painContent: "#s1_3_88"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v7', 'flex_14', "s3_88");
	      submitSlideEnter('s3_88', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_88');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_89 = {
	    elements: {
	      painContent: "#s1_3_89"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Flex");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.bgStyle('flex', 'Flex_', 141);
	      presentetion.prev('flex_v7', 'flex_14', "s3_89");
	      submitSlideEnter('s3_89', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_89');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_9 = {
	    elements: {
	      painContent: "#s1_3_9"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('flex', 'flex_2', "s3_9");
	      submitSlideEnter('s3_9', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_9');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_90 = {
	    elements: {
	      painContent: "#s1_3_90"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_90");
	      submitSlideEnter('s3_90', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_90');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_91 = {
	    elements: {
	      painContent: "#s1_3_91"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_91");
	      submitSlideEnter('s3_91', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_91');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_92 = {
	    elements: {
	      painContent: "#s1_3_92"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_92");
	      submitSlideEnter('s3_92', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_92');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_93 = {
	    elements: {
	      painContent: "#s1_3_93"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_93");
	      submitSlideEnter('s3_93', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_93');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_94 = {
	    elements: {
	      painContent: "#s1_3_94"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_94");
	      submitSlideEnter('s3_94', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_94');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_95 = {
	    elements: {
	      painContent: "#s1_3_95"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_95");
	      submitSlideEnter('s3_95', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_95');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_96 = {
	    elements: {
	      painContent: "#s1_3_96"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_96");
	      submitSlideEnter('s3_96', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_96');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_97 = {
	    elements: {
	      painContent: "#s1_3_97"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_97");
	      submitSlideEnter('s3_97', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_97');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_98 = {
	    elements: {
	      painContent: "#s1_3_98"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_98");
	      submitSlideEnter('s3_98', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_98');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s3_99 = {
	    elements: {
	      painContent: "#s1_3_99"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('flex_v7', 'flex_14', "s3_99");
	      submitSlideEnter('s3_99', '2', 2, '2', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s3_99');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_1 = {
	    elements: {
	      painContent: "#s4_1_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_1");
	      presentetion.bgStyle('mir', 'bg_s4_', 43);
	      presentetion.prev('mir', 'mir_1', "s4_1");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_1');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_10 = {
	    elements: {
	      painContent: "#s4_10_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('mir', 'mir_4', "s4_10");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_10');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_11 = {
	    elements: {
	      painContent: "#s4_11_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_5");
	      presentetion.prev('mir', 'mir_5', "s4_11");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_11');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_12 = {
	    elements: {
	      painContent: "#s4_12_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_5");
	      presentetion.prev('mir', 'mir_5', "s4_12");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_12');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_13 = {
	    elements: {
	      painContent: "#s4_13_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_5");
	      presentetion.prev('mir', 'mir_5', "s4_13");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_13');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_14 = {
	    elements: {
	      painContent: "#s4_14_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_5");
	      presentetion.prev('mir', 'mir_5', "s4_14");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_14');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_15 = {
	    elements: {
	      painContent: "#s4_15_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_5");
	      presentetion.prev('mir', 'mir_5', "s4_15");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_15');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_16 = {
	    elements: {
	      painContent: "#s4_16_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_5");
	      presentetion.prev('mir', 'mir_5', "s4_16");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_16');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_17 = {
	    elements: {
	      painContent: "#s4_17_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_6");
	      presentetion.prev('mir', 'mir_6', "s4_17");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_17');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_18 = {
	    elements: {
	      painContent: "#s4_18_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_6");
	      presentetion.prev('mir', 'mir_6', "s4_18");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_18');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_19 = {
	    elements: {
	      painContent: "#s4_19_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_6");
	      presentetion.prev('mir', 'mir_6', "s4_19");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_19');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_2 = {
	    elements: {
	      painContent: "#s4_2_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('mir', 'mir_2', "s4_2");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_2');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_20 = {
	    elements: {
	      painContent: "#s4_20_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_6");
	      presentetion.prev('mir', 'mir_6', "s4_20");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_20');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_21 = {
	    elements: {
	      painContent: "#s4_21_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_21");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_21');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_22 = {
	    elements: {
	      painContent: "#s4_22_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_22");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_22');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_23 = {
	    elements: {
	      painContent: "#s4_23_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_23");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_23');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_24 = {
	    elements: {
	      painContent: "#s4_24_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_24");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_24');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_25 = {
	    elements: {
	      painContent: "#s4_25_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_25");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_25');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_26 = {
	    elements: {
	      painContent: "#s4_26_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_26");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_26');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_27 = {
	    elements: {
	      painContent: "#s4_27_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_27");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_27');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_28 = {
	    elements: {
	      painContent: "#s4_28_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_28");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_28');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_29 = {
	    elements: {
	      painContent: "#s4_29_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_29");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_29');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_3 = {
	    elements: {
	      painContent: "#s4_3_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_2");
	      presentetion.prev('mir', 'mir_2', "s4_3");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_3');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_30 = {
	    elements: {
	      painContent: "#s4_30_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_30");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_30');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_31 = {
	    elements: {
	      painContent: "#s4_31_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_31");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_31');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_32 = {
	    elements: {
	      painContent: "#s4_32_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_32");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_32');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_33 = {
	    elements: {
	      painContent: "#s4_33_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_33");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_33');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_34 = {
	    elements: {
	      painContent: "#s4_34_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_34");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_34');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_35 = {
	    elements: {
	      painContent: "#s4_35_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_7");
	      presentetion.prev('mir', 'mir_7', "s4_35");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_35');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_36 = {
	    elements: {
	      painContent: "#s4_36_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_8");
	      presentetion.prev('mir', 'mir_8', "s4_36");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_36');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_37 = {
	    elements: {
	      painContent: "#s4_37_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_8");
	      presentetion.prev('mir', 'mir_8', "s4_37");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_37');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_38 = {
	    elements: {
	      painContent: "#s4_38_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_8");
	      presentetion.prev('mir', 'mir_8', "s4_38");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_38');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_39 = {
	    elements: {
	      painContent: "#s4_39_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_8");
	      presentetion.prev('mir', 'mir_8', "s4_39");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_39');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_4 = {
	    elements: {
	      painContent: "#s4_4_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_3");
	      presentetion.prev('mir', 'mir_3', "s4_4");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_4');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_40 = {
	    elements: {
	      painContent: "#s4_40_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_8");
	      presentetion.prev('mir', 'mir_8', "s4_40");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_40');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_41 = {
	    elements: {
	      painContent: "#s4_41_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_8");
	      presentetion.prev('mir', 'mir_8', "s4_41");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_41');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_42 = {
	    elements: {
	      painContent: "#s4_42_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_9");
	      presentetion.prev('mir', 'mir_9', "s4_42");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_42');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_43 = {
	    elements: {
	      painContent: "#s4_43_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_10");
	      presentetion.prev('mir', 'mir_10', "s4_43");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_43');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_5 = {
	    elements: {
	      painContent: "#s4_5_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('mir', 'mir_4', "s4_5");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_5');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_6 = {
	    elements: {
	      painContent: "#s4_6_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('mir', 'mir_4', "s4_6");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_6');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_7 = {
	    elements: {
	      painContent: "#s4_7_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('mir', 'mir_4', "s4_7");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_7');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_8 = {
	    elements: {
	      painContent: "#s4_8_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('mir', 'mir_4', "s4_8");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_8');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s4_9 = {
	    elements: {
	      painContent: "#s4_9_2"
	    },
	    onEnter: function(slideElement) {
	      app.menu.show();
	      util.addClass(slide.element.painContent, 'active');
	      presentetion.menuTop("Mir");
	      presentetion.menuTopSelected("menu_top_4");
	      presentetion.prev('mir', 'mir_4', "s4_9");
	      //submitSlideEnter('s1_1', '1', 1, '1', 'A WH_Beauty_1_cycle_2015');
	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s4_9');


	    }
	  }

	});









	document.addEventListener('presentationInit', function() {
	  var slide = app.slide.s9_1 = {
	    elements: {
	      painContent: "#s1_9_1"
	    },
	    onEnter: function(slideElement) {
	      //app.menu.hide();
	      util.addClass(slide.element.painContent, 'active');
	      //submitSlideEnter('slideId', 'slideName', slideIndex, 'parentName', 'grandparentName');
	      submitSlideEnter('s9_1', 'Оглавление', 9, '9', 'A WH_Beauty_1_cycle_2015');

	      popups();

	    },
	    onExit: function(slideElement) {
	      submitSlideExit('s9_1');
	    }
	  }

	});
