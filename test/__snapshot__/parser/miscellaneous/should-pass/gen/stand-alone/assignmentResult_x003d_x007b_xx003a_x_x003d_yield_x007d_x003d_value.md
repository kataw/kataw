# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: assignmentResult = { x: x = yield } = value
## Options

`````js
{}
`````
## Input

`````js
assignmentResult = { x: x = yield } = value
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "assignmentResult",
                    "rawText": "assignmentResult",
                    "flags": 96,
                    "start": 0,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 20,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 20,
                            "end": 33
                        },
                        "flags": 48,
                        "start": 18,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 35,
                        "end": 37
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "start": 37,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 43
                },
                "flags": 32,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "assignmentResult = { x: x = yield } = value",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

assignmentResult = { x: x = yield } = value;
```

### Diagnostics

```javascript
✔ No errors
```

