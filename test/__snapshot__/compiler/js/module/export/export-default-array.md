# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default [];
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default [];",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 67207686,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 18
    },
    "jsx": true,
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

