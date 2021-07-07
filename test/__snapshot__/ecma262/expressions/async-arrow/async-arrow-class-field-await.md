# Kataw parser test case

## Input

`````js
async () => class C { aaa = await };

async( x = class { x = await });
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "contents": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 17
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "aaa",
                                        "rawText": "aaa",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 25
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 33
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 21,
                                    "end": 33
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 33
                        },
                        "flags": 19,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 35
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 35
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 43
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 46
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 48
                            },
                            "right": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 54
                                },
                                "name": null,
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [
                                            {
                                                "kind": 280,
                                                "decorators": null,
                                                "declaredToken": null,
                                                "staticKeyword": null,
                                                "asyncKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 60,
                                                    "end": 66
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 56,
                                                "end": 66
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 66
                                    },
                                    "flags": 54,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 68
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 68
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 44,
                            "end": 68
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 36
                },
                "flags": 268435490,
                "transformFlags": 1,
                "start": 36,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 36,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "async () => class C { aaa = await };\n\nasync( x = class { x = await });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 33, end: 35

```

