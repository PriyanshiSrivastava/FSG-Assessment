# A book buying store

Simple nodejs functions for crud operations using Expressjs . Basic ejs files are added from list and checkout, refer to postman collection for testing of cruds . For payment Paypal rest api's are added refer to https://developer.paypal.com/api/rest

## Setup
 - Install  `node`, `npm`
 - Run the following commands

```sh
# Install dependencies
$ npm install
$ npx sequelize-cli db:migrate
# Export Env variable
$ export SUCCESS_URL=http://localhost:5000/checkout/successful, CANCEL_URL=http://localhost:5000, CLIENT_ID=testcred , CLIENT_SECRET=testcecret

```

## Running
 - Make a POST APIs call with the API URL returned.
 - Refer to postman collection in the codebase with the file under postman_collection folder
 
## Contributors
[Priyanshi Srivastav](https://www.linkedin.com/in/vikas-patidar-0106/)

## License

Built under [MIT](http://www.opensource.org/licenses/mit-license.php) license.

