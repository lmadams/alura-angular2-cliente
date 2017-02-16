import {Component, Input} from "@angular/core";

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html',
    moduleId: module.id
})
export class FotoComponent {

    @Input() titulo;
    @Input() url;

}