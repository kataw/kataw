# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import foo, * as bar from "foo";
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
                    "start": 20,
                    "end": 25
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 25,
                    "end": 31
                },
                "flags": 0,
                "start": 20,
                "end": 31
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 6,
                    "end": 10
                },
                "nameSpaceImport": {
                    "kind": 255,
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "asKeyword": {
                        "kind": 16494,
                        "flags": 0,
                        "start": 13,
                        "end": 16
                    },
                    "binding": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 16,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 11,
                    "end": 20
                },
                "namedImports": null,
                "flags": 16,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "import foo, * as bar from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

import foo, * as   ;
```

### Diagnostics

```javascript
✔ No errors
```

