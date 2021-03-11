import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApplyTypeDto } from './dto/apply.type.dto';

@ApiTags('APPLY')
@Controller('api/apply')
export class ApplyController {
  @ApiOperation({ summary: '근태신청하기' })
  @Post()
  async apply(@Body() data: ApplyTypeDto) {}
}
