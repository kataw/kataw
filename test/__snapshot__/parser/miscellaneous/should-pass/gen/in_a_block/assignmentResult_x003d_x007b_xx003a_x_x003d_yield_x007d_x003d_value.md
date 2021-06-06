# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: assignmentResult = { x: x = yield } = value
## Input

`````js
{ assignmentResult = { x: x = yield } = value }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                "start": 1,
                                "end": 18
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 18,
                                "end": 20
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
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 27,
                                                        "end": 29
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 29,
                                                        "end": 35
                                                    },
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 35
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 22,
                                        "end": 35
                                    },
                                    "flags": 48,
                                    "start": 20,
                                    "end": 37
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 39
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "value",
                                    "rawText": "value",
                                    "flags": 96,
                                    "start": 39,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "{ assignmentResult = { x: x = yield } = value }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

{
  assignmentResult = { x: x = yield } = value;
}
```

### Diagnostics

```javascript
✔ No errors
```

