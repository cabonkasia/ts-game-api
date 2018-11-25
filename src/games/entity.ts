import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'


@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('text', {nullable:true})
  color: string

  @Column('json', {nullable:true})
  board: JSON

  
  setRandomColor(arr: Array<string>) {
    const randomNum = (arr: Array<string>): number => Math.floor(Math.random()*arr.length)
     const randomColor = (arr: Array<string>): string => arr[randomNum(arr)]
     this.color = randomColor(arr)
  }

  // colorArr = ['red', 'blue', 'green', 'yellow', 'magenta']
  // randomNum = (arr: Array<string>): number => Math.floor(Math.random()*arr.length)
  // randomColor = (arr: Array<string>): string => arr[this.randomNum(arr)]
  // this.color = this.randomColor(this.colorArr)

}