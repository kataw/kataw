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
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 9,
                "end": 9
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
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
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
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
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
            "transformFlags": 0,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "\"bar\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 18,
            "end": 25
        }
    ],
    "isModule": true,
    "source": "import {a: b} from \"bar\";",
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
✖ ',' expected - start: 9, end: 10
✖ Declaration or statement expected - start: 12, end: 13
✖ Expected a `;` - start: 18, end: 24

```

