import { prisma } from "@/config";
import faker from "@faker-js/faker";

export async function createHotel() {
    return prisma.hotel.create({
        data: {
            name: faker.company.companyName(),
            image: faker.image.imageUrl()
        }
    })
}

export async function createRoomWithHotelId(hotelId: number) {
    return prisma.room.create({
        data: {
            name: faker.company.companyName(),
            capacity: faker.datatype.number(),
            hotelId
        }
    })
}