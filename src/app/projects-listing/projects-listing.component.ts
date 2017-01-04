import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects-listing',
  templateUrl: './projects-listing.component.html',
  styleUrls: ['./projects-listing.component.scss']
})
export class ProjectsListingComponent implements OnInit {
    projects: Project[]

  constructor(private projectService: ProjectService) { }

  getProjects(): void {
      this.projectService.getProjects().then(projects => this.projects = projects);
      console.log(this, this.projects)
  }

  ngOnInit(): void {
      console.log( this.getProjects() );
  }

}
