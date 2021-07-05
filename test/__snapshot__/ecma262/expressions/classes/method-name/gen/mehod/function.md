# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/method-name/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/method-name/gen/mehod
> :: test: mehod
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
({function(x, y) {}});
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "function",
                                        "rawText": "function",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 15
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "start": 11,
                                        "end": 16
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 20
                },
                "flags": 0,
                "start": 34,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "({function(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

({function(x, y) {}});
```

### Diagnostics

```javascript
✔ No errors
```

