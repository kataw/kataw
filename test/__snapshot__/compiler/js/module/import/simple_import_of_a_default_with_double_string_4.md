# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x} from "y"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import {x} from \"y\"",
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
                    "start": 15,
                    "end": 19
                },
                "moduleSpecifier": null,
                "importClause": {
                    "kind": 109,
                    "defaultBinding": null,
                    "nameSpaceImport": null,
                    "namedImports": {
                        "kind": 153,
                        "importsList": {
                            "kind": 115,
                            "specifiers": [
                                {
                                    "kind": 113,
                                    "moduleExportName": null,
                                    "name": null,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 10
                    },
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 10
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
