let apiHost = "http://my.todo-list.com/v1/api";

function updateConfig(env) {
  if ("host" in env) {
    apiHost = env.host;
  }
}

export { updateConfig, apiHost };
