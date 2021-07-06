# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import a { b, c } from 'm.js'
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
                    "start": 17,
                    "end": 22
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 17,
                "end": 29
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 15
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 17
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": true,
    "source": "import a { b, c } from 'm.js'",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

import a{  b,  c } from "'m.js'";
```

### Diagnostics

```javascript
✔ No errors
```

