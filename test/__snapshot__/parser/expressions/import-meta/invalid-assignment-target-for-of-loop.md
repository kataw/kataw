# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
for (import.meta of null) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 16,
                "end": 19
            },
            "initializer": {
                "kind": 120,
                "expression": {
                    "kind": 207,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 0,
                        "start": 5,
                        "end": 11
                    },
                    "flags": 11,
                    "start": 96,
                    "end": 16
                },
                "flags": 16,
                "start": 11,
                "end": 16
            },
            "expression": {
                "kind": 269,
                "text": null,
                "flags": 96,
                "start": 19,
                "end": 24
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 25,
                "end": 27
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "for (import.meta of null) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 16, end: 19
✖ Invalid left-hand side in for-of loop - start: 19, end: 24

```

