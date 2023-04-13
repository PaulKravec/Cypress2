describe('user store API', () => {
    it.only('create user', () => {
        cy.request(
            {
                url: 'https://petstore.swagger.io/v2/user',
                body: {
                    id: 1312,
                    username: "Petr",
                    firstName: "Petrovich",
                    lastName: "Petrov",
                    email: "petrpetrov@gmail.com",
                    password: "petryha1312",
                    phone: "+79850823364",
                    userStatus: 1
                },
                method :'POST' 
            }
        ).then((result) => {
            expect(result.status).is.equal(200);
        }); 
    });
    it.only('get user', () => {
        cy.request(
            {
                url: 'https://petstore.swagger.io/v2/user/Petr',
                body: {
                    id: 1312,
                    username: "Petr",
                    firstName: "Petrovich",
                    lastName: "Petrov",
                    email: "petrpetrov@gmail.com",
                    password: "petryha1312",
                    phone: "+79850823364",
                    userStatus: 1
                },
                method:'GET'
            }
        ).then((result) =>{
            expect(result.status).is.equal(200);
        });
    });
    it.only('put user', () => {
        cy.request({
            url: 'https://petstore.swagger.io/v2/user/Petr',
            body: {
                id: 1312,
                username: "Ivan",
                firstName: "Ivanovich",
                lastName: "Ivanov",
                email: "petrpetrov@gmail.com",
                password: "petryha1312",
                phone: "+79850823364",
                userStatus: 1
            },
            method:'PUT'
        }).then((result) => {
            expect(result.status).is.equal(200);
        });
    });
    it.only('delete user', () => {
        cy.request({
            url: 'https://petstore.swagger.io/v2/user/Ivan',
            method:'DELETE'
        }).then((result) => {
            expect(result.status).is.equal(200);
        });
    });
});