# Kataw parser test case

## Input

`````js
function method(obj: { [key: string]: any }) {}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "method",
                "rawText": "method",
                "flags": 96,
                "start": 8,
                "end": 15
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 16,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "key": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 28,
                                                "end": 35
                                            },
                                            "flags": 2097152,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234252,
                                                "flags": 2097216,
                                                "start": 37,
                                                "end": 41
                                            },
                                            "flags": 2097152,
                                            "start": 37,
                                            "end": 41
                                        },
                                        "flags": 2097152,
                                        "start": 22,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 20,
                                "end": 43
                            },
                            "flags": 2097152,
                            "start": 20,
                            "end": 43
                        },
                        "right": null,
                        "flags": 32,
                        "start": 16,
                        "end": 43
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 43
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 46,
                    "end": 46
                },
                "flags": 32,
                "start": 44,
                "end": 47
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function method(obj: { [key: string]: any }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

function method(obj: { [keystring]: any }) {}

```

### Diagnostics

```javascript
✔ No errors
```

