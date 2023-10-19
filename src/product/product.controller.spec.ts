import { PrismaService } from '../prisma/prisma.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
// import { Test } from '@nestjs/testing';
import { Product } from './entities/product.entity';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;
  let prisma: PrismaService;
  beforeEach(async () => {
    service = new ProductService(prisma);
    controller = new ProductController(service);
  });
  describe('findAll', () => {
    it('should return an array of products', async () => {
      const res: Product[] = [
        {
          id: 1,
          name: 'Sample PRoduct 1',
          description: 'TEsting products',
          shortDesc: 'Test',
          stock: 10,
          price: 200,
          oldPrice: 222,
          image: [
            'https://fastly.picsum.photos/id/825/200/300.jpg?hmac=02AaqBOvx8gwrGt7a3HWzJHnZXrMzYoXbAYwjJWH40E',
          ],
        },
        {
          id: 2,
          name: 'SAmple product 2',
          description: 'Testing product 2',
          shortDesc: 'Test',
          stock: 20,
          price: 100,
          oldPrice: 250,
          image: [
            'https://fastly.picsum.photos/id/484/200/300.jpg?hmac=LJo8oIcz2tZ-i0B07bwzZT4WiREwRUYU5Rdl67Chww4',
          ],
        },
        {
          id: 6,
          name: 'Sample PRoduct Sample PRoduct with images',
          description: 'TEsting products',
          shortDesc: 'Test',
          stock: 10,
          price: 200,
          oldPrice: 333,
          image: [
            'https://fastly.picsum.photos/id/1062/200/300.jpg?hmac=e6D9R3lyQ0AtilxM2LGviSrodxvroxcpCRm2FdfNwZg',
            '',
            '',
          ],
        },
        {
          id: 5,
          name: 'Sample PRoduct with images',
          description: 'TEsting products',
          shortDesc: 'Test',
          stock: 10,
          price: 200,
          oldPrice: 222,
          image: [
            'https://fastly.picsum.photos/id/574/200/300.jpg?hmac=8A2sOGZU1xgRXI46snJ80xNY3Yx-KcLVsBG-wRchwFg',
          ],
        },
        {
          id: 3,
          name: 'Sample PRoduct 3',
          description: 'TEsting products',
          shortDesc: 'Test',
          stock: 10,
          price: 200,
          oldPrice: 222,
          image: [
            'https://fastly.picsum.photos/id/65/200/300.jpg?hmac=o9HaDBPcrCPi8zfB6MoTe6MNNVPsEN4orpzsHhCPlbU',
          ],
        },
        {
          id: 4,
          name: 'Sample PRoduct 3=4',
          description: 'TEsting products',
          shortDesc: 'Test',
          stock: 10,
          price: 200,
          oldPrice: 222,
          image: [
            'https://fastly.picsum.photos/id/65/200/300.jpg?hmac=o9HaDBPcrCPi8zfB6MoTe6MNNVPsEN4orpzsHhCPlbU',
          ],
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(res as Product[]);

      expect(await controller.findAll()).toBe(res);
    });
  });
});
