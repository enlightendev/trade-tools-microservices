export class WatchList {

    public id:string;

    constructor(public name:string, public type:string){

    }

    setId(id:string) {
        if (id)
            this.id = id;
        return this;
    }

    toJSON() {

        var json = {
            id: this.id || undefined,
            name: this.name,
            type: this.type
        };

        return JSON.stringify(json);
    }

    static fromJSON(json:any) {
        if (json) {

            var id:string = json.id || null;
            var name:string = json.name || null;
            var type:string = json.type || null;

            var watchlist:WatchList = new WatchList(name, type);
            if(id)
                watchlist.setId(id);

            return watchlist;

        } else {
            //TODO: validate the change
            return null;
            //return new Template(null, null, null, null, null);
        }
    }

}