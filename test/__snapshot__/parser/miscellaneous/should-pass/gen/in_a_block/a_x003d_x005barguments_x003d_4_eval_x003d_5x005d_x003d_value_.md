# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: a = [arguments = 4, eval = 5] = value;
## Input

`````js
{ a = [arguments = 4, eval = 5] = value; }
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
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "arguments",
                                                    "rawText": "arguments",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 16
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 16,
                                                    "end": 18
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 96,
                                                    "start": 18,
                                                    "end": 20
                                                },
                                                "flags": 32,
                                                "start": 7,
                                                "end": 20
                                            },
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "eval",
                                                    "rawText": "eval",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 26
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 26,
                                                    "end": 28
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 30
                                                },
                                                "flags": 32,
                                                "start": 21,
                                                "end": 30
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 31
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 31,
                                    "end": 33
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "value",
                                    "rawText": "value",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 39
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "{ a = [arguments = 4, eval = 5] = value; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

{
  a = [arguments = 4, eval = 5] = value;
}
```

### Diagnostics

```javascript
✔ No errors
```

