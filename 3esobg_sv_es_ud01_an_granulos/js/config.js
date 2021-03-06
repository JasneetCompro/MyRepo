﻿$(document).ready(function () {
	var cfg = {
		sizeMode: 1,
		audios: [],
		autoEvaluate: true,
		platform: "SM",
		pantallaInicio: true,
		enunciado: cadenas.titulo,
		hotAreaArtEngine: { gameType: "simple"},
		backgroundImage: { id:"fondo_celula", x: 85, y: 46},
		audioOK: audios.sinAudio,
		audioKO: audios.sinAudio,
		audioClic: audios.sinAudio,
		audioFinal: audios.sinAudio,
		hotAreas: [
			{
				orderId: 0,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 168, y: 464}, { x: 296, y: 463}, { x: 298, y: 515}, { x: 168, y: 514}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 230, y: 125, width: 500, height: 350, texts: [{ value: cadenas.text_centri, x: 43, y: 41, width: 431, height: 96, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "centriolos", x: 181, y: 137 },], },
			},
			{
				orderId: 1,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 113, y: 355}, { x: 275, y: 354}, { x: 275, y: 407}, { x: 113, y: 405}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 230, y: 150, width: 500, height: 300, texts: [{ value: cadenas.text_cito, x: 44, y: 35, width: 423, height: 106, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "citoesqueleto", x: 160, y: 159 },], },
			},
			{
				orderId: 2,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 108, y: 278}, { x: 245, y: 276}, { x: 245, y: 328}, { x: 108, y: 328}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 230, y: 150, width: 500, height: 300, texts: [{ value: cadenas.text_liso, x: 32, y: 41, width: 442, height: 116, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "lisosomas", x: 203, y: 158 },], },
			},
			{
				orderId: 3,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 89, y: 113}, { x: 294, y: 112}, { x: 294, y: 164}, { x: 89, y: 163}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 230, y: 125, width: 500, height: 350, texts: [{ value: cadenas.text_golgi, x: 28, y: 32, width: 448, height: 127, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "golgi", x: 166, y: 185 },], },
			},
			{
				orderId: 4,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 728, y: 481}, { x: 874, y: 480}, { x: 875, y: 531}, { x: 728, y: 531}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 230, y: 150, width: 500, height: 300, texts: [{ value: cadenas.text_mito, x: 21, y: 29, width: 466, height: 109, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "mitocondria", x: 149, y: 150 },], },
			},
			{
				orderId: 5,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 715, y: 388}, { x: 848, y: 387}, { x: 849, y: 438}, { x: 715, y: 438}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 250, y: 149, width: 500, height: 300, texts: [{ value: cadenas.text_vacu, x: 34, y: 30, width: 439, height: 82, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "vacuolas", x: 159, y: 150 },], },
			},
			{
				orderId: 6,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 706, y: 227}, { x: 909, y: 226}, { x: 908, y: 300}, { x: 707, y: 300}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 197, y: 113, width: 550, height: 400, texts: [{ value: cadenas.text_retic, x: 39, y: 16, width: 495, height: 198, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "reticulos", x: 167, y: 205 },], },
			},
			{
				orderId: 7,
				color: "#000000",
				opacity: 0.15,
				sound: audios.sinAudio,
				points: [ { x: 699, y: 109}, { x: 840, y: 109}, { x: 840, y: 161}, { x: 699, y: 159}, ],
				hitable: true,
				hotAreaVisible: false,
				disableOnClick: false,
				popup: { x: 230, y: 125, width: 500, height: 350, texts: [{ value: cadenas.text_ribo, x: 47, y: 38, width: 423, height: 103, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [{ value: "ribosomas", x: 169, y: 158 },], },
			},
		],
		intro: { x: 285, y: 154, width:400, height: 250, buttonStart: {x:444, y:313, width:86, textId:cadenas.empezar }, texts: [{ value: cadenas.entrada, x: 57, y: 61, width: 303, height: 57, font: "normal 16px SourceSansProRegular", fontColor: "Black" },], images: [], },
		buttonShowHotAreas: {x:23, y:545, width:78, textShowId:cadenas.mostrar, textHideId:cadenas.ocultar },
		buttonRepeat: {x:862, y:544, width:75, textId:cadenas.repetir },
	};
	var engine = new sm.HotAreaArtEngine("html5Canvas", cfg, null);
	engine.run();
});
