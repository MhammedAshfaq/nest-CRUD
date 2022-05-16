import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Post } from './entities';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  async getMany(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getOne(id: number) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException('Post dose not exist');
    return post;
  }

  async createOne(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto as any);
    return await this.postRepository.save(post);
  }

  async editOne(id: number, editPostDto: EditPostDto) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException('Post not Fount'); 

    const editedPost = Object.assign(post,editPostDto) ;
    return await this.postRepository.save(editedPost)
  }

  async deleteOne(id: number) {
    return await this.postRepository.delete(id);
  }
}
