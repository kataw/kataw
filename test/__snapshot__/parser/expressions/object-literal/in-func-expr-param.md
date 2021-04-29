# Kataw parser test case

## Input

`````js
(function({x, ...y}) { })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 222,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 11,
                                                "end": 12
                                            },
                                            {
                                                "kind": 222,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 13,
                                                    "end": 18
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 13,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 11,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 19
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 34,
                                "start": 10,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 9,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 20,
                        "end": 24
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "(function({x, ...y}) { })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

