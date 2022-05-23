import { makeAutoObservable } from "mobx"

export default class busRoutes {
	constructor() {
		this._buses = []

		makeAutoObservable(this)
	}

	setBuses(buses) {
		this._buses = buses
	}

	setBus(bus) {
		this._buses = buses
	}
	setDriver(driver) {
		this._drivers = driver
	}

	get Route() {
		return this._route
	}
	get Driver() {
		return this._drivers
	}
}