# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: (localVar |= defaultValue) => {}
## Options

`````js
{}
`````
## Input

`````js
(localVar |= defaultValue) => {}
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
                        "kind": 134299649,
                        "text": "localVar",
                        "rawText": "localVar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4136,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "defaultValue",
                        "rawText": "defaultValue",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 0,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 26
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "(localVar |= defaultValue) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' is not allowed here. Did you mean ';'? - start: 26, end: 29

```

