import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import { getServerConfigFromServer } from "../core/configuration/ConfigLoader";

const config = getServerConfigFromServer();

export function getOtelResource() {
  return resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "vevfrontgame",
    [ATTR_SERVICE_VERSION]: "1.0.0",
    ...getPromLabels(),
  });
}

export function getPromLabels() {
  return {
    "service.instance.id": process.env.HOSTNAME,
    "vevfrontgame.environment": config.env(),
    "vevfrontgame.host": process.env.HOST,
    "vevfrontgame.domain": process.env.DOMAIN,
    "vevfrontgame.subdomain": process.env.SUBDOMAIN,
    "vevfrontgame.component": process.env.WORKER_ID
      ? "Worker " + process.env.WORKER_ID
      : "Master",
  };
}
