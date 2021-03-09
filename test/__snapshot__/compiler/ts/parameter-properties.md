# Kataw parser test case

## Input

`````js
class C {
    constructor(
        readonly r,
        public pu: number,
        protected po?,
        private pi?: number,
        public readonly pur,
        // Also works on AssignmentPattern
        readonly x = 0,
        public y?: number = 0) {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n    constructor(\n        readonly r,\n        public pu: number,\n        protected po?,\n        private pi?: number,\n        public readonly pur,\n        // Also works on AssignmentPattern\n        readonly x = 0,\n        public y?: number = 0) {}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 25
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "r",
                                                "rawText": "r",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": true,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 26,
                                            "end": 45
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "pu",
                                                "rawText": "pu",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 61,
                                                "end": 64
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 65,
                                                "end": 72
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194494,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 46,
                                                "end": 61
                                            },
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097153,
                                            "start": 46,
                                            "end": 72
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "po",
                                                "rawText": "po",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 91,
                                                "end": 94
                                            },
                                            "isOptional": true,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194493,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 73,
                                                "end": 91
                                            },
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097153,
                                            "start": 73,
                                            "end": 95
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "pi",
                                                "rawText": "pi",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 112,
                                                "end": 115
                                            },
                                            "isOptional": true,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 117,
                                                "end": 124
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194485,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 96,
                                                "end": 112
                                            },
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097153,
                                            "start": 96,
                                            "end": 124
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "pur",
                                                "rawText": "pur",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 149,
                                                "end": 153
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194494,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 125,
                                                "end": 140
                                            },
                                            "isReadOnly": true,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097153,
                                            "start": 125,
                                            "end": 153
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 214,
                                                "end": 216
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 218,
                                                "end": 220
                                            },
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": true,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 154,
                                            "end": 220
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 236,
                                                "end": 238
                                            },
                                            "isOptional": true,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 240,
                                                "end": 247
                                            },
                                            "initializer": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 249,
                                                "end": 251
                                            },
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194494,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 221,
                                                "end": 236
                                            },
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097153,
                                            "start": 221,
                                            "end": 251
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 252
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 254,
                                        "end": 254
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 252,
                                    "end": 255
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 255
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 255
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 257
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 257
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 257
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 257
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

