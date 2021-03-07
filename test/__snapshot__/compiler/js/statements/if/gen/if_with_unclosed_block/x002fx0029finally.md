# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\if_with_unclosed_block
> :: test: if with unclosed block
> :: case: /)finally
## Input

`````js
else {} if(x) { /)finally
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "else {} if(x) { /)finally",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            {
                "kind": 2097257,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "consequent": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 4260544,
                                    "text": "/)finally",
                                    "flags": 524288,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 25
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 25
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 25
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 25
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 25,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 16,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

