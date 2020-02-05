'use strict';

class Airport {

    constructor() {
        this.hangar = [];
    }

    landed(plane) {
        this.hangar.push(plane);
        return this.hangar;
    }

    takenoff(plane) {
        this.hangar.pop(plane);
        return this.hangar;
    }
}