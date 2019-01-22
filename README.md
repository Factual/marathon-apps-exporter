# Marathon Apps Exporter

An exporter for generating marathon applications related metrics.

## Why do I want this?

If you are using [Prometheus](https://prometheus.io/) and you want to collect your marathon applications metrics. For example how many instances / cpus / memory that used by an application, if an application is healthy running for serving users need. Then this exporter is exactly designed for you.

Currently, it exports those marathon application metrics.

* instances
* cpus
* mem
* tasksStaged
* tasksRunning
* tasksHealthy
* tasksUnhealthy

After you integrate it with your Prometheus. You will able to query marathon applications historical data like

`marathon_app_tasksHealthy{id="/your/application/id"}`

or

`marathon_app_instances{id="/your/application/id"} * marathon_app_mem{id="/your/application/id"}`

And you will be able to integrate it with your [Grafana](https://grafana.com/) to create useful charts or alerts.

## Quick Starts

### Start server

Run `docker run -p 3000:3000 factual/marathon-apps-exporter`

### Access metrics

Manually you can visit http://localhost:3000/metrics?marathon-url=http://your.marathon.url to see the generated metrics.

If you want to integrate it with your prometheus. You can append this to your prometheus config:

```yaml
- job_name: 'marathon-apps'
  params:
    marathon-url:
      - http://your.marathon.url
  static_configs:
    - targets: ['localhost:3000'] # this exporter's host and port
```

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