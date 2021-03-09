import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
  @ApiProperty({
    example: 'momo@aiskorea.co.kr',
    description: '이메일',
  })
  public email: string;

  @ApiProperty({
    example: '1234',
    description: '비밀번호',
  })
  public password: string;
}
