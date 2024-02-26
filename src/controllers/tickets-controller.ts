import { Response } from 'express';
import httpStatus from 'http-status';
import { ticketsService } from '@/services';
import { AuthenticatedRequest } from "@/middlewares"

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
    const ticketTypes = await ticketsService.getTicketTypes()
    return res.status(httpStatus.OK).send(ticketTypes)
}

export async function getTicket(req: AuthenticatedRequest, res: Response) {
    const { userId } = req
    const ticket = await ticketsService.getTicketByUserId(userId)
    return res.status(httpStatus.OK).send(ticket)
}