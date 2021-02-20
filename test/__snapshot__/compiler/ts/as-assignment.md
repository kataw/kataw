# Kataw parser test case

## Input

`````js
const LOG_LEVEL = {
    EMERGENCY: 0,
    ALERT: 1,
    CRITICAL: 2,
    ERROR: 3,
    WARNING: 4,
    NOTICE: 5,
    INFO: 6,
    DEBUG: 7,
} as const;

const TYPE_MAP = {
    'character device': 'special',
    'character special file': 'special',
    directory: 'directory',
    'regular file': 'file',
    socket: 'socket',
    'symbolic link': 'link',
} as Foo;

this.previewPlayerHandle = (setInterval(async () => {
  if (this.previewIsPlaying) {
    await this.fetchNextPreviews();
    this.currentPreviewIndex++;
  }
}, this.refreshDelay) as unknown) as number;

this.intervalID = (setInterval(() => {
  self.step();
}, 30) as unknown) as number;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "const LOG_LEVEL = {\n    EMERGENCY: 0,\n    ALERT: 1,\n    CRITICAL: 2,\n    ERROR: 3,\n    WARNING: 4,\n    NOTICE: 5,\n    INFO: 6,\n    DEBUG: 7,\n} as const;\n\nconst TYPE_MAP = {\n    'character device': 'special',\n    'character special file': 'special',\n    directory: 'directory',\n    'regular file': 'file',\n    socket: 'socket',\n    'symbolic link': 'link',\n} as Foo;\n\nthis.previewPlayerHandle = (setInterval(async () => {\n  if (this.previewIsPlaying) {\n    await this.fetchNextPreviews();\n    this.currentPreviewIndex++;\n  }\n}, this.refreshDelay) as unknown) as number;\n\nthis.intervalID = (setInterval(() => {\n  self.step();\n}, 30) as unknown) as number;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "LOG_LEVEL",
                                "rawText": "LOG_LEVEL",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 15
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "EMERGENCY",
                                                    "rawText": "EMERGENCY",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 19,
                                                    "end": 33
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 19,
                                                "end": 36
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "ALERT",
                                                    "rawText": "ALERT",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 37,
                                                    "end": 47
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 48,
                                                    "end": 50
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 37,
                                                "end": 50
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "CRITICAL",
                                                    "rawText": "CRITICAL",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 51,
                                                    "end": 64
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 65,
                                                    "end": 67
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 51,
                                                "end": 67
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "ERROR",
                                                    "rawText": "ERROR",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 68,
                                                    "end": 78
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 79,
                                                    "end": 81
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 68,
                                                "end": 81
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "WARNING",
                                                    "rawText": "WARNING",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 82,
                                                    "end": 94
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 95,
                                                    "end": 97
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 82,
                                                "end": 97
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "NOTICE",
                                                    "rawText": "NOTICE",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 98,
                                                    "end": 109
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 110,
                                                    "end": 112
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 98,
                                                "end": 112
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "INFO",
                                                    "rawText": "INFO",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 113,
                                                    "end": 122
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 6,
                                                    "rawText": "6",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 123,
                                                    "end": 125
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 113,
                                                "end": 125
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "DEBUG",
                                                    "rawText": "DEBUG",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 126,
                                                    "end": 136
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 7,
                                                    "rawText": "7",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 137,
                                                    "end": 139
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 126,
                                                "end": 139
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 19,
                                        "end": 140
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 17,
                                    "end": 142
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 145,
                                        "end": 151
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 145,
                                    "end": 152
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 142,
                                "end": 151
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 5,
                            "end": 151
                        }
                    ],
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 151
                },
                "flags": 81936,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 152
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "TYPE_MAP",
                                "rawText": "TYPE_MAP",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 159,
                                "end": 168
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 67279,
                                                    "text": "character device",
                                                    "rawText": "character device",
                                                    "flags": 16859136,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 172,
                                                    "end": 195
                                                },
                                                "right": {
                                                    "kind": 67279,
                                                    "text": "special",
                                                    "rawText": "special",
                                                    "flags": 16842752,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 196,
                                                    "end": 206
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 172,
                                                "end": 206
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 67279,
                                                    "text": "character special file",
                                                    "rawText": "character special file",
                                                    "flags": 16859136,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 207,
                                                    "end": 236
                                                },
                                                "right": {
                                                    "kind": 67279,
                                                    "text": "special",
                                                    "rawText": "special",
                                                    "flags": 16842752,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 237,
                                                    "end": 247
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 207,
                                                "end": 247
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "directory",
                                                    "rawText": "directory",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 248,
                                                    "end": 262
                                                },
                                                "right": {
                                                    "kind": 67279,
                                                    "text": "directory",
                                                    "rawText": "directory",
                                                    "flags": 16842752,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 263,
                                                    "end": 275
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 248,
                                                "end": 275
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 67279,
                                                    "text": "regular file",
                                                    "rawText": "regular file",
                                                    "flags": 16859136,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 276,
                                                    "end": 295
                                                },
                                                "right": {
                                                    "kind": 67279,
                                                    "text": "file",
                                                    "rawText": "file",
                                                    "flags": 16842752,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 296,
                                                    "end": 303
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 276,
                                                "end": 303
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "socket",
                                                    "rawText": "socket",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 304,
                                                    "end": 315
                                                },
                                                "right": {
                                                    "kind": 67279,
                                                    "text": "socket",
                                                    "rawText": "socket",
                                                    "flags": 16842752,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 316,
                                                    "end": 325
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 304,
                                                "end": 325
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 67279,
                                                    "text": "symbolic link",
                                                    "rawText": "symbolic link",
                                                    "flags": 16859136,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 326,
                                                    "end": 346
                                                },
                                                "right": {
                                                    "kind": 67279,
                                                    "text": "link",
                                                    "rawText": "link",
                                                    "flags": 16842752,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 347,
                                                    "end": 354
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 326,
                                                "end": 354
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 172,
                                        "end": 355
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 170,
                                    "end": 357
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "Foo",
                                        "rawText": "Foo",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 360,
                                        "end": 364
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 360,
                                    "end": 365
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 357,
                                "end": 364
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 159,
                            "end": 364
                        }
                    ],
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 159,
                    "end": 364
                },
                "flags": 81936,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 152,
                "end": 365
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 74424,
                        "member": {
                            "kind": 4260571,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 365,
                            "end": 371
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "previewPlayerHandle",
                            "rawText": "previewPlayerHandle",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 372,
                            "end": 391
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 371,
                        "end": 391
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65546,
                        "expression": {
                            "kind": 66224,
                            "expression": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "setInterval",
                                        "rawText": "setInterval",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 395,
                                        "end": 406
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 16,
                                                "arrowParameters": [],
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097257,
                                                                "expression": {
                                                                    "kind": 74424,
                                                                    "member": {
                                                                        "kind": 4260571,
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 427,
                                                                        "end": 431
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "previewIsPlaying",
                                                                        "rawText": "previewIsPlaying",
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 432,
                                                                        "end": 448
                                                                    },
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 431,
                                                                    "end": 448
                                                                },
                                                                "consequent": {
                                                                    "kind": 2099237,
                                                                    "block": {
                                                                        "kind": 2084,
                                                                        "statements": [
                                                                            {
                                                                                "kind": 2097233,
                                                                                "expression": {
                                                                                    "kind": 65559,
                                                                                    "expression": {
                                                                                        "kind": 66091,
                                                                                        "expression": {
                                                                                            "kind": 74424,
                                                                                            "member": {
                                                                                                "kind": 4260571,
                                                                                                "flags": 65536,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 461,
                                                                                                "end": 466
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 196711,
                                                                                                "text": "fetchNextPreviews",
                                                                                                "rawText": "fetchNextPreviews",
                                                                                                "flags": 65536,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 467,
                                                                                                "end": 484
                                                                                            },
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 466,
                                                                                            "end": 484
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 486,
                                                                                            "end": 486
                                                                                        },
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 484,
                                                                                        "end": 486
                                                                                    },
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 32780,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 451,
                                                                                    "end": 486
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 451,
                                                                                "end": 487
                                                                            },
                                                                            {
                                                                                "kind": 2097233,
                                                                                "expression": {
                                                                                    "kind": 65714,
                                                                                    "operator": "++",
                                                                                    "operand": {
                                                                                        "kind": 74424,
                                                                                        "member": {
                                                                                            "kind": 4260571,
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 487,
                                                                                            "end": 496
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 196711,
                                                                                            "text": "currentPreviewIndex",
                                                                                            "rawText": "currentPreviewIndex",
                                                                                            "flags": 65536,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 497,
                                                                                            "end": 516
                                                                                        },
                                                                                        "flags": 65536,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 496,
                                                                                        "end": 516
                                                                                    },
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 487,
                                                                                    "end": 518
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 487,
                                                                                "end": 519
                                                                            }
                                                                        ],
                                                                        "multiline": true,
                                                                        "flags": 81920,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 451,
                                                                        "end": 519
                                                                    },
                                                                    "flags": 81920,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 449,
                                                                    "end": 523
                                                                },
                                                                "alternate": null,
                                                                "isWebCompat": true,
                                                                "flags": 81920,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 420,
                                                                "end": 523
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 81920,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 420,
                                                        "end": 523
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 418,
                                                    "end": 525
                                                },
                                                "flags": 536936448,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 407,
                                                "end": 525
                                            },
                                            {
                                                "kind": 74424,
                                                "member": {
                                                    "kind": 4260571,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 526,
                                                    "end": 531
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "refreshDelay",
                                                    "rawText": "refreshDelay",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 532,
                                                    "end": 544
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 531,
                                                "end": 544
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 65536,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 412,
                                        "end": 545
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 406,
                                    "end": 545
                                },
                                "type": {
                                    "kind": 4194546,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 548,
                                    "end": 556
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 545,
                                "end": 556
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 393,
                            "end": 557
                        },
                        "type": {
                            "kind": 161,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 560,
                            "end": 567
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 557,
                        "end": 567
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 365,
                    "end": 567
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 365,
                "end": 568
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 74424,
                        "member": {
                            "kind": 4260571,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 568,
                            "end": 574
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "intervalID",
                            "rawText": "intervalID",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 575,
                            "end": 585
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 574,
                        "end": 585
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65546,
                        "expression": {
                            "kind": 66224,
                            "expression": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "setInterval",
                                        "rawText": "setInterval",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 589,
                                        "end": 600
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 67592,
                                                "arrowParameters": {
                                                    "kind": 65545,
                                                    "typeParameters": 1,
                                                    "elements": [],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 601,
                                                    "end": 601
                                                },
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 66091,
                                                                    "expression": {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "self",
                                                                            "rawText": "self",
                                                                            "flags": 81920,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 608,
                                                                            "end": 615
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "step",
                                                                            "rawText": "step",
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 616,
                                                                            "end": 620
                                                                        },
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 615,
                                                                        "end": 620
                                                                    },
                                                                    "typeArguments": null,
                                                                    "argumentList": {
                                                                        "kind": 3,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "transformFlags": 0,
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 622,
                                                                        "end": 622
                                                                    },
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 620,
                                                                    "end": 622
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 608,
                                                                "end": 623
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 81920,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 608,
                                                        "end": 623
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 606,
                                                    "end": 625
                                                },
                                                "flags": 536936448,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 601,
                                                "end": 625
                                            },
                                            {
                                                "kind": 4261540,
                                                "text": 30,
                                                "rawText": "30",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 626,
                                                "end": 629
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 65536,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 602,
                                        "end": 630
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 600,
                                    "end": 630
                                },
                                "type": {
                                    "kind": 4194546,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 633,
                                    "end": 641
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 630,
                                "end": 641
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 587,
                            "end": 642
                        },
                        "type": {
                            "kind": 161,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 645,
                            "end": 652
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 642,
                        "end": 652
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 568,
                    "end": 652
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 568,
                "end": 653
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 653
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 653
}
```

### Printed


```javascript

const LOG_LEVEL = { EMERGENCY : 0, ALERT : 1, CRITICAL : 2, ERROR : 3, WARNING : 4, NOTICE : 5, INFO : 6, DEBUG : 7 } as const;

const TYPE_MAP = { "character device" : "special", "character special file" : "special", directory : "directory", "regular file" : "file", socket : "socket", "symbolic link" : "link" } as Foo;

this.previewPlayerHandle = (setInterval(async () =>  {
    if (this.previewIsPlaying) {
        await this.fetchNextPreviews()
        this.currentPreviewIndex++
    }
}, this.refreshDelay) as unknown) as number

this.intervalID = (setInterval(() =>  {
    self.step()
}, 30) as unknown) as number

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

