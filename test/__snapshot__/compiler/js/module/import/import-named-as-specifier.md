# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {bar as baz} from "foo";
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import {bar as baz} from \"foo\";",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": {
                    "kind": 4261583,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 30
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
                                    "name": {
                                        "kind": 196711,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 11
                                    },
                                    "binding": {
                                        "kind": 131102,
                                        "text": "baz",
                                        "rawText": "baz",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 18
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 18
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 19
                    },
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 19
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 31
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

