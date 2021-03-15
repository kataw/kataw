# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\switch\gen\switch_triple
> :: test: switch triple
> :: case: false
## Input

`````js
switch switch switch false
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch switch switch false",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 6,
            "end": 13
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 4260391,
                "text": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 26
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 21,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

