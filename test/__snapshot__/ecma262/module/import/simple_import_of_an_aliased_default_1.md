# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import * as a from "y"
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
                        "start": 6,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 6,
                        "end": 8
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 6,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "y",
                "rawText": "\"y\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "import * as a from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 8
✖ Expected a `;` - start: 11, end: 13
✖ Expected a `;` - start: 13, end: 18
✖ Expected a `;` - start: 18, end: 22

```

