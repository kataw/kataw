# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { , };
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
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 8,
                    "end": 8
                },
                "flags": 0,
                "start": 8,
                "end": 8
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
                        "start": 8,
                        "end": 8
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 8
                },
                "flags": 16,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 12,
            "end": 13
        }
    ],
    "isModule": true,
    "source": "import { , };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 10
✖ Declaration or statement expected - start: 10, end: 12

```

