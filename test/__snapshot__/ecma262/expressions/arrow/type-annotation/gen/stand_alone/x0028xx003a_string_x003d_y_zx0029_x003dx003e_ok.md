# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/gen/stand_alone
> :: test: stand alone
> :: case: (x: string = y, z) => ok
## Options

`````js
{}
`````
## Input

`````js
(x: string = y, z) => ok
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 2
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 14
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 3,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "ok",
                "rawText": "ok",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "(x: string = y, z) => ok",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 2, end: 3
✖ ')' is not allowed here. Did you mean ';'? - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 21

```

