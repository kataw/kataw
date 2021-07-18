# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: interface x {
## Options

`````js
{}
`````
## Input

`````js
{( interface x {
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
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 1,
                                "end": 12
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 14
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 16
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{( interface x {",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 13, end: 14
✖ '{' is not allowed here. Did you mean ';'? - start: 14, end: 16

```

