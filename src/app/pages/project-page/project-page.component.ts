import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.sass']
})
export class ProjectPageComponent implements OnInit {

  projectID!:string | null;
  project:any;
  projectTitle:any;
  data!: SafeHtml;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer,private router: Router, private titleService:Title) { 

  }

  ngOnInit(): void {
    this.projectID = this.route.snapshot.paramMap.get('id');
    if (this.projectID == "132project") {
        this.router.navigateByUrl('projects/132project');
    } 
    fetch('assets/data/project-info.json').then(res => res.json())
        .then(jsonData => {
            this.project = jsonData.filter((x: { [x: string]: any; }) => x['id'] == this.projectID)[0];
            if (!this.project){
                this.router.navigateByUrl('Projects');
            }
            else{
                console.log(this.project.sourceCode)
                if (this.project.sourceCode == ""){
                    this.data = "<h1 class='text_h1'>COMING SOON</h1>"
                }
                else{
                    this.data = this.sanitizer.bypassSecurityTrustHtml(this.project.sourceCode);
                };
                
                this.projectTitle = this.project.name;
                this.titleService.setTitle("Saul Fernandez " + this.project.name);
            }
        });
  }
}
