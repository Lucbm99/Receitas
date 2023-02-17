import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detalhes-receitas',
  templateUrl: './modal-detalhes-receitas.component.html',
  styleUrls: ['./modal-detalhes-receitas.component.scss']
})
export class ModalDetalhesReceitasComponent {
  public detalhesReceita; 

  constructor(
    public matDialogRef: MatDialogRef<ModalDetalhesReceitasComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.detalhesReceita = data;
    console.log(this.detalhesReceita);
  }

  ngOnInit(): void {
  }

  fecharModalReceitas(): void {
    this.matDialogRef.close();
  }
}
