# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import typeof { foo25, bar1 } from "baz";

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
            "typeofKeyword": {
                "kind": 138477613,
                "flags": 64,
                "transformFlags": 8192,
                "start": 6,
                "end": 13
            },
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 34
                },
                "from": {
                    "kind": 201392131,
                    "text": "baz",
                    "rawText": "\"baz\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 40
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 29,
                "end": 40
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
                                    "text": "foo25",
                                    "rawText": "foo25",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 21
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 21
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "bar1",
                                    "rawText": "bar1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 27
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 27
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 27
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 29
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": true,
    "source": "import typeof { foo25, bar1 } from \"baz\";\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
import typeof {  foo25,  bar1 } from "\"baz\"";
```

### Diagnostics

```javascript
✔ No errors
```

