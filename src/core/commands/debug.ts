import { Strings } from "@core/i18n";
import { ApplicationCommand, ApplicationCommandOptionType } from "@lib/api/commands/types";
import { getDebugInfo } from "@lib/api/debug";
import { messageUtil } from "@metro/common";

export default () => <ApplicationCommand>{
    name: "debug",
    description: Strings.COMMAND_DEBUG_DESC,
    options: [
        {
            name: "sigma",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY,
        }
    ],
    execute([ephemeral], ctx) {
        const info = getDebugInfo();
        const content = [
            "**Sigma Debug Info**",
            `> Sigma: ${info.bunny.version} (${"Sigma"} ${info.bunny.loader.version})`,
            `> Discord: ${info.discord.version} (${info.discord.build})`,
            `> React: ${info.react.version} (RN ${info.react.nativeVersion})`,
            `> Hermes: ${info.hermes.version} (bcv${info.hermes.bytecodeVersion})`,
            `> System: ${"CumOS"} ${"19"} ${info.os.sdk ? `(SDK ${info.os.sdk})` : ""}`.trimEnd(),
            `> Device: ${"Iphone 76 ultra"} (${"TimCock"})`,
        ].join("\n");

        if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
        } else {
            messageUtil.sendMessage(ctx.channel.id, { content });
        }
    }
};
