import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar',length:40 })
  title!: string;

  @Column({ type: 'text', nullable: false })
  slug!: string;

  @Column({ type: 'text' })
  excerpt?: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'text', nullable: true })
  category: string;

  @Column({ type: 'simple-array' })
  tags: string[];

  @Column({ type: 'bool' })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
