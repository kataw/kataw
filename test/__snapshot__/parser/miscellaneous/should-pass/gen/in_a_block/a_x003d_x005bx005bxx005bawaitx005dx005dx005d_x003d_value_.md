# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: a = [[x[await]]] = value;
## Input

`````js
{ a = [[x[await]]] = value; }
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
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
                                                                "start": 8,
                                                                "end": 9
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 10,
                                                                "end": 15
                                                            },
                                                            "flags": 32,
                                                            "start": 8,
                                                            "end": 16
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 8,
                                                    "end": 16
                                                },
                                                "flags": 32,
                                                "start": 7,
                                                "end": 17
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 18,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "value",
                                    "rawText": "value",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ a = [[x[await]]] = value; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

{
  a = [[]] = value;
}
```

### Diagnostics

```javascript
✔ No errors
```

