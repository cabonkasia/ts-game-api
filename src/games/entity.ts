import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsIn } from 'class-validator'


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

  setDefaultBoard(arr: string[][]) {
    this.board = JSON.parse(JSON.stringify(arr))
  }
}

export class GameChanged extends BaseEntity {

  @Column('text', {nullable:true})
  name?: string

  @IsIn(['red', 'blue', 'green', 'yellow', 'magenta'])
  @Column('text', {nullable:true})
  color?: string

  @Column('json', {nullable:true})
  board?: JSON
}