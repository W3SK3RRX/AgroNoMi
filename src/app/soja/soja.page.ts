import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-soja',
  templateUrl: './soja.page.html',
  styleUrls: ['./soja.page.scss'],
})
export class SojaPage implements OnInit {
  qtd_plantas_10: number;
  dist_med_planta: number;
  qtd_med_grao: number;
  peso_1_grao: number;
  resultado: number;

  constructor(private alertController: AlertController) {
    
   }

  ngOnInit() {
  }
 
   async calcularEstimativaProducao() {
    // Etapa 1: Contar quantas plantas existem em 10 metros lineares e medir a distância média entre uma planta e outra
    const quantidadePlantas10M = this.qtd_plantas_10;
    const distanciaMediaCM = this.dist_med_planta;
    
    // Cálculo 1: Metros lineares por hectare
    const metrosLinearesHectare = 10000 / (distanciaMediaCM / 100);
    
    // Cálculo 2: Quantidade de plantas por hectare
    const quantidadePlantasHectare = quantidadePlantas10M * metrosLinearesHectare;
    
    // Etapa 2: Coletar 10 plantas e contar o número de grãos, e informar o peso de mil grãos
    const quantidadeGraos10Plantas = this.qtd_med_grao;
    const peso1GraoGramas = this.peso_1_grao;
    
    // Cálculo 1: Número de grãos por planta
    const numeroGraosPlanta = quantidadeGraos10Plantas / 10;
    
    // Cálculo 2: Estimativa do peso de mil grãos em gramas
    const pesoMilGraosGramas = peso1GraoGramas * 1000;
    
    // Cálculo 3: Peso de grãos por planta
    const pesoGraosPlanta = (numeroGraosPlanta * pesoMilGraosGramas) / 1000;
    
    // Etapa 3: Estimar a quantidade de sacas por hectare
    const quantidadeSacasHectare = (pesoGraosPlanta * quantidadePlantasHectare) / 60000;
    
    this.resultado = parseFloat(quantidadeSacasHectare.toFixed(1));

    /*const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'Sua Produção será de aproximadamente: ' + quantidadeSacasHectare + ' Sacas/H',
      buttons: ['OK'],
    });
    await alert.present();*/

  }
  

}
