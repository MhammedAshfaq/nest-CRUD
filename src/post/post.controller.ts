import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly podtService: PostService) {}

  @Get()
  async GetMany() {
    const data = await this.podtService.getMany();
    if (data) {
      return {
        success: true,
        data: data,
      }
    }
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): {} {
    return this.podtService.getOne(id);
  }

  //Create route
  @Post('create')
  createOne(@Body() createPostDto: CreatePostDto) {
    return this.podtService.createOne(createPostDto);
  }

  //Edit route
  @Put('update/:id')
  editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() editPostDto: EditPostDto,
  ) {
    return this.podtService.editOne(id, editPostDto);
  }

  //Delete route
  @Delete('delete/:id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.podtService.deleteOne(id);
    
  }
}
