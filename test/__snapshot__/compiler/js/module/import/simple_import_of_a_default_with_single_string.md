# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import x from 'y'
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import x from 'y'",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": {
                    "kind": 4261583,
                    "text": "y",
                    "rawText": "y",
                    "flags": 16842752,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "moduleSpecifier": null,
                "importClause": {
                    "kind": 109,
                    "defaultBinding": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 6,
                        "end": 8
                    },
                    "nameSpaceImport": null,
                    "namedImports": null,
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 17
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
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

