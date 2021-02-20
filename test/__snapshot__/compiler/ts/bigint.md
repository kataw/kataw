# Kataw parser test case

## Input

`````js
type T00 = bigint;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "type T00 = bigint;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "T00",
                    "rawText": "T00",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 8
                },
                "type": {
                    "kind": 4194328,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 10,
                    "end": 17
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 18
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
    "end": 18
}
```

### Printed


```javascript

type T00 = bigint;

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

