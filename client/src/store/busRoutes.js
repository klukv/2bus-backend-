import { makeAutoObservable } from "mobx"

export default class BusRoutes {
	constructor() {
		this._buses = []
		this._models = []
		makeAutoObservable(this)
	}
	setModel(models) {
		this._models = models
	}

	setBuses(buses) {
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
	get Models() {
		return this._models
	}
}