# Kataw parser test case

## Input

`````js
var c: { (x: string): string } = (x) => x.toFixed()
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234347,
                                                            "flags": 2097216,
                                                            "start": 12,
                                                            "end": 19
                                                        },
                                                        "flags": 2097152,
                                                        "start": 12,
                                                        "end": 19
                                                    },
                                                    "flags": 2097152,
                                                    "start": 10,
                                                    "end": 19
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 10,
                                            "end": 19
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 21,
                                                "end": 28
                                            },
                                            "flags": 2097152,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 6,
                                "end": 30
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 30
                        },
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 34,
                                "end": 36
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 36,
                                "end": 39
                            },
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "toFixed",
                                        "rawText": "toFixed",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 49
                                    },
                                    "flags": 96,
                                    "start": 39,
                                    "end": 49
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 50,
                                    "end": 50
                                },
                                "flags": 268435488,
                                "start": 39,
                                "end": 51
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 51
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "var c: { (x: string): string } = (x) => x.toFixed()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

var c:  = () =>  x.toFixed();
```

### Diagnostics

```javascript
✔ No errors
```

