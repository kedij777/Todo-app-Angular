// export for declaration, only avaliable to other file
//without export, only to current file
export class TodoItem {
    // compelete's default = false
    constructor(taskVal: string, completeVal: boolean = false) {
        this.task = taskVal;
        this.complete = completeVal;
    }

    task:string;
    complete: boolean;
}
