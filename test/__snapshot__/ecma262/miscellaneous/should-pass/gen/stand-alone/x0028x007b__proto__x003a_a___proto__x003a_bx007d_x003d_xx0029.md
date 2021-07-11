# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: ({__proto__: a, __proto__: b} = x)
## Options

`````js
{}
`````
## Input

`````js
({__proto__: a, __proto__: b} = x)
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 36,
                                    "start": 2,
                                    "end": 14
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 36,
                                    "start": 15,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "flags": 20,
                            "start": 2,
                            "end": 28
                        },
                        "flags": 52,
                        "start": 1,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 31,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "({__proto__: a, __proto__: b} = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ({ __proto__: a, __proto__: b } = x);

```

### Diagnostics

```javascript
✔ No errors
```

