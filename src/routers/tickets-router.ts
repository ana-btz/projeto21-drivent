import { Router } from "express";
import { createTicketSchema } from "@/schemas";
import { authenticateToken, validateBody } from "@/middlewares";
import { createTicket, getTicket, getTicketTypes } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', getTicketTypes)
    .get('/', getTicket)
    .post('/', validateBody(createTicketSchema), createTicket);

export { ticketsRouter }
