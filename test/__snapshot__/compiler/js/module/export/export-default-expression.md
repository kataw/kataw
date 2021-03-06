# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default (1 + 2);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default (1 + 2);",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65563,
                        "left": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
                        "operator": "+",
                        "right": {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 21
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 22
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 23
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
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

