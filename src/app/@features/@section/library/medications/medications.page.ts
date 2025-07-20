import { Component, OnInit, inject } from '@angular/core';

import { DataService          } from 'nv@services/data.service';
import { DialogService        } from 'nv@services/dialog.service';

import { SelectCategoryModal  } from './@modal/select-category/select-category.component';
import { DrugInfoModal        } from './@modal/drug-info/drug-info.component';

import { ModalController } from '@ionic/angular';
import { AddMedicationModalComponent } from './@modal/add-medication/add-medication.component'; // Adjust path as needed

@Component({
  selector    : 'page-collection',
  templateUrl : './medications.page.html',
  styleUrl    : './medications.page.scss'
})
export class MedicationsPage implements OnInit {

  private $dataService: DataService     = inject(DataService);
  private dialogService: DialogService  = inject(DialogService);

  public $collection: any           = [];
  private $selectedCategories: any  = [];
  private activeFilter: string      = 'title';

  public ngOnInit(): void {
        this.$collection = this.$dataService.$medicine().getAll();
  }

  /**
   *
   * @param searchItem
   */
  public onItemSearched(searchValue: string) {
    this.processfilterItemCollection(searchValue);
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onSelectCard($event: any) {

    (await this.dialogService.open(DrugInfoModal, {
      selectedObject: $event
    }));
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onFilter($event: any) {

    (await this.dialogService.open(SelectCategoryModal)).whenConfirmed((collection: any) => {

      this.$selectedCategories = collection.selectedCategory;
      this.activeFilter        = collection.searchCriteria
      this.processGetItemCollection();
    });
  }

  /**
   * @author Mihail Petrov
   */
  private processGetItemCollection() {

this.$collection = this.$dataService.$medicine()
                      .filterByCategory(this.$selectedCategories)
                      .get();
  }

  /**
   * @author Mihail Petrov
   * @param filterValue
   */
  private processfilterItemCollection(filterValue: string) {

    this.$collection = this.$dataService.$medicine()
                      .filterByCategory(this.$selectedCategories)
                      .filterByTitle(filterValue)
                      // .filterByPrimary(this.activeFilter, filterValue)
                      .get();
  }


  constructor(private modalCtrl: ModalController) {}

  async onAddMedication() {
    const modal = await this.modalCtrl.create({
      component: AddMedicationModalComponent
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      // Save the new medication (add to your collection or send to backend)
      this.$collection.push(data); // if it's an array, or update the source
    }
  }

  medicationTypes = [
    { label: 'Дихателна система',        value: 'respiratory' },
    { label: 'Стомашно-чревна система',  value: 'gastrointestinal' },
    { label: 'Сърдечно-съдова система',  value: 'cardiovascular' },
    { label: 'Отделителна система',      value: 'urogenital' },
    { label: 'Нервна система',           value: 'nervous' },
    { label: 'Очни',                     value: 'eyes' },
    { label: 'Ушни',                     value: 'ears' },
    { label: 'Кожа',                     value: 'skin' },
    { label: 'Антибиотици',              value: 'antibiotics' },
    { label: 'Антипаразитни',            value: 'antiparasitic' },
    { label: 'Ендокринна система',       value: 'endocrine' },
    { label: 'Противовъзпалителни',      value: 'antiinflammatory' },
    { label: 'Други',                    value: 'others' }
  ];

}
