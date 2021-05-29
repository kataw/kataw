# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import.m\u0065ta;
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
                "kind": 207,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "start": 0,
                    "end": 6
                },
                "metaIdentifier": {
                    "kind": 16595,
                    "flags": 16448,
                    "start": 7,
                    "end": 16
                },
                "flags": 6,
                "start": 96,
                "end": 16
            },
            "flags": 16,
            "start": 6,
            "end": 17
        }
    ],
    "isModule": true,
    "source": "import.m\\u0065ta;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'import.meta' must not contain escaped characters - start: 16, end: 17

```

