import { NotFoundError, JsonController, Get, Put, Param, Body, Post, HttpCode } from 'routing-controllers'
import Game from './entity'


// const colorArr = ['red', 'blue', 'green', 'yellow', 'magenta']
// const randomNum = (arr: Array<string>): number => Math.floor(Math.random()*arr.length)
// const randomColor = (arr: Array<string>): string => arr[randomNum(arr)]

// const defaultBoard = [
// 	["o", "o", "o"],
// 	["o", "o", "o"],
// 	["o", "o", "o"]
// ]

// const toNewGame = (name: string): Game => {
//   return {
//             name: name,
//             color: randomColor(colorArr),
//             board: {}.parse
//   }
// }

@JsonController()
export default class GameController {

    @Get('/games')
    async allGames() {
        const games = await Game.find()
        return { games }
    }

    // @Post('/games')
    // @HttpCode(201)
    // createGame(
    //   @Param(name)
    //   @Body() game: 
    // ) {
    //     return game.save()
    // }

}