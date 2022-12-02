<h1 align="center">Directory Index</h1>

<p align="center">
  <b>An express node app for serving files inside a directory with api support for uploading files
  </b>
  <br>
</p>

<p align="center">
  <img width="150px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1658183164/yassi/mgkhs4y9ydmoyjyozulf.svg" align="center" alt="nodejs" />
  &nbsp; &nbsp; &nbsp;
  <img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1662120635/yassi/r923h19buxqfs5ouzzf6.svg" align="center" alt="express" />
  <br>
</p>

<br>
<br>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

## ❯ Usage

Requires Node.js 15.0 or higher download & install for [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/)

This project is using [serve-index](https://github.com/expressjs/serve-index) for serving files inside `uploads` folder

### API

You can make a `POST` request to `http://localhost:4000/api/uplaod` to upload a file.

```sh
curl -F 'file=@Desktop/test.txt' http://localhost:4000/api/upload | json_pp
```

```json
# Example response
{
   "error" : false,
   "message" : "🎉 File uploaded",
   "results" : {
      "filename" : "test-1670019263959.txt",
      "mimeType" : "text/plain",
      "originalname" : "test.txt",
      "size" : "664 Bytes"
   }
}
```

Navigate to `http://localhost:4000` to see the list of files uploaded

### Development

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

-   edit `PORT` (optional) in .env

```sh
# start the dev server
npm run dev

# format
npm run format
```

### Production

```sh
# start the production server
npm start
```

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

#### Author

**Ysn4Irix**

-   [GitHub Profile](https://github.com/Ysn4irix)
-   [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
