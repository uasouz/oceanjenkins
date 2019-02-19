import {App} from "../src/app";

import * as chai from 'chai'
import {RestRouter} from "../src/rest/routes";
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
describe('Teste de api restful Node.JS em TypeScript', () => {
    let server: import("http").Server;
    let Service: App;
    console.log("Starting test");
    before((done) => {
        console.log('\nbefore');
        Service = new App();
        new RestRouter(Service.expressApp);
        server =  Service.server;
        done()
    });

    describe('/GET test', () => {
        it('Test request test', (done) => {
            //@ts-ignore
            chai.request(server).get('/api/test').end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            })
        })
    });

    describe('/GET list', () => {
        it('Test request list', (done) => {
            //@ts-ignore
            chai.request(server).get('/api/list').end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body["test"].should.be.an('array').and.contain('MICALATEIA');
                done();
            })
        })
    });


    describe('/GET sw', () => {
        it('Test request starwars', (done) => {
            //@ts-ignore
            chai.request(server).get('/api/sw').end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body["name"].should.be.a('string').and.equal('Luke Skywalker');
                done();
            })
        })
    });


    after((done) => {
        if (server) {
            server.close();
            done()
        }
    })
});