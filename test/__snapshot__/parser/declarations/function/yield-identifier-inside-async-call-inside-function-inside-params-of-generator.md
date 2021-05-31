# Kataw parser test case

## Input

`````js
function* g( x = function() { async(yield) }) {};
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 16,
                                "end": 25
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 25,
                                "end": 27
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 41
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 29,
                                                "end": 29
                                            },
                                            "flags": 268435488,
                                            "start": 29,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 29,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 27,
                                "end": 44
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 16,
                            "end": 44
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 44
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 45
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 47,
                    "end": 47
                },
                "flags": 32,
                "start": 45,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 48
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 48,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function* g( x = function() { async(yield) }) {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

function * g(x = function () {
  async(yield)
}) {}

```

### Diagnostics

```javascript
✔ No errors
```

