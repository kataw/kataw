# Kataw parser test case

## Input

`````js
function then(x) {

var match: { [index: number]: string; }

}

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function then(x) {\n\nvar match: { [index: number]: string; }\n\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "then",
                "rawText": "then",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 15
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 14,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "match",
                                            "rawText": "match",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 23,
                                            "end": 29
                                        },
                                        "exclamation": false,
                                        "type": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 73844,
                                                        "accessModifier": null,
                                                        "parameters": {
                                                            "kind": 134226095,
                                                            "parameterList": [
                                                                {
                                                                    "kind": 134226094,
                                                                    "ellipsis": false,
                                                                    "binding": {
                                                                        "kind": 131102,
                                                                        "text": "index",
                                                                        "rawText": "index",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1025,
                                                                        "start": 34,
                                                                        "end": 39
                                                                    },
                                                                    "isOptional": false,
                                                                    "type": {
                                                                        "kind": 4202657,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 2097152,
                                                                        "start": 40,
                                                                        "end": 47
                                                                    },
                                                                    "initializer": null,
                                                                    "accessModifier": null,
                                                                    "isReadOnly": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 34,
                                                                    "end": 47
                                                                }
                                                            ],
                                                            "trailingcomma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 34,
                                                            "end": 47
                                                        },
                                                        "returnType": {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 49,
                                                            "end": 56
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 34,
                                                        "end": 57
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 32,
                                                "end": 59
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 30,
                                            "end": 59
                                        },
                                        "initializer": null,
                                        "flags": 23,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 32768,
                                        "end": 59
                                    }
                                ],
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 59
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 59
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 59
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 62
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

