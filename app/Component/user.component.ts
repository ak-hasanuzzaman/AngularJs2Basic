import {Component} from '@angular/core';

@Component({

    selector:`my-app1`,
    templateUrl:`./app/view/user.component.html`
})  

export class UserComponent
{
    firstname:string = "AK";
    lastname:string = "Hasan";
    gender:string="Male";
    age:number=20
}