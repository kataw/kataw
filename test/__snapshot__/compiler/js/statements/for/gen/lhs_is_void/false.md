# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/for/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\for\gen\lhs_is_void
> :: test: lhs is void
> :: case: false
## Input

`````js
for (void a.b in c);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for (void a.b in c);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099286,
                "initializer": {
                    "kind": 65774,
                    "operator": "void",
                    "operand": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13,
                        "period": {
                            "kind": 254,
                            "pos": 11,
                            "end": 12
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 13
                },
                "expression": {
                    "kind": 196712,
                    "text": "c",
                    "rawText": "c",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "statement": {
                    "kind": 6291526,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
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
    "diagnostics": [],
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

