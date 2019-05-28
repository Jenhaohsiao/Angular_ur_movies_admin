import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-customer',
  templateUrl: './chart-customer.component.html',
  styleUrls: ['./chart-customer.component.css']
})
export class ChartCustomerComponent implements OnInit {



  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 70], label: 'WebSite' },
    { data: [28, 48, 40, 19, 46, 67, 90], label: 'Mobile' },
    { data: [12, 10, 11, 8, 6, 3, 4], label: 'Phone Call' }
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
