# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: {catch
## Options

`````js
{}
`````
## Input

`````js
{( {catch
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
                                "transformFlags": 0,
                                "start": 1,
                                "end": 9
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 9
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{( {catch",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 9, end: 9
✖ ',' expected - start: 4, end: 9

```

