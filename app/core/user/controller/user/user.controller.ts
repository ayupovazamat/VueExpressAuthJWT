import {Controller, Get, Post} from '@nestjs/common';
import {Body} from '@nestjs/common/decorators/http/route-params.decorator';
import {UserDto} from 'app/core/user/dto/user.dto';
import {UserService} from 'app/core/user/service/user/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post()
    create(@Body() user: UserDto): Promise<UserDto> {
        return this.userService.create(user);
    }

    @Get()
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }
}
