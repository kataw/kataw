# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import **= from 'f';
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import **= from 'f';",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": null,
                "moduleSpecifier": null,
                "importClause": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "from",
                    "rawText": "from",
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
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "f",
                    "rawText": "f",
                    "flags": 16842754,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 15,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 20
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
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 16,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

