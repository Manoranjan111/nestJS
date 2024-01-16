import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';

import { Request, Response } from 'express';

import { SignupUserDto, LoginUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
// IF WE USE TO GAURD ALL ROUTES
// @UseGuards(AuthGuard)
export class UsersController {

    constructor(private userService: UsersService){};

    @Get()
    // getUsers(){ 
    //     return { username:'kanan', email:'kanan@gmail.com' };
    // }
    // IF WE USE TO SPECIFIC ROUTES FOR GAURDS
    @UseGuards(AuthGuard)
    getUsers(){
        return this.userService.fetchUsers();
    }


    // EXPRESS OLD WAY
    @Post()
    createUserExpress(@Req() request: Request, @Res() response: Response) {
        response.send(request.body);
    }

    //NEST WAY TO FETHC DATA FROM BODY


    // ##############################  SIGNUP USER  #############################
    // First API Route no Login Require

    @UsePipes(new ValidationPipe())
    @Post('signup')
    createUser( @Body() userData: SignupUserDto){
        // return (userData);
        return this.userService.createUser(userData);
    }


    // ##############################  lOGIN USER  #############################
    // Second API Route no Login Require

    @UsePipes(new ValidationPipe())
    @Post('login')
    loginUser( @Body() userData: LoginUserDto){
        return (userData);
    }

    // CHECK INPUT PARAMETER IS NUMERIC OR STRING
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number){
        return (id);
    }

    //QUERY PARAMETER IS NUMERIC OR STRING
    @Get()
    getUserById1(@Query('sort', ParseIntPipe) sort: number){
        return({username:"kanan", email:"kanan@gmail.com"});
    }
}
