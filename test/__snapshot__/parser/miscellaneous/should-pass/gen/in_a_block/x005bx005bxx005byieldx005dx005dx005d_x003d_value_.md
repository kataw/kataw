# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: [[x[yield]]] = value;
## Input

`````js
{ [[x[yield]]] = value; }
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 536871042,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 4,
                                                            "end": 5
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "start": 6,
                                                            "end": 11
                                                        },
                                                        "flags": 32,
                                                        "start": 4,
                                                        "end": 12
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 4,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 14
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 14,
                                "end": 16
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "value",
                                "rawText": "value",
                                "flags": 96,
                                "start": 16,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ [[x[yield]]] = value; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

{
  [[]] = value;
}
```

### Diagnostics

```javascript
✔ No errors
```

