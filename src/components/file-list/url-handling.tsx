const API_STRING = 'http://localhost:5000/filelist';
const LOCAL_STRING = 'file-list';

export class UrlHandling {

    static constructApiQueryString(query : string, page : number) {
        const args = [
            query === "" ? "" : ("query=" + query),
            page === 1 ? "" : ("page=" + page)
        ].filter(x => x !== "")
        return API_STRING + (args.length === 0 ? "" : "?" + args.reduce((x, y) => x + "&" + y));
    }

    static constructLocalQueryString(query : string, page : number, selected : number) {
        const args = [
            query === "" ? "" : ("query=" + query),
            page === 1 ? "" : ("page=" + page),
            selected === 0 ? "" : ("selected=" + selected)
        ].filter(x => x !== "")
        return LOCAL_STRING + (args.length === 0 ? "" : "?" + args.reduce((x, y) => x + "&" + y));
    }

    static incompleteLocalQueryString(query : string, page : number) {
        const args = [
            query === "" ? "" : ("query=" + query),
            page === 1 ? "" : ("page=" + page),
            "selected="
        ].filter(x => x !== "")
        return LOCAL_STRING + (args.length === 0 ? "" : "?" + args.reduce((x, y) => x + "&" + y));
    }
}

export default UrlHandling;
