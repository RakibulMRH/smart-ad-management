import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { CreateTextDto } from './dto/create-text.dto';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('generate')
  @HttpCode(HttpStatus.OK)
  async generate(@Body() createTextDto: CreateTextDto) {
    return { response: await this.openaiService.generateText(createTextDto.prompt) };
  }
}