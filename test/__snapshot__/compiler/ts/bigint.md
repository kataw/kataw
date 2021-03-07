# Kataw parser test case

## Input

`````js
type T00 = bigint;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type T00 = bigint;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T00",
                    "rawText": "T00",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "type": {
                    "kind": 4202520,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 10,
                    "end": 17
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 18
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
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
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

