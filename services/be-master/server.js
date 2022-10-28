const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
	transport: Transport.RMQ,
	options: {
		urls: ['amqp://localhost:5672'],
		queue: 'cats_queue',
		queueOptions: {
			durable: false
		},
	},
});