import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { SurveyChartResult } from 'src/app/models/musicfav.model';

import { SurveyChartService } from 'src/app/services/surveychart.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
})
export class ResultComponent {

  public data!:Array<SurveyChartResult>;
  public title = "Resultados";

  view: [number,number] = [950, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  showXAxisLabel = true;
  xAxisLabel = 'Estilos Musicales';
  showYAxisLabel = true;
  yAxisLabel = 'Encuestas Realizadas';

  colorScheme:Color = {
    name: '',
    selectable: false,
    domain: ['#0d6efd','#6610f2', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107'],
    group: ScaleType.Time
  };

  constructor(
    private location:Location,
    private _surveyChartService:SurveyChartService
  ) {
    this.getDataChart();
  }

  onSelect(event:any) {

  }

  private getDataChart() {
    this._surveyChartService.getChart().subscribe((response) => {
      if(response.length > 0) {
        this.data = response;
        Object.assign(this,this.data);
      }
    })
  }

  back() {
    this.location.back();
  }
 
}
