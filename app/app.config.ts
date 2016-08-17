export class Config {
    private avantLink: any;
    constructor() {
        this.avantLink = {
            'avantlinkApi': '226e6961-5cd8-11e6-9168-0a5449992ecf',
            'avantlinkApiUrl': 'http://homework.avantlink.com/tasks'
        }
    }
    public getApiUrl(): string {
        return this.avantLink.avantlinkApiUrl;
    }

    public getApiKey(): string {
        return this.avantLink.avantlinkApi;
    }
};
