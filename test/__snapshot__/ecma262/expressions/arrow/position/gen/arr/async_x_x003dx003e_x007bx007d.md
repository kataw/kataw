# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/arr
> :: test: arr
> :: case: async x => {}
## Options

`````js
{}
`````
## Input

`````js
[async x => {}]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 1,
                                "end": 6
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 6,
                                "end": 8
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 8,
                                "end": 11
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 13,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 14
                            },
                            "flags": 288,
                            "start": 1,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "[async x => {}]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

[async x => {}];
```

### Diagnostics

```javascript
✔ No errors
```

