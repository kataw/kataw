# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import.notMeta;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 299,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "metaIdentifier": null,
                "flags": 6,
                "transformFlags": 0,
                "start": 96,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "notMeta",
                "rawText": "notMeta",
                "flags": 96,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "import.notMeta;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'import.meta' is the only valid meta property for import - start: 6, end: 14
✖ '; ' expected - start: 7, end: 14

```

