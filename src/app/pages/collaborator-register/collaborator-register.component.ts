import { Component, OnInit } from '@angular/core';
import {
  ICollaborator,
  KnowledgeArray,
  Validation,
} from 'src/app/models/collaborator.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { ToastrService } from 'ngx-toastr';
import { CpfPipe } from '../pipes/cpf.pipe';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collaborator-register',
  templateUrl: './collaborator-register.component.html',
  styleUrls: ['./collaborator-register.component.scss'],
})
export class CollaboratorRegisterComponent implements OnInit {
  public knowledgesArray = KnowledgeArray;
  public registroForm: FormGroup;
  public edit: boolean = false;
  public id: string;

  constructor(
    private collaboratorService: CollaboratorService,
    private toastr: ToastrService,
    private cpfPipe: CpfPipe,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(11),
      ]),
      knowledge: new FormControl('', Validators.required),
    });
    this.route.queryParams.subscribe((queryParams: Params) => {
      if (queryParams['id']) {
        this.edit = true;
        this.id = queryParams['id'];
        this.getCollaborator();
      }
    });
  }

  onSubmitAdd() {
    if (this.registroForm.get('knowledges')?.value.length < 3) {
      this.registroForm.get('knowledges')?.setErrors({ incorrect: true });
    }
    console.log(this.registroForm);

    if (this.registroForm.valid) {
      if (this.edit) {
        this.collaboratorService.patch(this.id).subscribe(
          () => {
            this.toastr.success('Validado com sucesso.');
          },
          (error) => {
            this.toastr.error(error);
          }
        );
      } else {
        this.registroForm.get('id')?.disable();
        this.registroForm
          .get('cpf')
          ?.setValue(
            this.cpfPipe.transform(this.registroForm.get('cpf')?.value)
          );
        this.collaboratorService.store(this.registroForm.value).subscribe(
          () => {
            this.toastr.success('Cadastrado com sucesso.');
          },
          (error) => {
            this.toastr.error(error);
          }
        );
      }
    }
  }

  getCollaborator() {
    this.collaboratorService.show(this.id).subscribe((data: ICollaborator) => {
      this.registroForm.get('id')?.setValue(data.id);
      this.registroForm.get('name')?.setValue(data.name);
      this.registroForm.get('cpf')?.setValue(data.cpf.replace(/[^0-9]/g, ''));
      this.registroForm.get('knowledge')?.setValue(data.knowledge);
      this.registroForm.get('phone')?.setValue(data.phone);
      this.registroForm.get('email')?.setValue(data.email);
    });
  }
}
