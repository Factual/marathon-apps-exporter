# Marathon Apps Exporter

## Quick Starts

Run `docker run -p 3000:3000 factual/marathon-apps-exporter`

Then visit http://localhost:3000

## How to develop

1. Pull down the latest code
   `git clone https://github.com/factual/marathon-apps-exporter.git `
2. Build docker image by yourself or Pull down the latest image from docker hub.
```
cd marathon-apps-exporter

# if you want to build image by yourself
docker-compose build

# if you want to just pull down the latest image
docker-compose pull
```
3. Develop workflow

   1. Start dev docker container.
      `docker-compose run --service-ports marathon-apps-exporter bash`

      > This command will help you launch a docker container and start a shell(bash).
      > You can type any command you want in it.

   2. Edit source code in your host machine with your favorite editor.

   3. Run `npm start` in side the dev docker container's shell.

   4. Test your changes in http://localhost:3000.

   5. At the end, please try to rebuild the docker image locally to make sure it can finish successfully.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/factual/marathon-apps-exporter. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the factual marathon-apps-export project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/factual/marathon-apps-exporter/blob/master/CODE_OF_CONDUCT.md).