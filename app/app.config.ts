import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  static avantlinkInfo = {
    'avantlinkApi' : '226e6961-5cd8-11e6-9168-0a5449992ecf',
    'avantlinkApiUrl' : 'http://homework.avantlink.com/tasks'
  }
  public getAvantlinkApi(): string {
    return Config.avantlinkInfo.avantlinkApi;
  }
  public getAvantLinkUrl(): string {
    return Config.avantlinkInfo.avantlinkApiUrl;
  }
};
