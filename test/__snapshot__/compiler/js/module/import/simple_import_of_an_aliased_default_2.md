# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import x, * as a from "y"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import x, * as a from \"y\"",
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
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 25
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
                    "nameSpaceImport": {
                        "kind": 131102,
                        "text": "a",
                        "rawText": "a",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 14,
                        "end": 16
                    },
                    "namedImports": null,
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 16
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

