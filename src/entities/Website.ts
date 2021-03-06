import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Image } from "./Image";

/**
 * @Entity Website
 * Database entity
 */
@Entity()
export class Website extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @OneToMany(() => Image, (images) => images.website, { nullable: false })
  images: Image[];
}
