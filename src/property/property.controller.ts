import {
    Body,
    Controller,
    Get,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return 'All properties';
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
        return id;
    }

    @Post()
    create(
        @Body()
        body: CreatePropertyDto,
    ) {
        return body;
    }

    @Patch(':id')
    update(
        @Param('id', ParseIdPipe) id,
        @Body()
        body: CreatePropertyDto,
    ) {
        return body;
    }
}
