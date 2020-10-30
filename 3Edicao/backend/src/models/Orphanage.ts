import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import Image from './Images';

@Entity('orphanages')
export default class Orphanage {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
    
    @Column({type: 'decimal', scale: 6, precision: 8}) 
    latitude: number;

    @Column({type: 'decimal', scale: 6, precision: 8})
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    oppening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[];
}
