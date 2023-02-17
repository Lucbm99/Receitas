import { ModalDetalhesReceitasComponent } from './modal-detalhes-receitas/modal-detalhes-receitas.component';
import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  public receitas: any;
  public nomesReceitas: string = '';
  showLoading : boolean = true;

  constructor(
    private _receitasService: ReceitasService,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._receitasService.getReceitas().subscribe((response) => {
      if (response) {
        this.showLoading = false;
      }
      this.receitas = response.slice(1, 1000)
      let remove = this.receitas.filter((value: { nome: any; }, index: any, self: any[]) =>
      index === self.findIndex((t: { nome: any }) => (
        t.nome === value.nome
      ))
    )
      console.log(remove)
    })
  }


  exibirDetalhesReceitas(receita: any) {
    const dialogRef = this._matDialog.open(ModalDetalhesReceitasComponent, {
      data: { receita },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
