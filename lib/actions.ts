import { createUserMutation, getUserQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";


const apiUrl =  "https://grafbaseflexibble-main-jaiadithya.grafbase.app/graphql" ;
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTcxMzUwOTcsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFIQ0pKNFg4QTM1UFBQRjBQRDlSTTQ4UE0iLCJqdGkiOiIwMUhDSko0WE1UU0JUOVlXQkJBMVRBMURORyIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.u4cTlKUzhY75-x7v31W9tjYvMJ-ds5IUdYMq0usSHSE";
const serverUrl =  process.env.NEXT_PUBLIC_SERVER_URL;


const client= new GraphQLClient(apiUrl)

const makeGraphQLRequest = async(query: string, variables = {})=>{
    try{
        return await client.request(query, variables)
    }
    catch (error) {
        throw(error);
    }
} 
export const getUser = (email: string) => {
    client.setHeader('x-api-key', apiKey);
return makeGraphQLRequest(getUserQuery, {email})
}

export const createUser= (name:string, email:string, avatarUrl:string)=>{
    client.setHeader('x-api-key', apiKey);
    const variables={
        input: {
            name,email,avatarUrl
        }
    }
    return makeGraphQLRequest(createUserMutation, variables)
}