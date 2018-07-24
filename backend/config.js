const config = {
    dbUri: "mongodb://localhost:27017/mern-test",
    backendUri: "http://localhost:3001/"
}

export const getConfig = key => config[key];