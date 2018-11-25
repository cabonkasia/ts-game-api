import { NotFoundError, JsonController, Get, Put, Param, Body, Post, HttpCode } from 'routing-controllers'
import Game from './entity'



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

    @Post('/games')
    @HttpCode(201)
    async createGame(
      @Body() game: Game
    ) {
      const colorArr = ['red', 'blue', 'green', 'yellow', 'magenta']
      const { color, ...rest } = game
      const entity = Game.create(rest)
      await entity.setRandomColor(colorArr)
      return entity.save()
    }
  
}