# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/template
> :: test: template
> :: case: async x => {}
## Options

`````js
{}
`````
## Input

`````js
`a ${async x => {}} b`
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
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "a ",
                        "text": "a ",
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 5,
                                "end": 10
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 12,
                                "end": 15
                            },
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
                            "start": 5,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 18
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": " b",
                    "rawText": " b",
                    "flags": 96,
                    "start": 18,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "`a ${async x => {}} b`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

`a ${async x => {}} b`;
```

### Diagnostics

```javascript
✔ No errors
```

