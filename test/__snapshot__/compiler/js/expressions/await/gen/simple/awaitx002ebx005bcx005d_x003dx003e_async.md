# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: await.b[c] => async
## Input

`````js
await.b[c] => async
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "await.b[c] => async",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66116,
                    "member": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 5
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 7
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7,
                        "period": {
                            "kind": 254,
                            "pos": 5,
                            "end": 6
                        }
                    },
                    "expression": {
                        "kind": 196712,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

