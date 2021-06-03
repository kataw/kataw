# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\position\gen\arr
> :: test: arr
> :: case: async async => {}
## Input

`````js
[async async => {}]
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
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 12,
                                "end": 15
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 6,
                                "end": 12
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 1,
                                "end": 6
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 17,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 18
                            },
                            "flags": 288,
                            "start": 1,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "[async async => {}]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

[async async =>  {}];
```

### Diagnostics

```javascript
✔ No errors
```

