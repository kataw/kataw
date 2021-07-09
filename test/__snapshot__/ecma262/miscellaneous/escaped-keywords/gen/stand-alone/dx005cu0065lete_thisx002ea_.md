# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/gen/stand-alone
> :: test: stand-alone
> :: case: d\u0065lete this.a;
## Options

`````js
{}
`````
## Input

`````js
d\u0065lete this.a;
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 16480,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 11
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 16
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 11,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "d\\u0065lete this.a;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 0, end: 16

```

