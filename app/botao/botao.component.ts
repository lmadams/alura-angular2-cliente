import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent implements OnInit {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Input() confirmacao: boolean = false;
    @Output() acao = new EventEmitter();


    constructor() { }

    ngOnInit() { }

    executaAcao() {
        if (this.confirmacao) {
            if (confirm('Deseja ecluir?')) {
                this.acao.emit(null);
            }
            return;
        }
        this.acao.emit(null);
    }

}