# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {default as foo} from "foo";
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
                    "start": 23,
                    "end": 28
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 34
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 23,
                "end": 34
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
                        "specifiers": [
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "default",
                                    "rawText": "default",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 15
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 18
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 22
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 22
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": true,
    "source": "import {default as foo} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
import { default as foo } from "\"foo\"";
```

### Diagnostics

```javascript
✔ No errors
```

