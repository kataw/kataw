# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import a, *= from 'f';
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import a, *= from 'f';",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": {
                    "kind": 65550,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 9
                    },
                    "operator": "*=",
                    "right": {
                        "kind": 196712,
                        "text": "from",
                        "rawText": "from",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 17
                    },
                    "flags": 16842752,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 17
                },
                "moduleSpecifier": null,
                "importClause": {
                    "kind": 109,
                    "defaultBinding": {
                        "kind": 131102,
                        "text": "a",
                        "rawText": "a",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 6,
                        "end": 8
                    },
                    "nameSpaceImport": null,
                    "namedImports": null,
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
                "end": 17
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
                    "start": 17,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 22
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

