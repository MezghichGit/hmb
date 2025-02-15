import { Component, OnInit } from '@angular/core';
import { Post } from '../Models';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-posts',
  standalone: false,
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit{
posts:Post[]=[];
  constructor(private service:PostService){
  }

  ngOnInit(): void {
    //console.log("ngOnInit")
    this.service.getAllPosts().subscribe(
     (data) =>
        {
          this.posts = data;
        }
    );
  }
}
