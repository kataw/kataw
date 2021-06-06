# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: x = {__proto__: a, __proto__: b} = y
## Input

`````js
{ x = {__proto__: a, __proto__: b} = y }
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
                                "text": "x",
                                "rawText": "x",
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 16
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 19
                                                },
                                                "flags": 36,
                                                "start": 7,
                                                "end": 19
                                            },
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 30
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 31,
                                                    "end": 33
                                                },
                                                "flags": 36,
                                                "start": 20,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 20,
                                        "start": 7,
                                        "end": 33
                                    },
                                    "flags": 52,
                                    "start": 5,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 36
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "{ x = {__proto__: a, __proto__: b} = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

{
  x = { __proto__: a, __proto__: b } = y;
}
```

### Diagnostics

```javascript
✔ No errors
```

