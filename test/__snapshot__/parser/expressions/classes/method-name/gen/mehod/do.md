# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/method-name/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\method-name\gen\mehod
> :: test: mehod
> :: case: do
## Input

`````js
({do(x, y) {}});
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
                                        "text": "do",
                                        "rawText": "do",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 4
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 6
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 9
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 13
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "({do(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

({ do(x, y) {} });
```

### Diagnostics

```javascript
✔ No errors
```

