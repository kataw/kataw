# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/assign/keyword_with_escapes_check/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\assign\keyword_with_escapes_check\gen\assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: \u0064ebugger
## Input

`````js
(\u0064ebugger = x);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(\\u0064ebugger = x);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 1
                    },
                    "flags": 4194306,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            {
                "kind": 6291518,
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 1,
                "end": 14
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            {
                "kind": 6291526,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 19,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

