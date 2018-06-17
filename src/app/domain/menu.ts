export class Menu {
    private _id: string;
    private _label: string;
    private _url: string;
    private _active: string;

    constructor(id:string, label: string, url: string) {
        this._id = id;
        this._label = label;
        this._url = url;
        this._active = '';
    }

    get id() : string {
        return this._id;
    }

    get label() : string {
        return this._label;
    }

    get url() : string {
        return this._url;
    }

    get active() : string {
        return this._active;
    }

    set active(active: string) {
        this._active = active;
    }

    // Usar este método somente com o primeiro elemento de menu que estará ativo.
    isActive() : Menu {
        this._active = 'active';
        return this;
    }

}
