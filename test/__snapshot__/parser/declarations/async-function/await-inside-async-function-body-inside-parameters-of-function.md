# Kataw parser test case

## Input

`````js
function fn(x = async function () { await 1 }) {}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 8,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 15,
                                "end": 21
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 21,
                                "end": 30
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 30,
                                "end": 33
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 90224,
                                                    "flags": 0,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 43
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 45
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 160,
                            "start": 15,
                            "end": 45
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 45
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 46
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 48,
                    "end": 48
                },
                "flags": 32,
                "start": 46,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function fn(x = async function () { await 1 }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

function fn(x = async function () {
  await 1;
}) {}
```

### Diagnostics

```javascript
✔ No errors
```

