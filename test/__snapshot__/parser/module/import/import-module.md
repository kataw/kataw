# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import "foo";
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
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 201392131,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 6,
                "end": 12
            },
            "importClause": null,
            "flags": 128,
            "start": 6,
            "end": 13
        }
    ],
    "isModule": true,
    "text": "import \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

