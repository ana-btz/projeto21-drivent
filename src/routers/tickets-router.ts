import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTicket, getTicketTypes } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', getTicketTypes)
    .get('/', getTicket)

export { ticketsRouter }
