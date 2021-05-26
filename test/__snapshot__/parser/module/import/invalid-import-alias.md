# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {'\uD800' as x} from 'foo'
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 22,
                    "end": 27
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 27,
                    "end": 33
                },
                "flags": 0,
                "start": 22,
                "end": 33
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
                                "moduleExportName": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 19
                                },
                                "name": {
                                    "kind": 201392131,
                                    "text": "\ud800",
                                    "rawText": "'\\uD800'",
                                    "flags": 4210784,
                                    "start": 8,
                                    "end": 16
                                },
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 21
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 21
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 22
                },
                "flags": 16,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "import {'\\uD800' as x} from 'foo'",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

  "'\uD800'" x }  ;
```

### Diagnostics

```javascript
✔ No errors
```

