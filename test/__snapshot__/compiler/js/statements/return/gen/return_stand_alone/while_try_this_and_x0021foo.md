# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\return\gen\return_stand_alone
> :: test: return stand alone
> :: case: while try this and !foo
## Input

`````js
return while try this and !foo
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "return while try this and !foo",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
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
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "statement": {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "catchClause": null,
                "finallyBlock": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 16
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 6,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260571,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 21
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 16,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 74398,
                "expression": {
                    "kind": 196712,
                    "text": "and",
                    "rawText": "and",
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 25,
                "end": 27
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 21,
            "end": 27
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "foo",
                "rawText": "foo",
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 27,
                "end": 30
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 27,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

