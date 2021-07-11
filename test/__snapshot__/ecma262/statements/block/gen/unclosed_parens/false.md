# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
{( false
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
                                "kind": 205586437,
                                "flags": 96,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{( false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 3, end: 8

```

