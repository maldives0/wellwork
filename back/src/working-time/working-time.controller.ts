import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignTypeDto } from './dto/sign.type.dto';

@ApiTags('WORKIMG-TIME')
@Controller('api/working-time')
export class WorkingTimeController {
  @ApiOperation({ summary: '출근하기' })
  @Post('signIn')
  async signIn() {}

  @ApiOperation({ summary: '퇴근하기' })
  @Post('signOut')
  async signOut() {}

  @ApiOperation({ summary: '출근유형' })
  @Get('signType')
  async signType(@Body() data: SignTypeDto) {}

  @ApiOperation({ summary: '야근 신청하기' })
  @Post('overtime')
  async overtime() {}
}
