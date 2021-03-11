import { ApiProperty } from '@nestjs/swagger';

export class SignTypeDto {
  @ApiProperty({
    example: 'A',
    description: '정상출근',
  })
  public working_code: string;
}
