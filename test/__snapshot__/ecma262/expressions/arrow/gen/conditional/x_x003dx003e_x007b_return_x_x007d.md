# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/gen/conditional
> :: test: conditional
> :: case: x => { return x; }
## Options

`````js
{}
`````
## Input

`````js
x => { return x; } , bar;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 0,
                            "end": 1
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 1,
                            "end": 4
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 161,
                                        "returnKeyword": {
                                            "kind": 37757022,
                                            "flags": 80,
                                            "start": 6,
                                            "end": 13
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 80,
                                        "start": 6,
                                        "end": 16
                                    }
                                ],
                                "flags": 32,
                                "start": 6,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 18
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 20,
                        "end": 24
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "x => { return x; } , bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

x => {
  return x;
}, bar;
```

### Diagnostics

```javascript
✔ No errors
```

