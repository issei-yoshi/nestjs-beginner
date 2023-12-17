<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# NestJS入門 TypeScriptではじめるサーバーサイド開発

- メリット
    - 型の恩恵を得ることができる
    - Expressの機能やライブラリを使うことができる
    - Nest CLIを使ってPJやファイルのテンプレートを生成できる
    - テストフレームワークが標準で用意されている
- デメリット
    - 利用ユーザーが少なく情報が少ない
    - 公式ドキュメントが日本語に未対応
- Nest CLI
    - nest new pjName
    - nest g controller controllerName
- NestJSの基本要素
    - Controller
    - Service
    - Module
    - これら3つが揃って一つの機能が出来上がる
- アーキテクチャ
    - 以下の順番で呼び出される
        - アプリケーション（main.ts）
        - ルートモジュール（app.module.ts）
        - Featureモジュール（feature.module.ts）
        - Featureサービス（feature.service.ts）| Featureコントローラ（feature.controller.ts）
- Moduleとは
    - 関連するControllerやServiceなどをまとめてアプリケーションとして利用できるようにNestJSに登録する役割
    - NestJSアプリケーションには必ず1つ以上のルートモジュールと0個以上のFeatureモジュールが必要となる
    - Moduleの定義
        - classに`@Module()`デコレーターをつける
        - `@Module()`デコレーターのプロパティを記述する
            - providers: @Injectableデコレーターがついたクラスを記述
            - controllers: @Controllerデコレーターがついたクラスを記述
            - imports: モジュール内部で必要な外部モジュールを記述
            - exports: 外部のモジュールにエクスポートしたいものを記述
    - Moduleの作成
        - `nest g module items`
- Controllerとは
    - クライアントからのリクエストを受け付け、クライアントにレスポンスを返す
    - Controllerがルーティングの機能を担う
    - 特定のパスとControllerが紐づけられる（ex: /usersとUsersController）
    - HTTPメソッドとパスを指定したメソッド（ハンドラー）を定義する
    - Controllerの定義
        - classに@Controller()デコレーターをつける
            - `@Controller('users')`
        - メソッド（ハンドラー）にHTTPメソッドデコレーターをつける
            - `@Post()`
    - Controllerの作成
        - `nest g controller items`
        - テストファイルが不要なら`nest g controller items --no-spec`
        - ```
          @Controller('items')
          export class ItemsController {
            @Get()
            findAll(){
             return "This is findAll"
            }
          } 
          ```
        - これで`/items `をGetでリクエストすれば値が返ってくる
    - パスに任意の値を入れてREST APIを叩きたいときは以下のようになる
        - ```
          @Get(':id')
          findById(@Param('id') id: string): Item{
              return this.itemsService.findById(id);
          }
          ```
- Serviceとは
    - ビジネスロジックを定義する
    - Controllerから呼び出すことでユースケースを実現する
    - Controllerにビジネスロジックを書いてもプログラムは動作するが、責務ごとに分割することで保守性・拡張性が上がり良い設計となる
    - Dependency Injection(DI)
        - 依存関係のあるオブジェクトを外部から注入する
        - 本番用とテスト用でインスタンスの切り替えができる
        - DIを簡単にする仕組みをDIコンテナと呼ぶ
    - classに`@Injectable()`デコレーターをつける
        - ※`@Service()`ではない
    - クラス内にビジネスロジックを実現するメソッドを組成する
    - ControllerからServiceを利用するための設定
        - ModuleのprovidersにServiceを登録する
        - ControllerのconstructorでServiceを引数に取る
            - `constructor(private readonly userService: UsersService){}`
    - Serviceの作成
        - `nest g service items --no-spec`
        - controllerで呼び出す時は`return this.itemsService.findAll();`
- バリデーションと例外処理
    - DTO
        - DTOとはデータの受け渡しに使われるオブジェクト
        - メリット
            - メンテナンス性が高まる
                - データの内容や方が変更になっても修正箇所をDTO内に閉じ込めることができる
            - 安全性が高まる
                - やり取りするデータをDTOの型に制限することができるので、誤ったデータが扱われるリスクが減る
            - NestJSのバリデーション機能が使える
                - 型チェックだけではなく複雑なバリデーションも可能
    - NestJSでバリデーションを行う方法
        - Pipeという機能を使う
            - ハンドラーがリクエストを受け取る前にリクエストに対して処理を行う
            - データの変換とバリデーションが可能
            - 処理を行った後のデータをハンドラーに渡す
            - Pipeの処理中に例外を返すことも可能
        - Pipeの適用方法
            - ハンドラへの適用
                - `@UsePipes(ParseIntPipe)`のような形
            - パラメータごとへの適用
                - `@Body('id', ParseIntPipe) id: number`
            - グローバルへの適用