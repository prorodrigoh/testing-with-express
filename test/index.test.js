import supertest from "supertest";
import app from "../index.js";

const request = supertest(app)  //supertest is used to test calls from servers

describe ("Getting pets from API", () => {
    it ("Should return all the pets I loved Before!", async () => {
        // Arrange
        const endPoint = "/pets"
        const expectedResponse = 'All the pets'

        // Act
        const actual = await request.get(endPoint) // execute a get into the endpoint

        //Assert
        expect(actual.status).toBe(200)
        expect(actual.error).toBeFalsy()
        expect(actual.text).toBe(expectedResponse) //text here is part of what the browser object returns. In this case, our message
    })
})
