# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {a: b} from "bar";
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import {a: b} from \"bar\";",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "a",
                                        "rawText": "a",
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
                            "flags": 65538,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 65538,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 9
                    },
                    "isTypeOnly": false,
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "b",
                    "rawText": "b",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 12
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
                    "start": 13,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 18,
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 19,
            "length": 0
        }
    ],
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

