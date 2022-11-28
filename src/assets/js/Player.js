export class Player {
    constructor(id, name, position, nationality) {
        this._id = id;
        this._name = name;
        this._position = position;
        this._nationality = nationality;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get nationality() {
        return this._nationality;
    }

    set nationality(value) {
        this._nationality = value;
    }
}