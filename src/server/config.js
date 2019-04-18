export default {
    port: process.env.PORT || 9090,
    host: process.env.HOST || '0.0.0.0',

    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    }
};
