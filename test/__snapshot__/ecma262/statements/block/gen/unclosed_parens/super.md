# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
{( super
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
                                "kind": 129,
                                "member": {
                                    "kind": 4259935,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 8
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{( super",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 2, end: 8
✖ Dot property must be an identifier - start: 8, end: 8
✖ Expected a ')' to match the '(' token here - start: 3, end: 8

```

