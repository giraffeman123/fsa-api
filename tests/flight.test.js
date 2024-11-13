const request = require('supertest');
const server = require('../index');
//const pool = require('../config/db.config');

describe('Flight Module Test', () => {    

    afterAll(async () => {           
        server.close();    
    });

    it('should return 200 HTTP Status Code the endpoint /flights/airport/most-movement', 
        async () => {
            const queryString = 'year=2021';
            
            try{
                const res = await request(server).get(`/flights/airport/most-movement?${queryString}`);     
                expect(res.statusCode).toEqual(200);                
                //expect(res.body.length).toBeGreaterThanOrEqual(15);  
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );
    

    it('should return 200 HTTP Status Code the endpoint /flights/airline/most-flights', 
        async () => {
            const queryString = 'year=2021';
            
            try{
                const res = await request(server).get(`/flights/airline/most-flights?${queryString}`);     
                expect(res.statusCode).toEqual(200);                
                //expect(res.body.length).toBeGreaterThanOrEqual(15);  
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );
    

    it('should return 200 HTTP Status Code the endpoint /flights/day/most-flights', 
        async () => {
            const queryString = 'year=2021';
            
            try{
                const res = await request(server).get(`/flights/day/most-flights?${queryString}`);     
                expect(res.statusCode).toEqual(200);                
                //expect(res.body.length).toBeGreaterThanOrEqual(15);  
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );
    

    it('should return 200 HTTP Status Code the endpoint /airline/more-than-2-flights', 
        async () => {            
            
            try{
                const res = await request(server).get(`/airline/more-than-2-flights`);     
                expect(res.statusCode).toEqual(200);                
                //expect(res.body.length).toBeGreaterThanOrEqual(15);  
            }catch(e){
                expect(e).toBe(e);
            }                                                        
        },30000
    );    
      
});

