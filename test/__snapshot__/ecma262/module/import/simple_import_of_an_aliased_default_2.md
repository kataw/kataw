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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 9,
                "end": 14
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "y",
                "rawText": "\"y\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 25
        }
    ],
    "isModule": true,
    "source": "import x, * as a from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 11
✖ Expected a `;` - start: 14, end: 16
✖ Expected a `;` - start: 16, end: 21
✖ Expected a `;` - start: 21, end: 25

```

