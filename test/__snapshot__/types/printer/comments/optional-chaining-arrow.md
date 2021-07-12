# Kataw parser test case

## Input

`````js
const test = (names: string[]) =>
    // single-line comment
    names?.filter(x => x);
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "test",
                            "rawText": "test",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "names",
                                            "rawText": "names",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 136,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 27
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 29
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 29
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 12,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 30
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "contents": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 72
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "names",
                                    "rawText": "names",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 70
                                },
                                "chain": {
                                    "kind": 204,
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "filter",
                                                "rawText": "filter",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 72,
                                                "end": 78
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 2,
                                            "start": 72,
                                            "end": 78
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 78
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 271,
                                                "asyncKeyword": null,
                                                "typeParameters": null,
                                                "arrowPatameterList": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 79,
                                                    "end": 80
                                                },
                                                "returnType": null,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 80,
                                                    "end": 83
                                                },
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 83,
                                                    "end": 85
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 79,
                                                "end": 85
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 79,
                                        "end": 85
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 78,
                                    "end": 86
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 86
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 86
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 86
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 86
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "const test = (names: string[]) =>\n    // single-line comment\n    names?.filter(x => x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
const test = (names: string[]) => // single-line commentnames?.filter(x => x);
```

### Diagnostics

```javascript
✔ No errors
```

