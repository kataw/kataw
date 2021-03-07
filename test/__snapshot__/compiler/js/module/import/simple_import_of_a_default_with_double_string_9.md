# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x, z,} from "y"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import {x, z,} from \"y\"",
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
                    "start": 19,
                    "end": 23
                },
                "moduleSpecifier": null,
                "importClause": {
                    "kind": 109,
                    "nameSpaceImport": null,
                    "namedImports": {
                        "kind": 153,
                        "importsList": {
                            "kind": 115,
                            "specifiers": [
                                {
                                    "kind": 113,
                                    "moduleExportName": null,
                                    "name": {
                                        "kind": 4325406,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    },
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
                                },
                                {
                                    "kind": 113,
                                    "moduleExportName": null,
                                    "name": {
                                        "kind": 4325406,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 13
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 14
                    },
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 14
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

