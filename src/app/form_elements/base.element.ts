
interface FormElementInterface{

    disabled:boolean;
    value:any;
    readonly:boolean;
    maxlength:any;
    minlength:any;
    title:string;
    name:string;
    id:string;
    class:string;
    required:boolean;

}

export class FormElement implements FormElementInterface{

    disabled:boolean;
    value:any;
    readonly:boolean;
    maxlength:any;
    minlength:any;
    title:string;
    name:string;
    id:string;
    class:string;
    required:boolean

    constructor(){

        this.disabled = false;
        this.value = '';
        this.readonly = false
        this.maxlength = false;
        this.minlength = false;
        this.title = '';
        this.name = '';
        this.id = '';
        this.class = '';
        this.required = false;
    }

    isDisabled(disabled:boolean){

        if(typeof disabled == "boolean"){
            this.disabled = disabled
        }
        console.log(this.disabled);
        return this.disabled;
    }
}