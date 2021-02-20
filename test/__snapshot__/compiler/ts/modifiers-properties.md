# Kataw parser test case

## Input

`````js
abstract class C {
    readonly r;
    readonly r2?: number;
    abstract a;
    static s;

    public pu;
    protected po;
    private pi;

    readonly abstract ra;
    abstract readonly ar;
    static readonly sr;

    public readonly pur;
    public abstract pua;
    public static pus;
    public readonly abstract pura;
    public abstract readonly puar;
    public static readonly pusr;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "abstract class C {\n    readonly r;\n    readonly r2?: number;\n    abstract a;\n    static s;\n\n    public pu;\n    protected po;\n    private pi;\n\n    readonly abstract ra;\n    abstract readonly ar;\n    static readonly sr;\n\n    public readonly pur;\n    public abstract pua;\n    public static pus;\n    public readonly abstract pura;\n    public abstract readonly puar;\n    public static readonly pusr;\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 16
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "r",
                                "rawText": "r",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 31,
                                "end": 33
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 18,
                            "end": 34
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "r2",
                                "rawText": "r2",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 47,
                                "end": 50
                            },
                            "isReadOnly": true,
                            "isOptional": true,
                            "exclamation": false,
                            "type": {
                                "kind": 161,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 52,
                                "end": 59
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 34,
                            "end": 60
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 73,
                                "end": 75
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 268517376,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 60,
                            "end": 76
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "s",
                                "rawText": "s",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 87,
                                "end": 89
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 76,
                            "end": 90
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pu",
                                "rawText": "pu",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 102,
                                "end": 105
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 90,
                                "end": 102
                            },
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 90,
                            "end": 106
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "po",
                                "rawText": "po",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 120,
                                "end": 123
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 106,
                                "end": 120
                            },
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 106,
                            "end": 124
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pi",
                                "rawText": "pi",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 136,
                                "end": 139
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 124,
                                "end": 136
                            },
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 124,
                            "end": 140
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "ra",
                                "rawText": "ra",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 163,
                                "end": 166
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 268517376,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 140,
                            "end": 167
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "ar",
                                "rawText": "ar",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 189,
                                "end": 192
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 268517376,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 167,
                            "end": 193
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "sr",
                                "rawText": "sr",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 213,
                                "end": 216
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 193,
                            "end": 217
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pur",
                                "rawText": "pur",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 238,
                                "end": 242
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 217,
                                "end": 229
                            },
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 217,
                            "end": 243
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pua",
                                "rawText": "pua",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 263,
                                "end": 267
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 243,
                                "end": 254
                            },
                            "isStatic": false,
                            "flags": 268517376,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 243,
                            "end": 268
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pus",
                                "rawText": "pus",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 286,
                                "end": 290
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 268,
                                "end": 279
                            },
                            "isStatic": true,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 268,
                            "end": 291
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pura",
                                "rawText": "pura",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 320,
                                "end": 325
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 291,
                                "end": 302
                            },
                            "isStatic": false,
                            "flags": 268517376,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 291,
                            "end": 326
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "puar",
                                "rawText": "puar",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 355,
                                "end": 360
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 326,
                                "end": 337
                            },
                            "isStatic": false,
                            "flags": 268517376,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 326,
                            "end": 361
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pusr",
                                "rawText": "pusr",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 388,
                                "end": 393
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 361,
                                "end": 372
                            },
                            "isStatic": true,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 361,
                            "end": 394
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 396
                },
                "decorators": null,
                "flags": 268500992,
                "intersects": false,
                "transformFlags": 2097153,
                "parent": null,
                "emitNode": null,
                "start": 8,
                "end": 396
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 396
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
    "end": 396
}
```

### Printed


```javascript

abstract class C {
    readonly r;
    readonly r2?: number;
    abstract a;
    static s;
    public pu;
    protected po;
    private pi;
    abstract readonly ra;
    abstract readonly ar;
    readonly static sr;
    public readonly pur;
    public abstract pua;
    public static pus;
    public abstract readonly pura;
    public abstract readonly puar;
    public readonly static pusr;
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

