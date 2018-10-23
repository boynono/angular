import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = "Jenis Kategori";
  business = 'Create';
  modalRef: BsModalRef;
  categories = [];
  category: Category = new Category();

  constructor(private categoryService: CategoryService, private modalService: BsModalService) { }

  ngOnInit() {
    this.get();
  }
  onCreate(template: TemplateRef<any>) {
    this.business = 'Create';
    //clear value tiap kali submit
    this.category = new Category();
    //show popup
    this.modalRef = this.modalService.show(template);
    // console.log("create new category");
  }
  get() {
    this.categoryService.get()
      .subscribe((data: any) => {
        // console.log(data);
        this.categories = data;
      }, (err) => {
        console.log(err);
      }, () => {
        console.log('Category Loaded');
      }
      );
  }
  onEdit(id: String, template: TemplateRef<any>) {
    this.business = 'Edit';
    this.categoryService.getById(id)
    .subscribe((data: Category) => {
      this.category = data;
    }, (err) => {
      console.log(err);
    }, () => {
      this.modalRef = this.modalService.show(template);
    }
    );
  }
  onDelete(id: String, template: TemplateRef<any>) {
    this.business = 'Delete';
    this.categoryService.getById(id)
    .subscribe((data: Category) => {
      this.category = data;
    }, (err) => {
      console.log(err);
    }, () => {
      this.modalRef = this.modalService.show(template);
    }
    );
  }
  onSubmit() {
    // console.log(this.category);
    if (this.business == 'Create') {
      this.categoryService.create(this.category)
        .subscribe(data => {
          // console.log(data);
          this.modalRef.hide();
        }, (err) => {
          console.log(err);
        }, () => {
          this.get();
        }
        );
    } else if (this.business == 'Edit') {
      this.categoryService.update(this.category)
        .subscribe(data => {
          // console.log(data);
          this.modalRef.hide();
        }, (err) => {
          console.log(err);
        }, () => {
          this.get();
        }
        );
    } else if (this.business == 'Delete') {
      this.categoryService.delete(this.category._id)
        .subscribe(data => {
          // console.log(data);
          this.modalRef.hide();
        }, (err) => {
          console.log(err);
        }, () => {
          this.get();
        }
        );
    }
  }

}
