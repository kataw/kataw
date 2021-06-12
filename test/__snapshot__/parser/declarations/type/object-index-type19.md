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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "method",
                "rawText": "method",
                "flags": 96,
                "start": 8,
                "end": 15
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
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
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "key": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "type": {
                                            "kind": 134234252,
                                            "flags": 64,
                                            "start": 37,
                                            "end": 41
                                        },
                                        "flags": 0,
                                        "start": 22,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 20,
                                "end": 43
                            },
                            "flags": 0,
                            "start": 19,
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
                "start": 15,
                "end": 44
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
            "typeParameters": null,
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

function method(obj) {}
```

### Diagnostics

```javascript
✔ No errors
```

