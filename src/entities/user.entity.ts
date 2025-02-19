import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    Entity,
    ManyToMany,
    JoinTable,
    BeforeInsert,
} from 'typeorm';
import { Property } from './property.entity';
import * as bcrypt from 'bcrypt';
import { T } from '@faker-js/faker/dist/airline-BcEu2nRk';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    avatarUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({default: '123456'})
    password: string;

    @OneToMany(() => Property, (property) => property.user)
    properties: Property[];

    @ManyToMany(() => Property, (property) => property.likedBy)
    @JoinTable({ name: 'user_liked_properties' })
    likedProperties: Property[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}
