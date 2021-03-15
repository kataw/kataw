# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_triple
> :: test: do triple
> :: case: /**/ /x do while
## Input

`````js
do do do /**/ /x do while while while while
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do do do /**/ /x do while while while while",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 43,
                "end": 43
            },
            "statement": {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 43
                },
                "statement": {
                    "kind": 2097218,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 43
                    },
                    "statement": {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4260544,
                            "text": "/x do while while while while",
                            "flags": 1048576,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 43
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 43
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 43
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 43
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 43,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'while' expected.",
            "start": 14,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

