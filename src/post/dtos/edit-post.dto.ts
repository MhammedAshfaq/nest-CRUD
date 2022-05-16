import { CreatePostDto } from './create-post.dto';
import { PartialType,OmitType } from '@nestjs/mapped-types';

//This is edit datahandler  

export class EditPostDto extends PartialType(
    OmitType(CreatePostDto,[])
) {}
