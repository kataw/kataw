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
    "kind": 2243,
    "source": "import a, *= from 'f';",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 65550,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "operator": "*=",
                "right": {
                    "kind": 196712,
                    "text": "from",
                    "rawText": "from",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 17
                },
                "flags": 33554432,
                "symbol": null,
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
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "isTypeOnly": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "f",
                "rawText": "f",
                "flags": 33554433,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": true,
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
    "original": null,
    "symbol": null,
    "flags": 0,
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

