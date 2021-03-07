# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export {}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": null,
                "namedExports": {
                    "kind": 152,
                    "exportsList": {
                        "kind": 80,
                        "specifiers": [],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 9
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

