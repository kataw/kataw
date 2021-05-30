# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/classes/method-name/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\method-name\gen\mehod
> :: test: mehod
> :: case: instanceof
## Input

`````js
({instanceof(x, y) {}});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "instanceof",
                                        "rawText": "instanceof",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 12
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 203,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 32,
                                                "start": 13,
                                                "end": 14
                                            },
                                            {
                                                "kind": 203,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 17
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 32,
                                                "start": 15,
                                                "end": 17
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 21
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "({instanceof(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

({ instanceof(x, y) {} });
```

### Diagnostics

```javascript
✔ No errors
```

