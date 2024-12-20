import { IsEnum, IsNotEmpty } from "class-validator";
import { TaskStatus } from "../task.model";

export class CreateTaskDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
