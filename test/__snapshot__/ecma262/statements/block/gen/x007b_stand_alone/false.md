# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
{ false
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
                            "kind": 205586437,
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "{ false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 2, end: 7

```

