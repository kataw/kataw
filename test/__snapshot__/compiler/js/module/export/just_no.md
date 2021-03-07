# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export ...x = y
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export ...x = y",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": null,
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65538,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 11
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 15
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

