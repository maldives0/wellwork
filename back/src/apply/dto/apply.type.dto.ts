import { ApiProperty } from '@nestjs/swagger';

export class ApplyTypeDto {
  @ApiProperty({
    example: 'a',
    description: '연차',
  })
  public apply_code: string;

  @ApiProperty({
    example: '개인일정',
    description: '근태신청 사유',
  })
  public apply_reason: string;

  @ApiProperty({
    example: '2021-03-01',
    description: '근태신청 시작일',
  })
  public apply_startDate: string;

  @ApiProperty({
    example: '2021-03-01',
    description: '근태신청 종료일',
  })
  public apply_endDate: string;
}
