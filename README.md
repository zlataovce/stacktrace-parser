# stacktrace-parser
A Java stacktrace parser, written in TypeScript, hosted on [Cloudflare Workers](https://workers.dev)

## Usage
 - Send a POST request to https://stacktrace-parser.kcra.workers.dev with the stacktrace as request data
    - Example usage: `curl --location --request POST 'https://stacktrace-parser.kcra.workers.dev/' --header 'Content-Type: text/plain' --data-raw 'your stacktrace'`


**Example response:**
```json
[
    {
        "traceClass": "java.lang.IllegalStateException",
        "traceError": "Unexpected BlockState for AIR",
        "traceElements": [
            {
                "elementClass": "com.google.common.base.Preconditions",
                "elementMethod": "checkState",
                "elementFile": "Preconditions.java",
                "elementFileLine": 588,
                "isNative": false
            },
            {
                "elementClass": "org.bukkit.craftbukkit.v1_17_R1.block.CraftBlockStates$1",
                "elementMethod": "createBlockState",
                "elementFile": "CraftBlockStates.java",
                "elementFileLine": 108,
                "isNative": false
            },
            {
                "elementClass": "org.bukkit.craftbukkit.v1_17_R1.block.CraftBlockStates",
                "elementMethod": "getBlockState",
                "elementFile": "CraftBlockStates.java",
                "elementFileLine": 365,
                "isNative": false
            },
            {
                "elementClass": "org.bukkit.craftbukkit.v1_17_R1.block.CraftBlockStates",
                "elementMethod": "getBlockState",
                "elementFile": "CraftBlockStates.java",
                "elementFileLine": 328,
                "isNative": false
            },
            {
                "elementClass": "org.bukkit.craftbukkit.v1_17_R1.block.CraftBlock",
                "elementMethod": "getState",
                "elementFile": "CraftBlock.java",
                "elementFileLine": 326,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.block.entity.BlockEntity",
                "elementMethod": "getOwner",
                "elementFile": "BlockEntity.java",
                "elementFileLine": 241,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.block.entity.BlockEntity",
                "elementMethod": "getOwner",
                "elementFile": "BlockEntity.java",
                "elementFileLine": 229,
                "isNative": false
            },
            {
                "elementClass": "org.bukkit.craftbukkit.v1_17_R1.event.CraftEventFactory",
                "elementMethod": "callLootGenerateEvent",
                "elementFile": "CraftEventFactory.java",
                "elementFileLine": 1811,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.storage.loot.LootTable",
                "elementMethod": "fillInventory",
                "elementFile": "LootTable.java",
                "elementFileLine": 142,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.storage.loot.LootTable",
                "elementMethod": "fill",
                "elementFile": "LootTable.java",
                "elementFileLine": 134,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity",
                "elementMethod": "unpackLootTable",
                "elementFile": "RandomizableContainerBlockEntity.java",
                "elementFileLine": 85,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity",
                "elementMethod": "getItem",
                "elementFile": "RandomizableContainerBlockEntity.java",
                "elementFileLine": 110,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.Containers",
                "elementMethod": "dropContents",
                "elementFile": "Containers.java",
                "elementFileLine": 26,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.Containers",
                "elementMethod": "dropContents",
                "elementFile": "Containers.java",
                "elementFileLine": 17,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.block.ChestBlock",
                "elementMethod": "onRemove",
                "elementFile": "ChestBlock.java",
                "elementFileLine": 254,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.block.state.BlockBehaviour$BlockStateBase",
                "elementMethod": "onRemove",
                "elementFile": "BlockBehaviour.java",
                "elementFileLine": 913,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.chunk.LevelChunk",
                "elementMethod": "setType",
                "elementFile": "LevelChunk.java",
                "elementFileLine": 676,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.Level",
                "elementMethod": "setBlock",
                "elementFile": "Level.java",
                "elementFileLine": 592,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.Level",
                "elementMethod": "setBlock",
                "elementFile": "Level.java",
                "elementFileLine": 554,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.Explosion",
                "elementMethod": "finalizeExplosion",
                "elementFile": "Explosion.java",
                "elementFileLine": 365,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.Level",
                "elementMethod": "explode",
                "elementFile": "Level.java",
                "elementFileLine": 1018,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.level.ServerLevel",
                "elementMethod": "explode",
                "elementFile": "ServerLevel.java",
                "elementFileLine": 1582,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.Level",
                "elementMethod": "explode",
                "elementFile": "Level.java",
                "elementFileLine": 1011,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.entity.monster.Creeper",
                "elementMethod": "explodeCreeper",
                "elementFile": "Creeper.java",
                "elementFileLine": 270,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.entity.monster.Creeper",
                "elementMethod": "tick",
                "elementFile": "Creeper.java",
                "elementFileLine": 163,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.level.ServerLevel",
                "elementMethod": "tickNonPassenger",
                "elementFile": "ServerLevel.java",
                "elementFileLine": 1114,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.Level",
                "elementMethod": "guardEntityTick",
                "elementFile": "Level.java",
                "elementFileLine": 986,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.level.ServerLevel",
                "elementMethod": "lambda$tick$7",
                "elementFile": "ServerLevel.java",
                "elementFileLine": 775,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.world.level.entity.EntityTickList",
                "elementMethod": "forEach",
                "elementFile": "EntityTickList.java",
                "elementFileLine": 43,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.level.ServerLevel",
                "elementMethod": "tick",
                "elementFile": "ServerLevel.java",
                "elementFileLine": 756,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.MinecraftServer",
                "elementMethod": "tickChildren",
                "elementFile": "MinecraftServer.java",
                "elementFileLine": 1619,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.dedicated.DedicatedServer",
                "elementMethod": "tickChildren",
                "elementFile": "DedicatedServer.java",
                "elementFileLine": 479,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.MinecraftServer",
                "elementMethod": "tickServer",
                "elementFile": "MinecraftServer.java",
                "elementFileLine": 1475,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.MinecraftServer",
                "elementMethod": "runServer",
                "elementFile": "MinecraftServer.java",
                "elementFileLine": 1274,
                "isNative": false
            },
            {
                "elementClass": "net.minecraft.server.MinecraftServer",
                "elementMethod": "lambda$spin$0",
                "elementFile": "MinecraftServer.java",
                "elementFileLine": 319,
                "isNative": false
            },
            {
                "elementClass": "java.lang.Thread",
                "elementMethod": "run",
                "elementFile": "Thread.java",
                "elementFileLine": 831,
                "isNative": false
            }
        ]
    }
]
```