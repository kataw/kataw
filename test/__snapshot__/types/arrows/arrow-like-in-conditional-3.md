# Kataw parser test case

## Input

`````js
0 ? v => (...rest) : v => 0 : v => 0;
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
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "v",
                        "rawText": "v",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "contents": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "rest",
                                        "rawText": "rest",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 34,
                                    "transformFlags": 4096,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 22
                        },
                        "returnType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "v",
                                    "rawText": "v",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 25
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 27
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 27
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "v",
                        "rawText": "v",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 34
                    },
                    "contents": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 36
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "0 ? v => (...rest) : v => 0 : v => 0;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

0 ? v => (...rest) => 0 : v => 0;

```

### Diagnostics

```javascript
✔ No errors
```

