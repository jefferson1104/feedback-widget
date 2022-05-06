import { primsa } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await primsa.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    });
  }
}
