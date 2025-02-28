import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
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
import { ParseIdPipe } from './pipes/parseIdpipe';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll(@Query() paginationDTO: PaginationDTO) {
    return this.propertyService.findAll(paginationDTO);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }

  @Post()
  create(
    @Body()
    dto: CreatePropertyDto,
  ) {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body()
    body: UpdatePropertyDto,
    @RequestHeader(
      new ValidationPipe({ whitelist: true, validateCustomDecorators: true }),
    )
    header: HeadersDto,
  ) {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
     this.propertyService.delete(id)
     return { message: `Property with ID ${id} deleted successfully!` };
  }
}
