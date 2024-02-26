import { prisma } from "@/config";
import { TicketType } from "@prisma/client";
import { CreateTicketParams } from "@/protocols";

async function findTicketTypes(): Promise<TicketType[]> {
    const result = await prisma.ticketType.findMany();
    return result
}

async function findTicketByEnrollmentId(enrollmentId: number) {
    const result = await prisma.ticket.findUnique({
        where: { enrollmentId },
        include: { TicketType: true }
    })
    return result
}

async function createTicket(ticket: CreateTicketParams) {
    const result = await prisma.ticket.create({
        data: ticket,
        include: { TicketType: true }
    })
    return result
}

export const ticketsRepository = {
    findTicketTypes,
    findTicketByEnrollmentId,
    createTicket
}