import { AzureFunction, Context } from "@azure/functions"
import { AzureBlobService } from "../shared/AzureBlobService";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const blobService = new AzureBlobService(process.env.AzureWebJobsStorage)

    await blobService.getCreateContainer("hello-container-2")
    context.log("created hello container-2")

    
};

export default timerTrigger;
