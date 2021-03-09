import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'momo@aiskorea.co.kr',
    description: '이메일',
  })
  public email: string;

  @ApiProperty({
    example: 'Momo',
    description: '닉네임',
  })
  public nickname: string;

  @ApiProperty({
    example: '1234',
    description: '비밀번호',
  })
  public password: string;
}
