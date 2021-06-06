# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: [[x = true] = true] = y
## Input

`````js
[[x = true] = true] = y
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
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
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 2,
                                                    "end": 3
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 3,
                                                    "end": 5
                                                },
                                                "right": {
                                                    "kind": 24752947,
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 10
                                                },
                                                "flags": 32,
                                                "start": 2,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 32,
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
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "[[x = true] = true] = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

[[x = true] = true] = y;
```

### Diagnostics

```javascript
✔ No errors
```

