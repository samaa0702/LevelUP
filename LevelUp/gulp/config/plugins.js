import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; //Проверка обновлений
import ifPlugin from "gulp-if";

export const plugins = {
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
}