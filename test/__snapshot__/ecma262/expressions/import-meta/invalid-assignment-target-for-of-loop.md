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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 299,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 64,
                    "start": 5,
                    "end": 11
                },
                "metaIdentifier": {
                    "kind": 16595,
                    "flags": 96,
                    "start": 12,
                    "end": 16
                },
                "flags": 11,
                "start": 96,
                "end": 16
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 16,
                "end": 19
            },
            "expression": {
                "kind": 138477575,
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
            "flags": 80,
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

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 19, end: 24

```

