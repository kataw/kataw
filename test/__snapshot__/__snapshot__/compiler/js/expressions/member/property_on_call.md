# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
a().b
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "a().b",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 74424,
                    "member": {
                        "kind": 66091,
                        "expression": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 1
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 3,
                            "elements": [],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 0,
                            "intersects": false,
                            "parent": null,
                            "emitNode": null,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 1,
                        "end": 3
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 4,
                        "end": 5
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 5
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 5
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 5
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

