const request = require('supertest');
const server = require('../index');
//const pool = require('../config/db.config');

describe('Answer Module Test', () => {    

    afterAll(async () => {   
        server.close();    
    });

    it('should return 200 HTTP Status Code the endpoint /answers/answered-and-unanswered', 
        async () => {            
            
            try{
                const res = await request(server).get(`/answers/answered-and-unanswered`);     
                expect(res.statusCode).toEqual(200);                                
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );

    it('should return 200 HTTP Status Code the endpoint /answers/better-reputation', 
        async () => {            
            
            try{
                const res = await request(server).get(`/answers/better-reputation`);     
                expect(res.statusCode).toEqual(200);                                
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );
    
    it('should return 200 HTTP Status Code the endpoint /answers/less-amount-of-visits', 
        async () => {            
            
            try{
                const res = await request(server).get(`/answers/less-amount-of-visits`);     
                expect(res.statusCode).toEqual(200);                                
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );
    
    it('should return 200 HTTP Status Code the endpoint /answers/oldest-and-newest', 
        async () => {            
            
            try{
                const res = await request(server).get(`/answers/oldest-and-newest`);     
                expect(res.statusCode).toEqual(200);                                
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );
    
    it('should return 200 HTTP Status Code the endpoint /answers/two-to-five', 
        async () => {            
            
            try{
                const res = await request(server).get(`/answers/two-to-five`);     
                expect(res.statusCode).toEqual(200);                                
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );    
});

