# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {} from "foo";
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
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 14
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 9,
                "end": 20
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "import {} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

import {} from "\"foo\"";
```

### Diagnostics

```javascript
✔ No errors
```

