const { GetObjectCommand, S3Client} = require( "@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { accessKeyId,secretAccessKey }= require( "../vars");

const s3Client = new S3Client({
    region: "us-east-1",
    credentials: {
        
        accessKeyId: accessKeyId,
        secretAccessKey:secretAccessKey
    }
});

async function getObjectURL(key) {
    const command = new GetObjectCommand({
        Bucket: "bucket.nishantattrey.dev",
        Key: key
    });

    const response = await s3Client.send(command);
    return response.Body;



    // const command1 = new GetObjectCommand({
    //     Bucket: "bucket.nishantattrey.dev",
    //     Key:key
    // })
    // const response1 = await getSignedUrl(s3Client, command1);
    // return response1;
}

async function init() { 
    const res = await getObjectURL("jet.jpeg")
    console.log(res);
}

init();