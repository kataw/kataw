# Kataw parser test case

## Input

`````js
for (x of 3) continue
/
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for (x of 3) continue\n/",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099287,
                "initializer": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 6
                },
                "expression": {
                    "kind": 4261540,
                    "text": 3,
                    "rawText": "3",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 11
                },
                "statement": {
                    "kind": 2097212,
                    "label": null,
                    "flags": 540672,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 12,
                    "end": 21
                },
                "isAwait": false,
                "flags": 540672,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 21
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4260544,
                    "text": "/",
                    "flags": 540672,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 21,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 21,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 24,
            "length": 1
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

