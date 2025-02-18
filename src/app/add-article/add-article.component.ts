import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';
import { Article, Provider } from '../Models';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-article',
  standalone: false,
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit{

  providers: Provider[] = [];
  constructor(private serviceProvider: ProviderService, private router: Router, private serviceArticle:ArticleService) {
  }

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders() {
    this.serviceProvider.getAllProviders().subscribe(
      (data) => {
        //console.log(data)
        this.providers = data;
        //console.log(this.employers)
      }
    );
  }
  ajouterArticleBD(articleForm:any){
    //console.log(articleForm)

    let article: Article = {
      "label": articleForm.label,
      "picture": articleForm.picture,
      "price": articleForm.price
    }

    this.serviceArticle.saveArticle(article, articleForm.idProvider).subscribe(
      data => {//console.log("Saved") 
        this.router.navigate(["/listArticles"]);
      }
    );
  }
}
