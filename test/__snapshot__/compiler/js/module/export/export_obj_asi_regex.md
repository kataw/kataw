# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {}
/foo/
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export {}\n/foo/",
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
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4260544,
                    "text": "/foo/",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
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
    "diagnostics": [],
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

