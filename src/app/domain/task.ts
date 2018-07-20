export class Task {

    private _id: number;
    private _titulo: string;
    private _status: string;
    private _descricao: string;
    private _dtCriacao: Date;
    private _dtEdicao: Date;
    private _dtConclusao: Date;

    constructor(id: number, titulo: string, status: string, descricao: string, dtCriacao: Date, dtEdicao: Date,
                dtConclusao: Date) {
        this._id = id;
        this._titulo = titulo;
        this._status = status;
        this._descricao = descricao;
        this._dtCriacao = dtCriacao;
        this._dtEdicao = dtEdicao;
        this._dtConclusao = dtConclusao;
    }

    get id() : number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get titulo() : string {
        return this._titulo;
    }

    set titulo(titulo: string ) {
        this._titulo = titulo;
    }

    get status() : string {
        return this._status;
    }

    set status(status: string) {
        this._status = status;
    }

    get descricao() : string {
        return this._descricao;
    }
    
    set descricao(descricao: string) {
        this._descricao = descricao;
    }
    
    get dtCriacao() : Date {
        return this._dtCriacao;
    }

    set dtCriacao(dtCriacao: Date) {
        this._dtCriacao = dtCriacao;
    }

    get dtEdicao() : Date {
        return this._dtEdicao;
    }

    set dtEdicao(dtEdicao: Date) {
        this._dtEdicao = dtEdicao;
    }

    get dtConclusao() : Date {
        return this._dtConclusao;
    }

    set dtConclusao(dtConclusao: Date) {
        this._dtConclusao = dtConclusao;
    }

}
