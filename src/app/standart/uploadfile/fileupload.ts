export class Fileupload {
    constructor(
        public file,
        public name: string = '',
        public format : string = '',
        public url,
        public nameupload : string = '',
        public type : File = null,


    ) { }
}