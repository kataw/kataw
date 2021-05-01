# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import foo;
`````

## Output

### Hybrid CST

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
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 11,
                    "end": 11
                },
                "flags": 0,
                "start": 10,
                "end": 11
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
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 6,
                "end": 10
            },
            "flags": 16,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": true,
    "source": "import foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 11, end: 11

```

