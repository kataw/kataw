# Kataw parser test case

## Input

`````js
declare enum E {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare enum E {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "E",
                    "rawText": "E",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 12,
                    "end": 14
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 16
                },
                "isConst": false,
                "flags": 201326592,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 7,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 17
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

