import { NotFoundError, JsonController, Get, Put, Param, Body, Post, HttpCode } from 'routing-controllers'
import Game from './entity'
import { GameChanged } from './entity'


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
        const defaultBoard = [
            ['o', 'o', 'o'],
            ['o', 'o', 'o'],
            ['o', 'o', 'o']
        ]

        const colorArr = ['red', 'blue', 'green', 'yellow', 'magenta']
        const { color, ...rest } = game
        const entity = Game.create(rest)
        await entity.setRandomColor(colorArr)
              entity.setDefaultBoard(defaultBoard)
        return entity.save()
    }

    @Put('/games/:id')
    async updateGame(
        @Param('id') id: number,
        @Body() update: GameChanged
    ) {
        const game = await Game.findOne(id)
        if (!game) 
        throw new NotFoundError('Cannot find game')
        return Game.merge(game, update).save()
    }

}