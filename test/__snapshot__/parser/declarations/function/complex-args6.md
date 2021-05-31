# Kataw parser test case

## Input

`````js
function f([b, a], {b}) {}
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 202,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 13
                                },
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 17
                    },
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 222,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 20,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 20,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 23
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "start": 23,
                "end": 26
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "function f([b, a], {b}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

function f([b, a], {
    b
  }) {}
```

### Diagnostics

```javascript
✔ No errors
```

