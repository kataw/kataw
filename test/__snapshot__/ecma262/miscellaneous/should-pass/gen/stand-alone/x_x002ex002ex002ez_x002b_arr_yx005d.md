# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: x, ...z + arr, y]
## Options

`````js
{}
`````
## Input

`````js
x, ...z + arr, y]
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 6,
                        "end": 13
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 16
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 6,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "x, ...z + arr, y]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 2, end: 6
✖ Expected a `;` - start: 16, end: 17

```

