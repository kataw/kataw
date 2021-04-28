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
            "initializer": {
                "kind": 120,
                "expression": {
                    "kind": 207,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 5,
                        "start": 0,
                        "end": 11
                    },
                    "flags": 11,
                    "start": 768,
                    "end": 16
                },
                "flags": 128,
                "start": 11,
                "end": 16
            },
            "expression": {
                "kind": 269,
                "text": null,
                "flags": 768,
                "start": 19,
                "end": 24
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 25,
                "end": 27
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "text": "for (import.meta of null) ;",
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
✖ Invalid left-hand side in for-of loop - start: 19, end: 24

```

